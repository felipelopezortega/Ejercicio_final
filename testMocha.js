const $ = require('jquery');

describe('Procesamiento de archivos', function() {
    it('Verificar que se procesen correctamente los archivos', function() {
      // Simular la selección de archivos de texto
      const files = [
        // ...agregar archivos de texto aquí
      ];
      const event = { target: { files } };
  
      // Simular el evento de cambio del input de archivo
      $('#file-input').trigger('change', event);
  
      // Verificar si se procesaron correctamente los archivos y se generó el CSV
      assert.strictEqual(mergedData.length, expectedDataLength);
    });
  });
  