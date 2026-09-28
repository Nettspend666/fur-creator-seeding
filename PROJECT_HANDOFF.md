# FUR shared project handoff

Last updated: 2026-09-27

This file is the shared operational state for Codex and Claude Code. Read it before work and update it in the same commit as every material change.

## Source of truth and sync

- GitHub: https://github.com/Nettspend666/fur-creator-seeding
- Branch: `main`
- Codex checkout: `/Users/kuboshita/Documents/ChatGPT/FUR`
- Claude Code checkout: `/Users/kuboshita/Downloads/FUR/site`
- Economix JP is maintained separately at `/Users/kuboshita/Documents/ChatGPT/ECONOMIX`; FUR is a reference project only and does not contain the Economix source.
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

## 2026-09-05–08 work update

- **Done:** Replaced the generic FLOOR3.1 group row with five individual qualified leads in the local workbook, verified the affected range visually, and scanned the workbook for formula errors. Added five individualized outreach drafts. Rechecked public SEO files and current search visibility.
- **Done:** Rebuilt the local-LLM presentation as a 24-slide, 10-minute English deck at `outputs/presentations/Will AI Be Completely Free - Soon.pptx` and `/Users/kuboshita/Downloads/presentations/Will AI Be Completely Free - Soon.pptx`. It has a 1,261-word speaker script in notes, one licensed Unsplash stock photo, official Qwen/Kimi/Ollama marks, staged fade animations on every slide element, and a fade transition on every slide. Package, layout, font, slide-count, re-import, notes, and animation audits passed; all 24 slides were rendered and visually inspected with no overflow. The completed deck was imported into Google Slides and checked in Dia at https://docs.google.com/presentation/d/1_23Nh9EeYq4rKSgejfmKI_XxBpuhxjFMRr5RUGqCj_o/edit. Google Slides shows all 24 slides, their speaker notes, and animation metadata on every slide. Four superseded local PPTX files were moved to `/Users/kuboshita/.Trash/local-llm-deck-superseded-2026-09-08/` and remain recoverable.
- **Decisions:** Keep follower counts blank rather than guessing. Treat all five as priority research leads, but send only after a same-day activity and follower check. Do not contact the closed FLOOR3.1 organizer.
- **Decisions:** Keep the local-LLM deck editorial and typography-led rather than image-heavy, using Helvetica Neue and compact editorial density inspired by the earlier V&A reference without copying its colour palette. Present local AI as a balanced economic shift: lower marginal usage cost and stronger control, offset by hardware, electricity, maintenance, capability, freshness, licensing, security, misuse, and accountability costs. Use a hybrid local/cloud future as an explicitly labeled forecast rather than a certainty.
- **Blocked:** Vercel–GitHub automatic deployment still requires the user to complete the GitHub authorization flow. Instagram bio and website link still require the mobile app.
- **Blocked:** The two superseded Google Slides drafts remain in Drive until the user confirms their cloud deletion at action time. The completed 24-slide deck is already uploaded and open in Dia.
- **Next:** Review and approve the five drafts; recheck each brand on send day; then save/send through only one channel per brand. Continue monitoring replies to the eleven already-sent emails.
- **Next:** Rehearse the 24-slide deck once at roughly 125–130 words per minute and use the two animation clicks per slide as pacing beats. After explicit confirmation, move the two superseded Google Slides drafts to Drive's bin.

## 2026-09-26 presentation update

- **Done:** Replaced the 24-slide local-LLM deck with a simpler 13-slide, approximately 10-minute presentation titled `Will AI Be Completely Free? — Clear 10-Minute Version`. The editable PPTX is at `outputs/presentations/Will AI Be Completely Free - Clear 10-Minute Version.pptx` and `/Users/kuboshita/Downloads/presentations/Will AI Be Completely Free - Clear 10-Minute Version.pptx`. The native Google Slides copy is https://docs.google.com/presentation/d/1BZOxi_g_LMWr5zDD30Zgras3v6Lc1FDp8CLEkNZc8Lo/edit?usp=drivesdk.
- **Done:** Added speaker notes to every slide (about 893 words including citations), using a non-technical narrative that opens with familiar ChatGPT and Claude logos, explains local AI in plain language, and balances lower visible usage costs with hardware, electricity, maintenance, privacy, misuse, and capability limits. The deck uses one licensed stock photo, a small set of product logos, and one explicitly illustrative editable cost chart.
- **Done:** Verified the PPTX for package integrity, overflow, fonts, notes, and first-party Artifact Tool re-import. Read the imported native Google Slides deck back through the Slides connector, ran the output issue checker with zero findings, exported it to a 13-page PDF, rendered every page, and visually inspected the final montage.
- **Decisions:** Prefer clean typography and one idea per slide over block/card layouts. Avoid object-by-object build animations; all information should be visible immediately so the presenter is never waiting for missing text. Keep the language accessible and avoid repeating technical concepts.
- **Blocked:** `npm run sync:ai` could not complete because the repository contains a broken local Codex checkpoint reference under `refs/codex/turn-diffs/checkpoints/`; Git reports a bad object before fetching from `origin`. The presentation commit itself was pushed successfully to `main`, but the internal checkpoint ref still needs repair before the normal sync command will work again.
- **Next:** Rehearse once with the speaker notes and shorten individual notes only if the presenter speaks slowly. Delete or move older Google Slides drafts to Drive's bin only after the user explicitly confirms the exact cloud files at action time.

## 2026-09-27 presentation revision

- **Done:** Reworked the local-AI deck again after feedback that the visible copy and numbered lists felt AI-generated. The final user-facing PPTX is now `outputs/presentations/Will AI Be Completely Free - Final.pptx` and `/Users/kuboshita/Downloads/presentations/Will AI Be Completely Free - Final.pptx`. The native Google Slides version is https://docs.google.com/presentation/d/1Ryrvs8spPiQZKnf8o7RGHSZy2RNvq23zJq54esDod_g/edit?usp=drivesdk.
- **Done:** Removed the repeated `01 / 02 / 03` structures and most list-style copy. Each slide now presents one short spoken idea, while the complete approximately 10-minute script remains in speaker notes on all 13 slides. The ChatGPT mark on slide 2 is a downloaded Wikimedia Commons logo image rather than a generated or reconstructed asset.
- **Done:** Revalidated the PPTX package, layout, font use, native chart, and first-party re-import; rendered and inspected all slides with no overflow. Read back the native Google Slides file, confirmed 13 slides and 13 speaker-note sections, ran the Slides issue checker with zero findings, and visually inspected the 13-page Google PDF export.
- **Done:** Moved superseded local PPTX files to `/Users/kuboshita/.Trash/local-llm-deck-superseded-2026-09-27/` and left only the final deck in `Downloads/presentations` and the repository output folder.
- **Decisions:** Use images only when the speaker script calls for them: internet-sourced logos for familiar products, one stock laptop photo for the local-device explanation, and one chart for the cost comparison. Avoid decorative images, numbered benefit lists, and formulaic three-part slide copy.
- **Blocked:** `npm run sync:ai` still fails on the same broken local Codex checkpoint reference under `refs/codex/turn-diffs/checkpoints/`. Explicit commits and pushes to `main` continue to work.
- **Next:** Rehearse from the speaker notes once and adjust only the notes if the actual speaking pace differs from 10 minutes. Delete older Google Slides versions only after the user confirms the exact cloud files at action time.

## 2026-09-28 presentation revision

- **Done:** Revised slide 4, `What if the AI stayed on your laptop?`, in both the local PowerPoint and the existing native Google Slides deck. Removed the previous subtitle-style copy and replaced it with four concise native bullets: no internet connection required, private files stay on the device, no cloud bill per question, and faster routine tasks.
- **Done:** Replaced the generic coding-desk stock photo with an official NVIDIA DGX Spark press image showing a personal AI computer beside a laptop. Updated slide 4 speaker notes with the revised explanation and NVIDIA source links.
- **Done:** Revalidated and rendered the complete 13-slide PowerPoint. The final local file remains `outputs/presentations/Will AI Be Completely Free - Final.pptx`, with an identical copy at `/Users/kuboshita/Downloads/presentations/Will AI Be Completely Free - Final.pptx`. The existing Google Slides URL remains https://docs.google.com/presentation/d/1Ryrvs8spPiQZKnf8o7RGHSZy2RNvq23zJq54esDod_g/edit.
- **Done:** Read the updated Google Slides deck back from Drive, confirmed 13 slides, four native bullets on slide 4, the new image, and updated notes; the native issue checker reported zero findings. Exported the deck to a 13-page PDF and visually checked the revised slide and full-deck montage.
- **Done:** Moved superseded PowerPoint copies and validation scratch artifacts to `/Users/kuboshita/.Trash/local-llm-deck-superseded-2026-09-28/`; they remain recoverable.
- **Blocked:** `npm run sync:ai` still fails because of the same broken local Codex checkpoint reference under `refs/codex/turn-diffs/checkpoints/`. Do not use a destructive Git repair without separately investigating that internal ref.
- **Next:** Rehearse slide 4 with the revised notes and confirm the four benefit lines feel natural at the intended speaking pace.

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
