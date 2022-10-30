const formElement = document.getElementById('saveUsuario');

formElement.addEventListener("submit",(event) => {
    event.preventDefault();
    let capturaUsuario = document.getElementById("usser").value;
    let capturarPasword = document.getElementById("pasword").value;

    let usuario1 = {"Usuario":capturaUsuario,"Pasword":capturarPasword}

    let usuarioJson = JSON.stringify(usuario1);
    let url = "http://localhost:4000/login"
    
    fetch(url,{
        method: 'POST', // or 'PUT'
        body: usuarioJson, // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        validarLogin(data)
      })
      .catch(error => console.error('Error:', error))
      

})

function validarLogin(datos){
  const datosJson = datos;
  console.log(datosJson);
  let paswords = [
    {
        "Pasword":1235
    }
    ,
    {
        "Pasword": 123
    }
    ,
    {
        "Pasword":455
    }
    ]
   /* console.log(paswords[0].Pasword);*/
    console.log(datosJson[0].Error);
  for(i=0; i < paswords.length; i++){
    if(paswords[i].Pasword == datosJson[0].Pasword){   
     location.href = './HomePage.html';
    }
  }
 
}