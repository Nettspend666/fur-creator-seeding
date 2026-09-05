import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/kuboshita/Documents/ChatGPT/FUR/outputs/fur-continuity/japan_creator_outreach_prospects.xlsx";
const previewPath = "/Users/kuboshita/Documents/ChatGPT/FUR/outputs/fur-continuity/floor31-prospects-preview.png";
const mode = process.argv[2] ?? "inspect";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

if (mode === "inspect") {
  console.log((await workbook.inspect({
    kind: "workbook,sheet,table",
    maxChars: 7000,
    tableMaxRows: 8,
    tableMaxCols: 14,
    tableMaxCellChars: 100,
  })).ndjson);
  console.log((await workbook.inspect({
    kind: "region",
    sheetId: "候補リスト",
    range: "A1:M45",
    maxChars: 22000,
  })).ndjson);
  const preview = await workbook.render({ sheetName: "候補リスト", range: "A1:M45", scale: 1, format: "png" });
  await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));
  console.log(`PREVIEW=${previewPath}`);
  process.exit(0);
}

if (mode !== "edit") throw new Error(`Unknown mode: ${mode}`);

const sheet = workbook.worksheets.getItem("候補リスト");

const prospects = [
  [
    "S", "-", "KOROMOS", "ユニセックスアパレル", null, "未確認",
    "https://www.instagram.com/_koromostudio/", "https://www.koromos.com/",
    "contact@koromostudio.com / Instagram DM", "未接触", null,
    "身体と衣服の関係を探る服作り。地域性や制作背景を伝える着用発信と相性がよい",
    "2025AWに千葉県多古町で国内初ショー。公式サイトに連絡先あり。送信前に直近投稿とフォロワー数を確認",
  ],
  [
    "S", "-", "糸柊子（shishuko）", "刺繍・リメイク", null, "未確認",
    "https://www.instagram.com/_shishuko_/", "https://shishuko.official.ec/",
    "BASE『ショップに質問する』/ Instagram DM", "未接触", null,
    "日本刺繍の色、金糸、ラメ糸を使う一点物。制作過程と着用の両方を見せる企画向き",
    "2024年に表参道POPUP、ECでコラボ商品を確認。送信前に直近投稿とフォロワー数を確認",
  ],
  [
    "S", "-", "tetta", "デニム・一点物", null, "未確認",
    "https://www.instagram.com/tetta__t/", "https://ttseigyo.thebase.in/",
    "BASEショップ問い合わせ / Instagram DM", "未接触", null,
    "手作業の加工を生かした一点物デニム。個別のディテールを伝える着用投稿と相性がよい",
    "2025年12月に渋谷で合同POPUP。送信前に販売状況、直近投稿、フォロワー数を確認",
  ],
  [
    "S", "-", "obafer", "ニット・ハンドクラフト", null, "未確認",
    "https://www.instagram.com/obafer_knitting/", null,
    "Instagram DM", "未接触", null,
    "手編みと国内工場生産を組み合わせたニット。素材感や手仕事を見せる投稿企画向き",
    "2025年11月にkirettoでハンドニット展開を確認。ブランド直通窓口はInstagramのみ。送信前に直近投稿とフォロワー数を確認。参考: https://note.com/kiretto_shop/n/n833050fcc46f",
  ],
  [
    "S", "-", "Experiments:Yohsuke", "シャツ・ユニセックス", null, "未確認",
    "https://www.instagram.com/experiments_yohsuke/", "https://note.com/experiments_yoh",
    "experiments.yohsuke@gmail.com / Instagram DM", "未接触", null,
    "デザインから縫製まで一人で手掛けるシャツ。技術と一着ごとの背景を伝える企画向き",
    "直接メールあり。公開情報の中心が2023年のため、送信前に現在の活動、販売状況、フォロワー数を再確認",
  ],
];

for (let row = 37; row <= 41; row += 1) {
  sheet.getRange(`A6:M6`).copyTo(sheet.getRange(`A${row}:M${row}`), "all");
}
sheet.getRange("A37:M41").values = prospects;
sheet.getRange("A2").values = [["対象：国内の小〜中規模ファッション・アクセサリーブランド｜フォロワー数は2026-09-05時点の公開プロフィール実測。未確認行は送信直前に再確認"]];
sheet.getRange("A37:M41").format.rowHeight = 42;
sheet.getRange("A37:M41").format.verticalAlignment = "top";
sheet.getRange("A37:M41").format.wrapText = true;
sheet.getRange("A37:M41").format.fill = "#C7C4FF";
sheet.getRange("A37:M41").format.font = { name: "Arial", size: 10, color: "#101114" };
sheet.getRange("G37:H41").format.font = { name: "Arial", size: 10, color: "#3F63D9" };
sheet.getRange("E37:E41").format.numberFormat = "#,##0";

const preview = await workbook.render({ sheetName: "候補リスト", range: "A1:M41", scale: 1, format: "png" });
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

console.log((await workbook.inspect({
  kind: "table",
  sheetId: "候補リスト",
  range: "A35:M41",
  include: "values,formulas",
  tableMaxRows: 10,
  tableMaxCols: 13,
  maxChars: 16000,
})).ndjson);
console.log((await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
  maxChars: 6000,
})).ndjson);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);
console.log(`OUTPUT=${workbookPath}`);
console.log(`PREVIEW=${previewPath}`);
