@echo off
title Servidor Local Dashboard ConquerX
echo =======================================================
echo    Iniciando Servidor Local - Dashboard ConquerX
echo =======================================================
echo.
echo 1. Abriendo el Dashboard en el navegador...
start http://localhost:8000
echo.
echo 2. Iniciando servidor en http://localhost:8000
echo    (No cierres esta ventana mientras uses el Dashboard)
echo.
python -m http.server 8000 || python3 -m http.server 8000
pause
