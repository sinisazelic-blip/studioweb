@echo off
chcp 65001 > nul
title STUDIO TAF Web Platform - Port 1990
color 0E

echo ==============================================================================
echo    STUDIO TAF Web Platform - Next.js Production Server (Port 1990)
echo ==============================================================================
echo.

cd /d "%~dp0"

echo [1/2] Provjera produkcijskog build-a...
if not exist ".next" (
    echo [.next folder ne postoji] Pokrecem kompajliranje...
    call npm run build
)

echo.
echo [2/2] Pokrecem Next.js server na portu 1990...
echo Adresa lokalno: http://localhost:1990
echo.

npm run start -- -p 1990

if %errorlevel% neq 0 (
    echo.
    echo [UPOZORENJE] Server je zaustavljen ili je doslo do greske.
    pause
)
