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

- Latest deployed commit before the current work: `d28e47e`.
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
- FLOOR3.1 itself is no longer a viable prospect: its official site says the shop is closed and has no reopening planned for 2026. Five alumni labels are now qualified as individual priority leads: KOROMOS, 糸柊子（shishuko）, tetta, obafer, and Experiments:Yohsuke. Their official site/shop/email/Instagram routes and fit notes are in the workbook. Follower counts and current activity must be rechecked immediately before sending. LOF / LANGUAGE OF FLOWERS, Training Days, and y vet still need a current official contact route verified before they are added to outreach.
- The working prospect workbook is `/Users/kuboshita/Downloads/FUR/japan_creator_outreach_prospects.xlsx`. It contains `送信トラッカー`, `レポート雛形`, `クリエイター選定`, and an updated `使い方` sheet.

## Prepared but unfinished

- Instagram setup kit: `/Users/kuboshita/Downloads/FUR/instagram-setup-kit.md`.
- The company Instagram account is active as `@furcontactpri`. On 2026-09-05 its profile link was added to the site footer and to `Organization.sameAs` structured data. Profile bio and website link were still empty when inspected; Instagram's desktop settings said website links can only be edited in the mobile app.
- A first PoI creator shortlist of 10 public profiles has been populated in the local workbook's `クリエイター選定` sheet. Each row includes a fit note and a risk/confirmation note. These are research candidates only; no creator has been contacted.
- The public Google Sheet was replaced on 2026-09-05 with the verified five-tab `.xlsx` workbook. Public anyone-with-link access remained enabled. A public CSV export of the tracker confirmed all 11 sent rows, their addresses, send dates, and 2026-09-10 follow-up dates.
- Google Search Console now has a verified URL-prefix property for `https://fur-creator-seeding.vercel.app/` under `h22fukuboshita@gmail.com`. The HTML meta-tag verification succeeded, `sitemap.xml` was accepted with status `Success` and three discovered pages, and the homepage was added to Google's priority crawl queue.
- Vercel's GitHub login-connection flow reached the GitHub consent page and identified the correct account, `Nettspend666`, but GitHub left the final `Authorize` button disabled and Chrome security policy blocked further automated OAuth interaction. `vercel git connect` still returns that a GitHub login connection is required. The user must finish or retry this consent step manually in Chrome before the repository can be linked for automatic deployments.
- Domain availability was checked on 2026-09-05. `fur-seeding.jp`, `fur-creator.jp`, `furseeding.jp`, `fur-creators.jp`, and `fur-pr.jp` returned no WHOIS match; `fur-seeding.jp` is the recommended first choice. Availability can change and must be rechecked at purchase time.
- Five individualized, unsent outreach drafts for KOROMOS, 糸柊子, tetta, obafer, and Experiments:Yohsuke are stored in `FLOOR31_OUTREACH_DRAFTS.md`. Each states that FUR has just launched, the initial FUR operating fee is 0円, an optional 一万円 may be paid only if the client is satisfied, brand-side costs remain separate, and results are not guaranteed.
- A public search check on 2026-09-05 still did not surface the FUR site for exact-domain or FUR creator-seeding queries. The live canonical tag, Google verification tag, structured data, `robots.txt`, and three-URL sitemap all remained present and reachable. The existing Search Console indexing request should be allowed time to process instead of being resubmitted repeatedly.
- `npx vercel@latest project inspect fur-creator-seeding` successfully resolved the correct Vercel project. No new website changes were made in this session, and the unresolved GitHub authorization step remains unchanged.

## 2026-09-05 work update

- **Done:** Replaced the generic FLOOR3.1 group row with five individual qualified leads in the local workbook, verified the affected range visually, and scanned the workbook for formula errors. Added five individualized outreach drafts. Rechecked public SEO files and current search visibility.
- **Done:** Created a 10-slide, 10-minute English presentation on local LLMs at `outputs/presentations/will-ai-be-completely-free-local-llms.pptx`. The deck uses the title “Will AI Be Completely Free? (Soon),” includes a 1,326-word script in speaker notes, uses one licensed Unsplash stock photo plus official QwenLM, MoonshotAI/Kimi, and Ollama project marks, and cites technical sources in the relevant notes. The final PPTX passed package, layout, font, slide-count, and re-import validation, and every slide was rendered and visually inspected.
- **Decisions:** Keep follower counts blank rather than guessing. Treat all five as priority research leads, but send only after a same-day activity and follower check. Do not contact the closed FLOOR3.1 organizer.
- **Decisions:** Keep the local-LLM deck editorial and typography-led rather than image-heavy. Present local AI as a balanced economic shift: lower marginal usage cost and stronger control, offset by hardware, electricity, maintenance, capability, freshness, licensing, and security costs. Use a hybrid local/cloud future as an explicitly labeled forecast rather than a certainty.
- **Blocked:** Vercel–GitHub automatic deployment still requires the user to complete the GitHub authorization flow. Instagram bio and website link still require the mobile app.
- **Blocked:** The Google Drive connector was unavailable in this Codex session, so the PPTX was not imported or visually checked inside Google Slides. It uses standard editable PowerPoint text, shapes, images, and speaker notes and is intended for Google Slides import.
- **Next:** Review and approve the five drafts; recheck each brand on send day; then save/send through only one channel per brand. Continue monitoring replies to the eleven already-sent emails.
- **Next:** Import the local-LLM PPTX into Google Slides, confirm that speaker notes appear, and make any presenter-specific wording changes before delivery.

## Next actions

1. Finish or retry the GitHub `Authorize Vercel` consent step manually in Chrome, then rerun `vercel git connect` for automatic deployments.
2. Monitor Search Console for the first crawl/indexing result; do not resubmit the homepage repeatedly because it is already queued.
3. Purchase and connect `fur-seeding.jp` (recommended) or another verified available custom domain; this requires the user's registrar/payment choice.
4. Complete the `@furcontactpri` profile bio and add the FUR website link from the Instagram mobile app.
5. Re-verify the PoI shortlist immediately before any creator outreach and replace conflict-heavy candidates as needed.
6. Review the five FLOOR3.1 alumni drafts. On the approved send day, verify current activity and follower counts, update the tracker, and use only one contact channel per brand.

## Handoff format for future sessions

When finishing work, update these four items:

- **Done:** exact files, commits, external changes, and verification.
- **Decisions:** changed pricing, scope, wording, permissions, or user preferences.
- **Blocked:** why it is blocked and the exact user/external action required.
- **Next:** the smallest concrete actions in priority order.
