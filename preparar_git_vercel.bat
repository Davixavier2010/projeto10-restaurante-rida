@echo off
title Preparar Git e Vercel • Le Petit Bleu RIDA
cd /d "%~dp0"

echo =======================================================
echo   PREPARANDO REPOSITORIO GIT PARA O VERCEL
echo   Agencia RIDA • Le Petit Bleu Bistro
echo =======================================================
echo.

git init
git add .
git commit -m "feat: lancamento Le Petit Bleu Bistro RIDA"
git branch -M main

echo.
echo =======================================================
echo   REPOSITORIO LOCAL PRONTO COM SUCESSO!
echo =======================================================
echo.
echo Para enviar para o GitHub, basta colar os comandos:
echo   git remote add origin https://github.com/SEU-USUARIO/le-petit-bleu-restaurante.git
echo   git push -u origin main
echo.
pause
