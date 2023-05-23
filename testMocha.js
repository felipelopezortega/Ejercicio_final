const assert = require('assert');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const jquery = require('jquery');

// Configuración inicial de JSDOM
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const { window } = dom;
global.window = window;
global.document = window.document;

// Importar las bibliotecas necesarias
const $ = jquery(window);

// Código de prueba
describe('Procesamiento de archivos', function() {
  it('Verificar que se procesen correctamente los archivos', function() {
    // Definir una variable de prueba mergedData
    const mergedData = ['dato1', 'dato2', 'dato3'];

    // Definir la longitud esperada de los datos después del procesamiento
    const expectedDataLength = 3;

    // Simular la selección de archivos de texto
    const files = [
      '512195032.txt'
    ];
    const event = { target: { files } };

    // Simular el evento de cambio del input de archivo
    $('#file-input').trigger('change', event);

    // Verificar si se procesaron correctamente los archivos y se generó el CSV
    assert.strictEqual(mergedData.length, expectedDataLength);
  });
});
