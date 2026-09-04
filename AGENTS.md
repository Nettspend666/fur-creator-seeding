# Codex project instructions

Before changing this repository:

1. Run `npm run sync:ai`.
2. Read `PROJECT_HANDOFF.md` and `FUR_CONCEPTS.md` completely.
3. Treat `PROJECT_HANDOFF.md` as the shared operational state used by both Codex and Claude Code.

After material work:

- Update `PROJECT_HANDOFF.md` with completed work, new decisions, deployment state, and the next concrete actions.
- Commit the implementation and handoff update together, then push `main` so the other agent can continue.
- Do not put passwords, tokens, private email contents, or other secrets in committed files.
- A GitHub push does not deploy this site. Run the explicit Vercel production deployment when a website change must go live, and record the result in `PROJECT_HANDOFF.md`.

Operational preferences:

- Do not use the Codex in-app browser.
- Prefer connectors and CLIs. If visible browser control is required, use Chrome. Do not use Dia unless the user explicitly asks for it.
- Never send or reply to external email without the user's explicit approval of the recipients and content.

