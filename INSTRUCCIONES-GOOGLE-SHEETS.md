# Sistema de francos online con Google Sheets

## 1. Crear la planilla

1. Abrir Google Sheets.
2. Crear una planilla nueva, por ejemplo: `Francos Fabrica`.
3. Ir a `Extensiones > Apps Script`.

## 2. Pegar el codigo

1. Borrar el codigo que aparece en Apps Script.
2. Copiar y pegar todo el contenido del archivo `google-sheets-apps-script.gs`.
3. Guardar el proyecto.

## 3. Publicar como aplicacion web

1. En Apps Script, ir a `Implementar > Nueva implementacion`.
2. Elegir tipo: `Aplicacion web`.
3. En `Ejecutar como`, elegir: `Yo`.
4. En `Quien tiene acceso`, elegir: `Cualquier usuario con el enlace`.
5. Presionar `Implementar`.
6. Autorizar los permisos.
7. Copiar la URL de la aplicacion web.

## 4. Conectar el sistema

1. Abrir `sistema-francos-tejeduria.html`.
2. En el panel `Guardar online`, pegar la URL de Apps Script.
3. Presionar `Conectar`.
4. Presionar `Guardar online` para subir los datos actuales.
5. En otro dispositivo, abrir el mismo sistema, pegar la misma URL y presionar `Cargar online`.

## Importante

- El archivo HTML sigue funcionando aunque no este conectado.
- Para compartir entre dispositivos, siempre usar la misma URL de Apps Script.
- Si modificas datos en un dispositivo, presiona `Guardar online`.
- En otro dispositivo, presiona `Cargar online` para traer la ultima version.
