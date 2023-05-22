$(document).ready(function() {
  // Manejar el evento de selección de archivo
  $('#file-input').change(function(e) {
    var files = e.target.files; // Obtener los archivos seleccionados
    if (files.length === 0) return; // Salir si no hay archivos

    var mergedData = []; // Datos combinados de todos los archivos
    var completedFiles = 0; // Contador de archivos procesados

    // Iterar sobre cada archivo seleccionado
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();

      reader.onload = function(e) {
        var contents = e.target.result; // Obtener el contenido del archivo

        // Procesar el contenido
        var lines = contents.split('\n');
        var data = [];
        for (var j = 0; j < lines.length; j++) {
          var line = lines[j];
          var values = line.split('|'); // Separar los valores por "|"
          data.push(values);
        }

        mergedData = mergedData.concat(data); // Combinar los datos del archivo actual con los datos existentes
        completedFiles++; // Incrementar el contador de archivos procesados

        // Verificar si es el último archivo
        if (completedFiles === files.length) {
          // Generar la tabla CSV
          var csvContent = "data:text/csv;charset=utf-8,";
          mergedData.forEach(function(rowArray) {
            var row = rowArray.join(",");
            csvContent += row + "\r\n";
          });

          // Descargar el archivo CSV generado
          var encodedUri = encodeURI(csvContent);
          var link = document.createElement("a");
          link.setAttribute("href", encodedUri);
          link.setAttribute("download", "data.csv");
          document.body.appendChild(link);
          link.click();
        }
      };

      reader.readAsText(file);
    }
  });
});
