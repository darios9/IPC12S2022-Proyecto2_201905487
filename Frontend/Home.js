window.addEventListener('load', function() {
  console.log('La página ha terminado de cargarse!!');
  var contenedor = document.getElementById('titulo');
  var usuario =  localStorage.getItem("nombre");

  console.log(usuario);

  contenedor.innerHTML = `<h2> ${usuario} <h2>`;
});

const formElement = document.getElementById('homeSave');
var panelRespuesta = document.getElementById("tarjeta");

let url = '';
const buscartodos = document.getElementById('todo');
const buscarNombre = document.getElementById('nombre');
const buscarSeleccio = document.getElementById('seleccion');
const buscarRegion = document.getElementById('region');
var tipoBusqueda = "";
//let tarjeta = "tarjeta"

// metodos que atrapan la seleccion del checkbox
buscartodos.addEventListener('click', function() {
  if(buscartodos.checked) {
    url= 'http://localhost:4000/jugadores';
    tipoBusqueda = "Jugadores";
    console.log(url);
  } else {
    url='';
    panelRespuesta.innerHTML ='';
  }
});

buscarNombre.addEventListener('click', function() {
  if(buscarNombre.checked) {
    url= 'http://localhost:4000/buscarNombre' ;
    tipoBusqueda = "Nombre";
  } else {
    url='';
    panelRespuesta.innerHTML ='';
  }
});

buscarSeleccio.addEventListener('click', function() {
  if(buscarSeleccio.checked) {
    url= 'http://localhost:4000/buscador';
    tipoBusqueda = "Seleccion";
  } else {
    url= '';
    panelRespuesta.innerHTML ='';
  }
});

buscarRegion.addEventListener('click', function() {
  if(buscarRegion.checked) {
    url= 'http://localhost:4000/buscarRegion' ;
    tipoBusqueda = "Region";
  } else {
    url='';
    panelRespuesta.innerHTML ='';
  }
});
//************************************************** */


formElement.addEventListener("submit",(event) => {
    event.preventDefault();
    panelRespuesta.innerHTML ='';
    var text1 = document.getElementById('Buscar').value;
    
    
  let enviarJSON = JSON.stringify(generarArchivoJson(tipoBusqueda,text1));
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
    obtenerJugador(data);
   //crearJugador(data);
    /*var panelRespuesta = document.getElementById("tarjeta");
    panelRespuesta.innerHTML = `<div class="card" style="width: 10rem;">
    <img src=" ${data[0].imagen} " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${data[0].Nombre} </h5>
      <p class="card-text">Apellido: ${data[0].Apellido} </p>
      <p class="card-text">Numero: ${data[0].Numero} </p>
      <p class="card-text">Seleccion: ${data[0].Seleccion} </p>
      <p class="card-text">Region: ${data[0].Region} </p>
    </div>
  </div>`;*/
  })
  .catch(error => alert('el jugador no existe'))
})


function generarArchivoJson(tipo, texto){
  if(tipo == "Nombre"){
    let enviar = {
      "Nombre": texto
  }
  return enviar;
  }else{
    if( tipo == "Seleccion"){
      let enviar = {
        "Seleccion": texto
    }
    return enviar;
    }else{
      if(tipo == "Region"){
        let enviar = {
          "Region": texto
      }
      return enviar;
      }else {
        if (tipo == "Jugadores"){
        let enviar = {
          "Todos": texto
      }
      return enviar;
        }
      }
    }

  }
}

function crearJugador(jugador){
  let x = 0;
 for(rows of jugador){
 
    panelRespuesta.innerHTML += `<div class="card" style="width: 10rem;">
    <img src=" ${jugador[x].imagen} " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${jugador[x].Nombre} </h5>
      <p class="card-text">Apellido: ${jugador[x].Apellido} </p>
      <p class="card-text">Numero: ${jugador[x].Numero} </p>
      <p class="card-text">Seleccion: ${jugador[x].Seleccion} </p>
      <p class="card-text">Region: ${jugador[x].Region} </p>
    </div>
  </div> `;
  x++;
 }
}

// otara forma de crear jugador
 function obtenerJugador(jugador){
  let x = 0;
  for(rows of jugador){
    panelRespuesta.innerHTML += `<div class="card h-100">
    <img src="${jugador[x].imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Nombre: ${jugador[x].Nombre}</h5>
      <h5 class="card-title">Apellido: ${jugador[x].Apellido}</h5>
      <h5 class="card-title">Seleccion: ${jugador[x].Seleccion}</h5>
      <h5 class="card-title">Region: ${jugador[x].Region}</h5>
      <p class="card-text"></p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Numero: ${jugador[x].Numero}</small>
    </div>
  </div> `;
  x++;
  }
 }