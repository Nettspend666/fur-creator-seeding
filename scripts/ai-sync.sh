#!/usr/bin/env bash
set -euo pipefail

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree has local changes. Commit or stash them before syncing."
  git status --short --branch
  exit 1
fi

branch="$(git branch --show-current)"
if [[ "$branch" != "main" ]]; then
  echo "Expected main, found $branch. Switch to main before syncing."
  exit 1
fi

git fetch --prune origin

if ! git merge-base --is-ancestor HEAD origin/main; then
  echo "Local main and origin/main have diverged or local main is ahead. Review before merging."
  git status --short --branch
  exit 1
fi

git merge --ff-only origin/main
git status --short --branch
echo "Read PROJECT_HANDOFF.md and FUR_CONCEPTS.md before editing."

