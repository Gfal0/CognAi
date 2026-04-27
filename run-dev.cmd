@echo off
cd /d "%~dp0"
C:\PROGRA~1\nodejs\node.exe .\node_modules\next\dist\bin\next dev -p 3000 > .next-dev.log 2> .next-dev.err.log
