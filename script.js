fetch('instrumentos.php')
  .then(response => response.json())
  .then(data => {
    const instrumentosList = document.getElementById('instrumentos-list');

    // Recorre los resultados y crea elementos <li> para cada instrumento
    data.forEach(instrumento => {
      const li = document.createElement('li');
      li.textContent = instrumento.nombre;
      instrumentosList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
