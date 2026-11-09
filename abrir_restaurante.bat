@echo off
title Le Petit Bleu // Café & Bistrô Francês (RIDA)
echo ========================================================
echo   LE PETIT BLEU // BISTRO FRANCES - AGENCIA RIDA
echo   Servidor de Desenvolvimento em: http://localhost:5177/
echo ========================================================
start "" "http://localhost:5177/"
cmd /c "node node_modules/vite/bin/vite.js --port 5177 --host"
pause
