# FUR — Creator Seeding

日本の小〜中規模ファッション・アクセサリーブランド向けに、クリエイター選定からアウトリーチ、ギフティング調整、投稿確認、レポートまでを支援するFURの公式サイトです。

公開サイト: [fur-creator-seeding.vercel.app](https://fur-creator-seeding.vercel.app/)

## ローカルで見る

```bash
npm start
```

ブラウザで `http://127.0.0.1:4173` を開いてください。ビルドやパッケージのインストールは不要です。

## デプロイ

Vercelプロジェクト `fur-creator-seeding` から公開しています。

```bash
vercel deploy --prod
```

## Codex / Claude Code の引き継ぎ

作業を始める前に、リモートの最新状態を安全に取り込みます。

```bash
npm run sync:ai
```

その後、[`PROJECT_HANDOFF.md`](PROJECT_HANDOFF.md) と [`FUR_CONCEPTS.md`](FUR_CONCEPTS.md) を読んでください。作業完了時は実装と `PROJECT_HANDOFF.md` の更新を同じコミットに含め、`main` へpushします。

問い合わせ: [furcontactpri@gmail.com](mailto:furcontactpri@gmail.com)
