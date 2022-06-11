//let contactos = [
//{

 //   nombre: 'pedro',
  //  apellido: 'Ramos',
  //  telefono: '12456455'
//}
//]:

//function agregarContacto (nombre,apellido,telefono){

  //  contactos.push({

    //    nombre:nombre,
     //   apellido:apellido,
     //   telefono:telefono
   // })

//}

//let informacion =[{

//    nombre: 'juan',
  //  edad:'27',
  //  ocupacion: 'ingeniero'

//}]

//function AgregarElemento(propiedad,valor){
    
//informacion.push({
 //  propiedad:valor
//})
//}
//console.log(informacion)

//AgregarElemento('saludo','holi')


let contactos = [
    {
        id: 1240,
        nombre: 'Mario',
        apellido: 'Ramos',
        telefono: '3111234567'
    },
    {
        id: 10,
        nombre: 'Mario',
        apellido: 'Ramos',
        telefono: '3121234567'
    },
    {
        id: 1000,
        nombre: 'Mario',
        apellido: 'Perez',
        telefono: '3121254567'
    },
];

function editarContacto(id){
     contactos.forEach (function (id, nombre, apellido, telefono) {
        if (id === contactos.id){
            /*  contactos.nombre === nombre           
             contactos.apellido === apellido          
               contactos.telefono === telefono */
             console.log('si existe')
             } else {
                 console.log('no existe el ID')
            } });}

