const { JSDOM } = require('jsdom');
const jquery = require('jquery');
const fs = require('fs');

// Crear una instancia de JSDOM
const { window } = new JSDOM('<!doctype html><html><body></body></html>');

// Asignar el objeto global 'window' al contexto global
global.window = window;
global.document = window.document;

// Importar jQuery y asignarlo a una variable
const $ = jquery(window);

// Definir y asignar un valor a mergedData
let mergedData = [];

test('Verificar si hay más de 1 respuesta', () => {
  // Simular la selección de archivos de texto
  const files = [
    '512195032.txt', '512195810.txt'
  ];
  const event = { target: { files } };

  // Simular el evento de cambio del input de archivo
  $('#file-input').trigger('change', event);

  // Verificar si hay más de 1 respuesta
  expect(mergedData.length).toBeGreaterThan(1);
});

// Función para leer y cargar el contenido de los archivos de texto
function loadTextFiles(files) {
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');

    // Procesar y agregar los datos a mergedData
    lines.forEach(line => {
      const values = line.split('|');
      mergedData.push(values);
    });
  });
}

// Ejemplo de llamada a la función para cargar los archivos de texto
loadTextFiles(['512195032.txt', '512195810.txt']);
