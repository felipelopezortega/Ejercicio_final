const { Selector } = require('testcafe');

fixture('Procesamiento de archivos')
  .page('http://127.0.0.1:5501/index.html');

test('Verificar si se pueden enviar los valores a la tabla o base de datos', async t => {
  // Simular la selección de archivos de texto
  await t
    .setFilesToUpload('#file-input', [
      '512195032.txt'
    ]);

  // Esperar a que se procesen los archivos y se descargue el CSV
  await t
    .expect(Selector('a[download="data.csv"]').exists)
    .ok();
});
