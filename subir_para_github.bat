@echo off
title Enviar Le Petit Bleu para GitHub e Vercel
cd /d "%~dp0"

echo =======================================================
echo   CONECTAR AO GITHUB // AGENCIA RIDA
echo =======================================================
echo.
echo Crie um repositorio no GitHub (ex: le-petit-bleu-restaurante)
echo e cole a URL do seu repositorio abaixo:
echo Exemplo: https://github.com/davixavier/le-petit-bleu.git
echo.
set /p REPO_URL="Cole a URL do seu repositorio do GitHub: "

if "%REPO_URL%"=="" (
    echo Nenhuma URL informada. Operacao cancelada.
    pause
    exit /b
)

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
echo.
echo Enviando arquivos para o GitHub...
git push -u origin main

echo.
echo =======================================================
echo   PROJETO ENVIADO COM SUCESSO AO GITHUB!
echo =======================================================
echo.
echo Agora acesse https://vercel.com/new e importe o projeto!
echo.
pause
