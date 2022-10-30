const formElement = document.getElementById('homeSave');

let url = '';
const buscarNombre = document.getElementById('nombre');
const buscarSeleccio = document.getElementById('seleccion');
const buscarRegion = document.getElementById('region');

// metodos que atrapan la seleccion del checkbox
buscarNombre.addEventListener('click', function() {
  if(buscarNombre.checked) {
    url= 'http://localhost:4000/buscarNombre' ;
    console.log(url);
  } else {
    url='';
    console.log(url);
  }
});

buscarSeleccio.addEventListener('click', function() {
  if(buscarSeleccio.checked) {
    url= 'http://localhost:4000/buscador' ;
    console.log(url);
  } else {
    url= '';
    console.log(url);
  }
});

buscarRegion.addEventListener('click', function() {
  if(buscarRegion.checked) {
    url= 'http://localhost:4000/buscarRegion' ;
    console.log(url);
  } else {
    url='';
    console.log(url);
  }
});
//************************************************** */

formElement.addEventListener("submit",(event) => {
    event.preventDefault();

    var text1 = document.getElementById('Buscar').value;
    
    let enviar = {
      "Nombre": text1
  }
  let enviarJSON = JSON.stringify(enviar);
  
  fetch(url,{
    method: 'POST', // or 'PUT'
        body: enviarJSON, // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error))
})



function generarUrl(buscar){
  let url = '';
  if (buscar == "Seleccion"){
   return url = 'http://localhost:4000/buscador';
  }else{
    if(buscar == "Nombre"){
      return url = 'http://localhost:4000/buscarNombre';
    }else{
      if(buscar == "Region"){
      return url =  'http://localhost:4000/buscarRegion';
      }
    }
    
  }
}

function generarCheckbox(IdEntrada){
  formElement.addEventListener('click', function() {
    if(IdEntrada.checked) {
      return 'El elemento está marcado';
    } else {
      return 'Ahora está desmarcado';
    }
  });
}