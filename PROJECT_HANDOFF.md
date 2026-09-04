# FUR shared project handoff

Last updated: 2026-09-05

This file is the shared operational state for Codex and Claude Code. Read it before work and update it in the same commit as every material change.

## Source of truth and sync

- GitHub: https://github.com/Nettspend666/fur-creator-seeding
- Branch: `main`
- Codex checkout: `/Users/kuboshita/Documents/ChatGPT/FUR`
- Claude Code checkout: `/Users/kuboshita/Downloads/FUR/site`
- Start every session with `npm run sync:ai`.
- End material work by updating this file, committing, and pushing `main`.
- The two agents do not share live conversation memory. Git commits plus this file are the synchronization layer.

## Product and public links

- Live website: https://fur-creator-seeding.vercel.app/
- Contact: furcontactpri@gmail.com
- Business plan: https://docs.google.com/document/d/1djh7t_fCMhW8t2ZHiXTa9TOsROdtlGXH/edit
- Prospect spreadsheet: https://docs.google.com/spreadsheets/d/17bn3MPkZE2i-i0-lTEI2Da3cIT1hB_DL/edit?gid=1103726222#gid=1103726222
- Offer: initial FUR operation fee is 0円; after the test, a satisfied client may optionally pay 1万円.
- Creator compensation, products, and shipping are paid by the brand. FUR does not guarantee posts, reach, or sales.

The Google Doc and spreadsheet are currently readable by anyone with the link. A macOS reminder is set for 2026-09-06 at 09:00 JST to review and restrict those permissions.

## Current website state

- Latest deployed commit: `3920ec5`.
- Production was deployed manually with Vercel CLI and verified byte-identical to the deployed HTML.
- Vercel project: `fur-creator-seeding`; organization: `h22fukuboshita-3008`.
- There is no Vercel/GitHub integration. Pushing `main` does not deploy.
- Technical SEO includes canonical metadata, Open Graph, Twitter Card, WebSite/Organization/Service/FAQ structured data, `robots.txt`, and `sitemap.xml`.
- Accessibility/CWV work includes a correct accessible H1, fixed image dimensions, asynchronous image decoding, and visible FAQ content generated from the same source as its schema.
- `.vercelignore` excludes environment files, Git metadata, Markdown, `.vercel`, and `node_modules`. Production checks confirmed sensitive/internal paths return 404.

## Outreach status

Eleven approved emails were sent from `furcontactpri@gmail.com` on 2026-09-04:

1. Bibiy. — support@bibiy.store
2. Èaphi — contact@eaphi.co.jp
3. foufou — support@foufou.co.jp
4. Lumier — info@lumier.jp
5. M me eme — info@m-me-eme.com
6. IRIS47 — iris47@hooves.info
7. Palnart Poc — datearrow@broughsuperior.jp
8. KESSAKU — info@kessaku-jewelry.com
9. unigem — info@unigem.jp
10. Diaspora skateboards — diasporaskateboards@gmail.com
11. LIBERE — info@libere-official.com

All used a common offer explanation plus a brand-specific subject and opening paragraph. A thread heartbeat named `FUR営業メール返信チェック` checks for replies every 30 minutes and must only propose replies; it must never send automatically.

The spreadsheet's `送信トラッカー` still needs these 11 sends and their 2026-09-04 send date recorded. It currently understates outreach.

## Prospect research state

- The verified best-fit small prospects are PoI, KESSAKU, 印（イン）, unigem, Èaphi Journal, and LOOKING FOR YOUMORE.
- Avoid double outreach to Èaphi and Èaphi Journal because they share `contact@eaphi.co.jp`.
- 9090 runs its own PR Member program and is a poor fit for this offer.
- Several previously high-ranked brands are much larger than the target segment, including Lumier, 9090, Bibiy., foufou, SHINZO, CENE, and Acka.
- The working prospect workbook is `/Users/kuboshita/Downloads/FUR/japan_creator_outreach_prospects.xlsx`. It contains `送信トラッカー`, `レポート雛形`, `クリエイター選定`, and an updated `使い方` sheet.

## Prepared but unfinished

- Instagram setup kit: `/Users/kuboshita/Downloads/FUR/instagram-setup-kit.md`.
- Candidate handles that appeared available when checked: `@fur.seeding`, `@fur_seeding`, `@fur.creators`, `@fur.tokyo`, `@furcreatorseeding`.
- Instagram account creation is not complete. After creation, add the profile to the site footer/contact area and to `Organization.sameAs`, then push and deploy.
- Creator shortlists are not populated because Instagram discovery requires a logged-in session.

## Next actions

1. Add the 11 sent emails and dates to the spreadsheet tracker.
2. Set up Google Search Console: add the URL-prefix property, add the HTML verification token to `index.html`, deploy, verify, submit `sitemap.xml`, and request indexing.
3. Connect Vercel to GitHub if the user wants automatic deployments.
4. Choose and register a custom domain to improve brand/search authority.
5. Add a privacy policy and operator information page.
6. Create the Instagram account, then add its link and structured-data reference to the site.
7. Build verified creator shortlists using an authenticated Instagram session.
8. Research individual FLOOR3.1 exhibitors rather than treating the event itself as one prospect.

## Handoff format for future sessions

When finishing work, update these four items:

- **Done:** exact files, commits, external changes, and verification.
- **Decisions:** changed pricing, scope, wording, permissions, or user preferences.
- **Blocked:** why it is blocked and the exact user/external action required.
- **Next:** the smallest concrete actions in priority order.

