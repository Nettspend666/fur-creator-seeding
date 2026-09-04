import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "/Users/kuboshita/Downloads/FUR/japan_creator_outreach_prospects.xlsx";
const outputDir = "/Users/kuboshita/Documents/ChatGPT/FUR/outputs/fur-continuity";
const outputPath = path.join(outputDir, "japan_creator_outreach_prospects.xlsx");
const previewPath = path.join(outputDir, "outreach-tracker-preview.png");
const mode = process.argv[2] ?? "inspect";

const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("送信トラッカー");

if (mode === "inspect") {
  const overview = await workbook.inspect({
    kind: "workbook,sheet,table",
    maxChars: 6000,
    tableMaxRows: 8,
    tableMaxCols: 12,
    tableMaxCellChars: 100,
  });
  const region = await workbook.inspect({
    kind: "region",
    sheetId: "送信トラッカー",
    range: "A1:O45",
    maxChars: 12000,
  });
  await fs.mkdir(outputDir, { recursive: true });
  const preview = await workbook.render({
    sheetName: "送信トラッカー",
    range: "A1:O35",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));
  console.log(overview.ndjson);
  console.log(region.ndjson);
  console.log(`PREVIEW=${previewPath}`);
  process.exit(0);
}

if (mode !== "edit") {
  throw new Error(`Unknown mode: ${mode}`);
}

const sentOutreach = new Map([
  ["Bibiy.", { channel: "メール", address: "support@bibiy.store" }],
  ["Èaphi", { channel: "メール", address: "contact@eaphi.co.jp" }],
  ["foufou", { channel: "メール", address: "support@foufou.co.jp" }],
  ["Lumier", { channel: "メール", address: "info@lumier.jp" }],
  ["M me eme", { channel: "メール", address: "info@m-me-eme.com" }],
  ["IRIS47", { channel: "メール", address: "iris47@hooves.info" }],
  ["Palnart Poc", { channel: "メール", address: "datearrow@broughsuperior.jp" }],
  ["KESSAKU", { channel: "メール", address: "info@kessaku-jewelry.com" }],
  ["unigem", { channel: "メール", address: "info@unigem.jp" }],
  ["Diaspora skateboards", { channel: "メール", address: "diasporaskateboards@gmail.com" }],
  ["Libere", { channel: "メール", address: "info@libere-official.com" }],
]);

const used = sheet.getUsedRange();
const values = used.values;
const headerRow = values.findIndex((row) => row.some((value) => String(value ?? "").includes("ブランド")));
if (headerRow < 0) throw new Error("送信トラッカーのヘッダー行が見つかりませんでした。");

const headers = values[headerRow].map((value) => String(value ?? "").trim());
const brandCol = headers.findIndex((value) => value.includes("ブランド"));
const channelCol = headers.findIndex((value) => value.includes("チャネル"));
const addressCol = headers.findIndex((value) => value.includes("宛先"));
const statusCol = headers.findIndex((value) => value.includes("ステータス"));
const sentDateCol = headers.findIndex((value) => value.includes("送信日"));
if ([brandCol, channelCol, addressCol, statusCol, sentDateCol].some((index) => index < 0)) {
  throw new Error(`必要な列がありません: ${headers.join(" | ")}`);
}

const updated = [];
for (let row = headerRow + 1; row < values.length; row += 1) {
  const brand = String(values[row][brandCol] ?? "").trim();
  const sent = sentOutreach.get(brand);
  if (!sent) continue;
  sheet.getCell(row, channelCol).values = [[sent.channel]];
  sheet.getCell(row, addressCol).values = [[sent.address]];
  sheet.getCell(row, statusCol).values = [["送信済み"]];
  sheet.getCell(row, sentDateCol).values = [[new Date("2026-09-04T00:00:00+09:00")]];
  sheet.getCell(row, sentDateCol).format.numberFormat = "yyyy-mm-dd";
  updated.push(brand);
}

const missing = [...sentOutreach.keys()].filter((brand) => !updated.includes(brand));
if (missing.length) throw new Error(`トラッカーで見つからないブランド: ${missing.join(", ")}`);

sheet.getRange("A3").values = [["✓ 11社への初回メールを2026年9月4日に送信済み。フォローは1回だけ・簡潔に行う。"]];

await fs.mkdir(outputDir, { recursive: true });
const preview = await workbook.render({
  sheetName: "送信トラッカー",
  range: "A1:O35",
  scale: 1,
  format: "png",
});
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);

const check = await workbook.inspect({
  kind: "region",
  sheetId: "送信トラッカー",
  range: "A1:O35",
  maxChars: 12000,
});
const formulaErrors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  maxChars: 5000,
});
console.log(check.ndjson);
console.log(formulaErrors.ndjson);
console.log(`UPDATED=${updated.join(",")}`);
console.log(`OUTPUT=${outputPath}`);
console.log(`PREVIEW=${previewPath}`);
