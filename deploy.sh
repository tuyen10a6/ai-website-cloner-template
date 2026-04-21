#!/usr/bin/env bash

set -euo pipefail

APP_NAME="dodomio"
APP_ROOT="/var/www/dodomio-website"
STANDALONE_DIR="$APP_ROOT/.next/standalone"

cd "$APP_ROOT"

echo "==> Pulling latest code"
git pull

echo "==> Installing dependencies"
npm install

echo "==> Building application"
npm run build

echo "==> Syncing standalone assets"
rm -rf "$STANDALONE_DIR/.next"
mkdir -p "$STANDALONE_DIR/.next"
cp -R .next/static "$STANDALONE_DIR/.next/"
rm -rf "$STANDALONE_DIR/public"
cp -R public "$STANDALONE_DIR/"

echo "==> Restarting PM2 app"
pm2 delete "$APP_NAME" 2>/dev/null || true
pm2 start "$APP_ROOT/ecosystem.config.cjs"
pm2 save

echo "==> Deployment finished"
pm2 list
echo
ss -ltnp | grep 3100 || true
echo
curl -I http://127.0.0.1:3100 || true
