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

- Latest deployed commit before the current work: `3920ec5`.
- Production was deployed manually with Vercel CLI. The homepage was verified live after the Search Console meta tag deployment.
- Vercel project: `fur-creator-seeding`; organization: `h22fukuboshita-3008`.
- There is no Vercel/GitHub integration. Pushing `main` does not deploy.
- Technical SEO includes canonical metadata, Open Graph, Twitter Card, WebSite/Organization/Service/FAQ structured data, `robots.txt`, and `sitemap.xml`.
- Accessibility/CWV work includes a correct accessible H1, fixed image dimensions, asynchronous image decoding, and visible FAQ content generated from the same source as its schema.
- `.vercelignore` excludes environment files, Git metadata, Markdown, `.vercel`, and `node_modules`. Production checks confirmed sensitive/internal paths return 404.
- The current local work adds `/privacy` and `/legal`, footer links, and sitemap entries. These pages use the same editorial visual language as the main site and avoid inventing missing personal or payment details.

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

The local workbook's `送信トラッカー` records all 11 recipients, actual email channel and address, `送信済み`, the 2026-09-04 send date, and an automatic 2026-09-10 follow-up date. The updated workbook is `/Users/kuboshita/Documents/ChatGPT/FUR/outputs/fur-continuity/japan_creator_outreach_prospects.xlsx`.

## Prospect research state

- The verified best-fit small prospects are PoI, KESSAKU, 印（イン）, unigem, Èaphi Journal, and LOOKING FOR YOUMORE.
- Avoid double outreach to Èaphi and Èaphi Journal because they share `contact@eaphi.co.jp`.
- 9090 runs its own PR Member program and is a poor fit for this offer.
- Several previously high-ranked brands are much larger than the target segment, including Lumier, 9090, Bibiy., foufou, SHINZO, CENE, and Acka.
- FLOOR3.1 itself is no longer a viable prospect: its official site says the shop is closed and has no reopening planned for 2026. Its 2023 exhibitor material identified eight independent labels. KOROMOS, 糸柊子（shishuko）, tetta, obafer, and Experiments:Yohsuke have sufficiently recent public activity to remain research leads. LOF / LANGUAGE OF FLOWERS, Training Days, and y vet still need a current official contact route verified before they are added to outreach.
- The working prospect workbook is `/Users/kuboshita/Downloads/FUR/japan_creator_outreach_prospects.xlsx`. It contains `送信トラッカー`, `レポート雛形`, `クリエイター選定`, and an updated `使い方` sheet.

## Prepared but unfinished

- Instagram setup kit: `/Users/kuboshita/Downloads/FUR/instagram-setup-kit.md`.
- Candidate handles that appeared available when checked: `@fur.seeding`, `@fur_seeding`, `@fur.creators`, `@fur.tokyo`, `@furcreatorseeding`.
- Instagram account creation is not complete. After creation, add the profile to the site footer/contact area and to `Organization.sameAs`, then push and deploy.
- A first PoI creator shortlist of 10 public profiles has been populated in the local workbook's `クリエイター選定` sheet. Each row includes a fit note and a risk/confirmation note. These are research candidates only; no creator has been contacted.
- The public Google Sheet was replaced on 2026-09-05 with the verified five-tab `.xlsx` workbook. Public anyone-with-link access remained enabled. A public CSV export of the tracker confirmed all 11 sent rows, their addresses, send dates, and 2026-09-10 follow-up dates.
- Google Search Console now has a verified URL-prefix property for `https://fur-creator-seeding.vercel.app/` under `h22fukuboshita@gmail.com`. The HTML meta-tag verification succeeded, `sitemap.xml` was accepted with status `Success` and three discovered pages, and the homepage was added to Google's priority crawl queue.
- Vercel's GitHub login-connection flow reached the GitHub consent page and identified the correct account, `Nettspend666`, but GitHub left the final `Authorize` button disabled and Chrome security policy blocked further automated OAuth interaction. `vercel git connect` still returns that a GitHub login connection is required. The user must finish or retry this consent step manually in Chrome before the repository can be linked for automatic deployments.
- Domain availability was checked on 2026-09-05. `fur-seeding.jp`, `fur-creator.jp`, `furseeding.jp`, `fur-creators.jp`, and `fur-pr.jp` returned no WHOIS match; `fur-seeding.jp` is the recommended first choice. Availability can change and must be rechecked at purchase time.

## Next actions

1. Finish or retry the GitHub `Authorize Vercel` consent step manually in Chrome, then rerun `vercel git connect` for automatic deployments.
2. Monitor Search Console for the first crawl/indexing result; do not resubmit the homepage repeatedly because it is already queued.
3. Purchase and connect `fur-seeding.jp` (recommended) or another verified available custom domain; this requires the user's registrar/payment choice.
4. Choose and create the FUR Instagram account, then add its link and structured-data reference to the site.
5. Re-verify the PoI shortlist immediately before any creator outreach and replace conflict-heavy candidates as needed.
6. Verify current follower counts and contact routes for the five active-looking FLOOR3.1 alumni leads, then add only the qualified brands to the tracker. Do not contact the closed FLOOR3.1 organizer.

## Handoff format for future sessions

When finishing work, update these four items:

- **Done:** exact files, commits, external changes, and verification.
- **Decisions:** changed pricing, scope, wording, permissions, or user preferences.
- **Blocked:** why it is blocked and the exact user/external action required.
- **Next:** the smallest concrete actions in priority order.
