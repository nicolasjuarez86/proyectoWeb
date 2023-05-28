fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {

    const usuarios = data.results;

    
    usuarios.forEach(usuario => {
      console.log(usuario.email);
      console.log(usuario.picture.large);
        const imagen = document.querySelector('.Article-user-image');;
        imagen.src = usuario.picture.large;
    
        const email = document.querySelector('.Article-user-email');
        email.textContent = usuario.email;
        email.href = usuario.email;    

        const nombre = document.querySelector('.Article-user-name');
        nombre.textContent = `${usuario.name.first} ${usuario.name.last}`;
    
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

