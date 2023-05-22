test('Verificar si hay más de 10 respuestas', () => {
    // Simular la selección de archivos de texto
    const files = [
      // ...agregar 10 o más archivos aquí
    ];
    const event = { target: { files } };
  
    // Simular el evento de cambio del input de archivo
    $('#file-input').trigger('change', event);
  
    // Verificar si hay más de 10 respuestas
    expect(mergedData.length).toBeGreaterThan(10);
  });
  