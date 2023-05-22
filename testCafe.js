fixture('Procesamiento de archivos').page('index.html');

test('Verificar si se pueden enviar los valores a la tabla o base de datos', async t => {
  // Simular la selección de archivos de texto
  await t.setFilesToUpload('#file-input', [
    // ...agregar archivos de texto aquí
  ]);

  // Esperar a que se procesen los archivos y se descargue el CSV
  await t.expect(Selector('a[download="data.csv"]').exists).ok();
});
