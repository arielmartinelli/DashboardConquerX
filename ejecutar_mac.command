#!/bin/bash
# Ir al directorio donde está guardado este archivo
cd "$(dirname "$0")"

clear
echo "======================================================="
echo "   Iniciando Servidor Local - Dashboard ConquerX (Mac)"
echo "======================================================="
echo ""
echo "1. Abriendo el Dashboard en el navegador..."
open "http://localhost:8000"
echo ""
echo "2. Iniciando servidor en http://localhost:8000"
echo "   (No cierres esta ventana mientras uses el Dashboard)"
echo ""

# Ejecutar el servidor con Python (incluido por defecto en Mac)
python3 -m http.server 8000
