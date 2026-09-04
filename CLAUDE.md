# Claude Code project instructions

Before changing this repository:

1. Run `npm run sync:ai`.
2. Read `PROJECT_HANDOFF.md` and `FUR_CONCEPTS.md` completely.
3. Treat `PROJECT_HANDOFF.md` as the shared operational state used by both Claude Code and Codex.

After material work:

- Update `PROJECT_HANDOFF.md` with completed work, new decisions, deployment state, and the next concrete actions.
- Commit the implementation and handoff update together, then push `main` so the other agent can continue.
- Do not put passwords, tokens, private email contents, or other secrets in committed files.
- A GitHub push does not deploy this site. Run the explicit Vercel production deployment when a website change must go live, and record the result in `PROJECT_HANDOFF.md`.

Operational preferences:

- Keep work scoped to FUR and preserve unrelated user changes.
- Never send or reply to external email without the user's explicit approval of the recipients and content.

