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

let contar = ["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]
let acum1 = 0
let acum2 = 0
let acum3 = 0
let acum4 = 0

for (var i = 0; i <= contar.length; i++) {
    if (function tamaño(elemento.length) = 8) {
        acum1 = acum1 + 1
    } else if (contar.length[i] === 9) {
        acum2 = acum2 + 1
    } else if (contar.length[i] === 7) {
        acum3 = acum3 + 1
    } else {
        acum4 = acum4 + 1
    }
}
}


console.log('mexicano ' + acum1)
console.log('argentino ' + acum2)
console.log('venezolano ' + acum3)
console.log('peruano ' + acum4)