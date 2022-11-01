# PROYECTO 2 IPC1 SECCION B
| Carnet      | Nombre      | Auxiliar|
| ----------- | ----------- |---------|
| 201905487   | Dionicio Dario Simon Bal |Hector Josue Orozco Salazar         |

# Frontend
## Tecnologia utilizada
* express
* cors
* morgan
* nodejs

## Manual de uso de la Aplicacion
### Login 
> en esta pagina debera ingresar su usuario y su 
> pasword correctamente y luego presionar en el boton ingresar lo cual lo llevara a la 
> pragina principal

![image](/Frontend/imagenes/Imagen1.jpg)

### Home page
> En esta pagina podras realizar la busque de
> jugadores, la busqueda se puede realizr de 
> 3 formas marcando de la forma que desea 
> realizar la busqueda

![image](/Frontend/imagenes/Imagen2.jpg)

# Backend 
### Esta api fue creado en el puerto 4000
> se crearon 5 endpoint
* Verificacion de usuario
> Se utiliza una funcion para resivir un archi en formato json que trae el usuario 
y la contraseña se verifica si existen en una base de datos y se responde con otro srchivo json con los mismos datos.
* Buscar jugadores
> de la misma forma se resive un  archivo json con el nombre del jugador se verifica se existe si esto se cumple se devuelve un archivo con los datos del jugador solisitado
### De la misma forma se crearon los siguientes endpoints
* Buscar por nombre
* Buscar por seleccion 
* Buscar por Region 

> Estos endpoints fueron creados con la 
> ayuda de los recursos descritos al principio
