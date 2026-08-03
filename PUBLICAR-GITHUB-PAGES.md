# Publicar el sistema en GitHub Pages

## 1. Subir estos archivos al repositorio `rocotex`

Subir todo lo que esta dentro de la carpeta `outputs`, especialmente:

- `index.html`
- `sistema-francos-tejeduria.html`
- `google-sheets-apps-script.gs`
- `INSTRUCCIONES-GOOGLE-SHEETS.md`

## 2. Activar GitHub Pages

1. Entrar al repositorio `rocotex`.
2. Ir a `Settings`.
3. Entrar a `Pages`.
4. En `Build and deployment`, elegir:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Presionar `Save`.

## 3. Abrir el sitio

GitHub va a mostrar una URL parecida a:

`https://TU-USUARIO.github.io/rocotex/`

Puede tardar unos minutos en aparecer.

## 4. Conectar Google Sheets

La planilla de Google Sheets no se sube a GitHub. Se crea aparte en Google Sheets.

1. Crear una planilla en Google Sheets.
2. Ir a `Extensiones > Apps Script`.
3. Pegar el contenido de `google-sheets-apps-script.gs`.
4. Publicarlo como `Aplicacion web`.
5. Copiar la URL.
6. Abrir el sistema publicado.
7. Pegar la URL en `Guardar online`.
8. Presionar `Conectar`.
9. Presionar `Guardar online`.
