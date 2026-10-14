# Nacimiento Frallier en realidad aumentada

## Archivos
- `index.html`: visor de realidad aumentada (lo que abre el celular).
- `tarjetas.html`: hoja para generar los QR e imprimir las 13 tarjetas.
- `figuras.js`: nombres, textos y marcadores de cada figura (lo usan las dos páginas).

## 1. Publicar
Sube los tres archivos a la misma carpeta de un servidor con **HTTPS**.
Sin HTTPS el navegador del celular no deja usar la cámara.
Opciones: un servidor interno de Frallier con certificado, o un hosting estático gratuito con HTTPS (por ejemplo GitHub Pages).

## 2. Imprimir
1. Abre `https://tu-servidor/carpeta/tarjetas.html` en la computadora.
2. Confirma la dirección del visor y pulsa "Actualizar códigos QR".
3. Imprime al 100 % de escala (sin "ajustar a la página"), en papel blanco mate.
   El cuadro negro debe medir unos 6 cm de lado.

## 3. Probar
- Escanea el QR, acepta el permiso de cámara y apunta al cuadro negro.
- Prueba las 13 tarjetas antes de montar el nacimiento.
- Mejor con buena luz, sin reflejos, y con la tarjeta plana (pegarla sobre cartón ayuda).
- No tapes ni recortes el borde negro del marcador ni el margen blanco a su alrededor.

## Cambiar textos o agregar figuras
- Textos: edita `figuras.js`.
- Una figura nueva necesita otro marcador (los marcadores 3x3 de AR.js van del 0 al 63) y su función de construcción en `CONSTRUIR` dentro de `index.html`.

## Tecnología
A-Frame 1.3.0 + AR.js 3.4.5 (marcadores barcode 3x3), cargados desde cdn.jsdelivr.net.
Generador de QR: qrcodejs 1.0.0 desde cdnjs.cloudflare.com.
