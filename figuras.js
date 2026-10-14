// Datos compartidos por el visor (index.html) y las tarjetas (tarjetas.html).
// "id" = número del marcador barcode 3x3 de AR.js. "bits" = matriz interior del marcador
// (1 = celda blanca), tomada de la colección artoolkit-barcode-markers-collection.
window.FIGURAS = [
  { id: 1,  nombre: "El Niño Jesús",  texto: "Recostado en un pesebre, envuelto en pañales.", ref: "Lucas 2:7",
    bits: [[0,1,1],[1,1,1],[0,0,1]] },
  { id: 2,  nombre: "María",          texto: "Madre de Jesús.", ref: "Lucas 1:26-38",
    bits: [[0,1,1],[1,1,0],[0,1,1]] },
  { id: 3,  nombre: "José",           texto: "Carpintero y esposo de María.", ref: "Mateo 1:18-25",
    bits: [[0,1,1],[1,1,0],[0,0,1]] },
  { id: 4,  nombre: "El Ángel",       texto: "Anuncia a los pastores el nacimiento.", ref: "Lucas 2:9-14",
    bits: [[0,1,1],[1,0,1],[0,1,1]] },
  { id: 5,  nombre: "La Estrella de Belén", texto: "Guía a los Magos de Oriente.", ref: "Mateo 2:1-10",
    bits: [[0,1,1],[1,0,1],[0,0,1]] },
  { id: 6,  nombre: "El Pastor",      texto: "Velaba su rebaño durante la noche.", ref: "Lucas 2:8",
    bits: [[0,1,1],[1,0,0],[0,1,1]] },
  { id: 7,  nombre: "La Oveja",       texto: "Parte del rebaño de los pastores.", ref: "Lucas 2:8",
    bits: [[0,1,1],[1,0,0],[0,0,1]] },
  { id: 8,  nombre: "El Buey",        texto: "Figura tradicional del pesebre.", ref: "Tradición (Isaías 1:3)",
    bits: [[0,1,1],[0,1,1],[0,1,1]] },
  { id: 9,  nombre: "La Mula / El Burro", texto: "Figura tradicional del pesebre.", ref: "Tradición (Isaías 1:3)",
    bits: [[0,1,1],[0,1,1],[0,0,1]] },
  { id: 10, nombre: "Melchor",        texto: "Rey Mago; por tradición ofrece oro.", ref: "Mateo 2:11 y tradición",
    bits: [[0,1,1],[0,1,0],[0,1,1]] },
  { id: 11, nombre: "Gaspar",         texto: "Rey Mago; por tradición ofrece incienso.", ref: "Mateo 2:11 y tradición",
    bits: [[0,1,1],[0,1,0],[0,0,1]] },
  { id: 12, nombre: "Baltasar",       texto: "Rey Mago; por tradición ofrece mirra.", ref: "Mateo 2:11 y tradición",
    bits: [[0,1,1],[0,0,1],[0,1,1]] },
  { id: 13, nombre: "El Nacimiento completo", texto: "El portal de Belén con toda la escena.", ref: "Lucas 2 y Mateo 2",
    bits: [[0,1,1],[0,0,1],[0,0,1]] }
];

// Dibuja un marcador barcode 3x3 como SVG nítido para imprimir.
// Proporciones de AR.js: borde negro = 25 % del ancho por lado; matriz 3x3 en el 50 % central.
window.marcadorSVG = function (bits) {
  const c = 50 / 3;
  let celdas = "";
  bits.forEach((fila, y) => fila.forEach((v, x) => {
    if (v) celdas += `<rect x="${25 + x * c}" y="${25 + y * c}" width="${c + 0.05}" height="${c + 0.05}" fill="#fff"/>`;
  }));
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" role="img"><rect width="100" height="100" fill="#000"/>${celdas}</svg>`;
};
