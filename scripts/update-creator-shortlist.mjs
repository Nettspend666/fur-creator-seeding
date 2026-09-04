import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/kuboshita/Documents/ChatGPT/FUR/outputs/fur-continuity/japan_creator_outreach_prospects.xlsx";
const previewPath = "/Users/kuboshita/Documents/ChatGPT/FUR/outputs/fur-continuity/creator-shortlist-preview.png";
const mode = process.argv[2] ?? "inspect";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("クリエイター選定");

if (mode === "inspect") {
  console.log((await workbook.inspect({
    kind: "region",
    sheetId: "クリエイター選定",
    range: "A1:N40",
    maxChars: 14000,
  })).ndjson);
  const preview = await workbook.render({ sheetName: "クリエイター選定", range: "A21:H32", scale: 1, format: "png" });
  await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));
  console.log(`PREVIEW=${previewPath}`);
  process.exit(0);
}

if (mode !== "edit") throw new Error(`Unknown mode: ${mode}`);

const candidates = [
  ["PoI", "risa__yanaga", "https://www.instagram.com/risa__yanaga/", 3347, "東京 / モデル・モード", "PoI着用投稿を2026-09-02に確認。モードとジュエリーの表現力が高い。", "要確認", "モデル事務所所属のため条件・窓口を確認"],
  ["PoI", "crunkdoggy_", "https://www.instagram.com/crunkdoggy_/", 8558, "東京 / モード", "黒基調のファッション投稿。プロフィールにbusiness: DMと明記。", "候補", "直近投稿の反応とギフティング可否を確認"],
  ["PoI", "h8sgn", "https://www.instagram.com/h8sgn/", 7149, "大阪 / 古着・モード", "古着、リメイク、高身長スタイリング。PoIの甘さ×モードと相性あり。", "要確認", "自身のブランド運営あり。競合・条件を確認"],
  ["PoI", "mirarara_gal", "https://www.instagram.com/mirarara_gal/", 2837, "モード / レディース", "ネクタイ、チュール、モノトーンのスタイリング投稿を確認。", "要確認", "LVEU.スタッフのため競合関係を確認"],
  ["PoI", "mochi_lda", "https://www.instagram.com/mochi_lda/", 1237, "東京 / モード", "Yohji Yamamoto、sacai中心の黒基調。投稿規模が初回検証向き。", "候補", "投稿頻度と女性向けPoI商品の着用意向を確認"],
  ["PoI", "u_my_na", "https://www.instagram.com/u_my_na/", 1660, "東京 / トラッド・古着・モード", "WEARISTA。レイヤードとクラシックなスタイリングが強い。", "要確認", "百貨店スタッフのため受領・投稿ルールを確認"],
  ["PoI", "__oharu__28", "https://www.instagram.com/__oharu__28/", 1304, "大阪 / Y2K・ストリート", "個性的なモノトーン、グランジ、韓国ブランドの着用投稿を確認。", "候補", "最近の更新頻度とPoIの世界観への適合を確認"],
  ["PoI", "mayuabo", "https://www.instagram.com/mayuabo/", 1420, "名古屋 / 美容・ファッション", "PoIタグ付きのカラフルな着回し投稿を確認。地域イベントとの接点もある。", "候補", "美容投稿中心のためファッション投稿比率を確認"],
  ["PoI", "miya_vividnotes", "https://www.instagram.com/miya_vividnotes/", 2695, "モード / メンズ", "東京ストリートスナップで着用確認。独自ブランドの発信力あり。", "要確認", "自身のブランド運営あり。メンズ起用の目的を明確化"],
  ["PoI", "yuto_fashion_tsushin", "https://www.instagram.com/yuto_fashion_tsushin/", 1188, "メンズ / ファッション解説", "モード系を含むファッション解説を継続。保存されやすい情報型。", "要確認", "レディース商品の着用より解説企画向き"],
];

sheet.getRange("A2").values = [["✓ PoI向けの一次候補10名を2026年9月5日に公開プロフィールで確認。送信前に直近12投稿・PR比率・ブランド競合・連絡条件を再確認すること。"]];
sheet.getRange("A21").values = [["PoI向け 一次クリエイター候補（公開プロフィール確認済み）"]];
sheet.getRange("A22:H22").values = [["対象ブランド", "クリエイター", "Instagram", "フォロワー", "ジャンル / 地域", "相性メモ", "判定", "追加確認"]];
sheet.getRange("A23:H32").values = candidates;
sheet.getRange("D23:D32").format.numberFormat = "#,##0";

sheet.getRange("A21:H21").format = {
  font: { name: "Arial", bold: true, size: 12, color: "#101114" },
};
sheet.getRange("A22:H22").format = {
  fill: "#101114",
  font: { name: "Arial", bold: true, size: 10, color: "#FFFFFF" },
  verticalAlignment: "center",
};
sheet.getRange("A23:H32").format = {
  font: { name: "Arial", size: 10, color: "#101114" },
  verticalAlignment: "top",
  wrapText: true,
  borders: { insideHorizontal: { style: "thin", color: "#D7D9E0" } },
};
sheet.getRange("A23:A32").format.fill = "#C7C4FF";
sheet.getRange("G23:G32").conditionalFormats.add("containsText", { text: "候補", format: { fill: "#DDF5E7", font: { bold: true, color: "#14532D" } } });
sheet.getRange("G23:G32").conditionalFormats.add("containsText", { text: "要確認", format: { fill: "#FFF1C2", font: { bold: true, color: "#713F12" } } });

sheet.getRange("A21:H32").format.rowHeight = 42;
sheet.getRange("A21:H22").format.rowHeight = 26;
sheet.getRange("A21:A32").format.columnWidth = 14;
sheet.getRange("B21:B32").format.columnWidth = 18;
sheet.getRange("C21:C32").format.columnWidth = 36;
sheet.getRange("D21:D32").format.columnWidth = 12;
sheet.getRange("E21:E32").format.columnWidth = 24;
sheet.getRange("F21:F32").format.columnWidth = 48;
sheet.getRange("G21:G32").format.columnWidth = 12;
sheet.getRange("H21:H32").format.columnWidth = 40;

const preview = await workbook.render({ sheetName: "クリエイター選定", range: "A1:N30", scale: 1, format: "png" });
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

console.log((await workbook.inspect({
  kind: "region",
  sheetId: "クリエイター選定",
  range: "A21:H32",
  maxChars: 16000,
})).ndjson);
console.log((await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  maxChars: 5000,
})).ndjson);
console.log(`OUTPUT=${workbookPath}`);
console.log(`PREVIEW=${previewPath}`);
