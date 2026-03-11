#!/usr/bin/env bash
set -e

# ---------------------------------------------------------------------------
# Manual deploy script for paul.sirpauls.com
# Usage: ./deploy.sh [ssh-user@host] [port]
#
# Defaults read from environment variables:
#   DEPLOY_HOST  - server hostname or IP
#   DEPLOY_USER  - SSH user
#   DEPLOY_PORT  - SSH port (default: 22)
# ---------------------------------------------------------------------------

HOST="${DEPLOY_HOST:-}"
USER="${DEPLOY_USER:-}"
PORT="${DEPLOY_PORT:-22}"

if [[ -z "$HOST" || -z "$USER" ]]; then
  echo "Error: DEPLOY_HOST and DEPLOY_USER must be set."
  echo "  export DEPLOY_HOST=your.server.com"
  echo "  export DEPLOY_USER=paul"
  exit 1
fi

REMOTE_PATH="~/htdocs/paul.sirpauls.com/public"

echo "==> Building..."
pnpm install --frozen-lockfile
pnpm build

echo "==> Deploying to ${USER}@${HOST}:${REMOTE_PATH} ..."
rsync -az --delete \
  -e "ssh -p ${PORT}" \
  dist/ \
  "${USER}@${HOST}:${REMOTE_PATH}"

echo "==> Done."
