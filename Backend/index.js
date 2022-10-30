const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
var cors = require('cors')
const app = express();


// configuracion - seting
app.set('appName','Corriendo la API');
app.set('json spaces',2);

// middlewres
app.use(morgan('combined'));
app.use(cors());
app.use(express.json()); // para poder manjar los json
/*
app.use(function(req,res,next){
    console.log('request url:' + req.url);
    next();
});*/
app.set('port',4000);

// cuando el servidor resive un peticion get 
// se llaman endpoints
app.get('/', (req,res) =>{
    // res es lo que requiere el navegador y res es lo que respondemos  a la peticion 
    // o dea que res y res son parametros que resive la funcio  la flecha es una forma 
    //moderna de crear una funcion
    let jugadores = require('./jugadores.json');
    res.send(jugadores);
}); 

app.post('/usuario', (req,res)=>{
    console.log(req.body);
    var usuarios = require('./usuarios.json') ;
    res.send(usuarios);
});

// endpoints para ingresar 
app.post('/login' , (req, res) => {

    var usuariosapp = require('./usuarios.json');
    var usuarioEnviado = req.body.Usuario;
    var passwordEnviado = req.body.Pasword;

    
    var arregloUsuarios = [];

    // BUSCA EL USUARIO EN EL ARCHIVO JSON SI EXISTE
    for (var i = 0; i < usuariosapp.length; i++) {
        if(usuariosapp[i].Usuario == usuarioEnviado && usuariosapp[i].Pasword == passwordEnviado){            
            arregloUsuarios.push(usuariosapp[i]);
        } 
    }
    // ESE ES EL IF PARA RESPONDERLE AL FRONTEND
    if (arregloUsuarios.length > 0) {
       res.send(arregloUsuarios);
    } else {
        res.send({Error: "Tu usuario no existe"});
        
    }
    
});


//endpoints para buscar jugador por pais
app.post('/buscador' , (req, res) => {


    var nombreSelecion = req.body.Seleccion;
    
    var Jugadoresapp = require('./jugadores.json');

    var arregloJugador = [];

    // BUSCAR LO QUE YO QUIERO
    for (var i = 0; i < Jugadoresapp.length; i++) {
        if(Jugadoresapp[i].Seleccion == nombreSelecion){
            arregloJugador.push(Jugadoresapp[i]);
        }
    }

    // ESE ES EL IF PARA RESPONDERLE AL FRONTEND
    if (arregloJugador.length > 0) {
        res.send(arregloJugador);
    } else {
        res.send({Error: "No existen stickers de esta seleccion"});
    }
});

app.post('/buscarNombre' , (req, res) => {


    var nombreJugador = req.body.Nombre;
    console.log(nombreJugador);
    var Jugadoresapp = require('./jugadores.json');

    var arregloJugadores = [];

    // BUSCAR LO QUE YO QUIERO
    for (var i = 0; i < Jugadoresapp.length; i++) {
        if(Jugadoresapp[i].Nombre == nombreJugador){
            arregloJugadores.push(Jugadoresapp[i]);
        }
    }

    // ESE ES EL IF PARA RESPONDERLE AL FRONTEND
    if (arregloJugadores.length > 0) {
        res.send(arregloJugadores);
    } else {
        res.send({Error: "No existen stickers de esta seleccion"});
    }
});

app.post('/buscarRegion' , (req, res) => {
    var nombreRegion = req.body.Region;
    console.log(nombreRegion);
    var Jugadoresapp = require('./jugadores.json');

    var arregloRegion = [];

    // BUSCAR LO QUE YO QUIERO
    for (var i = 0; i < Jugadoresapp.length; i++) {
        if(Jugadoresapp[i].Region == nombreRegion){
            arregloRegion.push(Jugadoresapp[i]);
        }
    }

    // ESE ES EL IF PARA RESPONDERLE AL FRONTEND
    if (arregloRegion.length > 0) {
        res.send(arregloRegion);
    } else {
        res.send({Error: "No existen stickers de esta seleccion"});
    }
});






app.listen(app.get('port'), function(){
    console.log('servidor funcionando');
    console.log('Nombre de la app;', app.get('appName'));
});


