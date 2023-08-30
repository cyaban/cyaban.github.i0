@echo off

echo Checking Node.js version...
node -v | findstr /B /C:"v16" > nul
if errorlevel 1 (
    echo Node.js 16 or later is required.
    echo Please download and install Node.js from https://nodejs.org/
) else (
    echo Welcome to Fusion! We are installing right now!
    npm i
    echo Starting Server...
    npm start
)
