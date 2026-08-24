#!/usr/bin/env bash
# 2026-08-17: Smoke test HTTP para Skynet — winstonkinder.edu.mx
set -euo pipefail

BASE="${SKYNET_BASE_URL:-https://www.winstonkinder.edu.mx}"

paths=(
  "/"
  "/kinder"
  "/maternal"
  "/servicios"
  "/contacto"
  "/aviso-privacidad"
  "/robots.txt"
  "/sitemap.xml"
)

echo "Skynet smoke — ${BASE}"
echo "----------------------------------------"

fail=0
for path in "${paths[@]}"; do
  code=$(curl -sS -o /dev/null -w "%{http_code}" -L --max-time 20 "${BASE}${path}" || echo "ERR")
  if [[ "$code" =~ ^2 ]]; then
    status="OK"
  else
    status="FAIL"
    fail=1
  fi
  printf "%-22s %s\n" "${path}" "${code} ${status}"
done

echo "----------------------------------------"
if [[ "$fail" -eq 0 ]]; then
  echo "RESULT: PASS"
  exit 0
else
  echo "RESULT: FAIL"
  exit 1
fi
