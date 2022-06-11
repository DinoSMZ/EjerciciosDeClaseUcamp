//["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]

//let Nac = ["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]
//let Cont = [1, 1, 1, 1, 1, 1, 1, 1, 1]

//Nac.reduce(function(acumulador, cont, index) {
//  for (var i = 0; i <= Nac.length; i++) {
//    i = Nac[index];
//  acumulador[i] = cont;
//return acumulador
// }
//})

//let contar = ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"]
//let mex = ["mexicano"]
//let mex = []
//let acum1 = 0
//let acum2 = 0
//let acum3 = 0
//let acum4 = 0

//for (var i = 0; i <= contar.length; i++) {
    //if (function tamaño(elemento.length) = 8) {
     //   acum1 = acum1 + 1
    //} else if (contar.length[i] === 9) {
    //    acum2 = acum2 + 1
    //} else if (contar.length[i] === 7) {
   //     acum3 = acum3 + 1
   // } else {
   //     acum4 = acum4 + 1
   // }
//}
//}


//console.log('mexicano ' + acum1)
//console.log('argentino ' + acum2)
//console.log('venezolano ' + acum3)
//console.log('peruano ' + acum4)
//function nacionalidad(nac){

   // this.nac = nac;
//}

//var Mex = new nacionalidad("mexicano")
//var Ven = new nacionalidad("venezolano")
//var arg = new nacionalidad("argentino")
//var per = new nacionalidad("peruano")


//for (var i = 0; i <= contar.length; i++){

  //  if (contar.indexOf(Mex)){
  //   acum1= acum1 +1

  //  }
  //  else if (contar.indexof(Ven)){
   //    acum2= acum2 + 1
  //  }
   // else if(contar.indexof(arg)){

  //      acum3 = acum3 + 1
  //  }
   // else {acum4 = acum4 + 1}



//}

//let contar = ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"]
//let resultado = {}

//contar.forEach(element1 => (resultado)[e1] {
    
//});((prev, cur))

//console.log (resultado)



//console.log('mexicano ' + acum1)
//console.log('Venezolanos ' + acum2)
//console.log('Argentinos ' + acum3)
//console.log('Peruano ' + acum4)

//const arr = [1, 3, 1, 2, 5, 2, 3, 4, 1, 2, 3, 4, 3]
//let contar = ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"]
//let resultado = {}
//contar.forEach(el => (resultado[el] = resultado[el] + 1 || 1))
//console.log (resultado)
let arrinic = ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"]
let contar = ["mexicano","argentino","argentino","venezolano","peruano","mexicano","argentino","peruano","venezolano"].sort()
let Unico = []
let almacenador = []
let contador = 1

console.log(arrinic)


for (let i=0 ; i < contar.length; i++){
if( contar[i] === contar[i+1]){
contador++} else { 
    Unico.push(contar[i]);
    almacenador.push(contador)
    contador = 1;
}}
  
console.log(Unico)
console.log(almacenador)

for ( let j=0; j < Unico.length; j++){

    console.log(Unico[j]+'s'+':'+almacenador[j])
}


