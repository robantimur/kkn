@echo off
echo Starting AR Video Player Development Server...
echo.
echo Access the application at: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python HTTP server...
    python -m http.server 8000
) else (
    REM Check if Node.js is available
    node --version >nul 2>&1
    if %errorlevel% == 0 (
        echo Using Node.js HTTP server...
        npx http-server -p 8000
    ) else (
        echo Error: Neither Python nor Node.js found.
        echo Please install Python or Node.js to run the development server.
        echo.
        echo Alternatively, you can use any other HTTP server.
        pause
    )
)
