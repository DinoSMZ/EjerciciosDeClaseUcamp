//reducee

const calificaciones = [80, 60, 40, 90, 100, 77]

function promedio(arregloCalificaciones) {
    var suma = arregloCalificaciones.reduce(function(acumulador, elemento) {
            return acumulador + elemento;

        },

    )


    var promedio = suma / arregloCalificaciones.length

    if (promedio < 31) {
        return 'promedio: ' + promedio + ' Muy deficiente'
    } else if (promedio < 51) {
        return 'promedio: ' + promedio + ' Insuficiente'
    } else if (promedio < 61) {
        return 'promedio: ' + promedio + ' Meh'
    } else if (promedio < 71) {
        return 'promedio: ' + promedio + ' regular'
    } else if (promedio < 91) {
        return 'promedio: ' + promedio + ' ahí va'
    } else {
        return 'sdfsdaf'
    }
}

console.log(promedio(calificaciones))




const calificaciones = [80, 60, 40, 90, 100, 77]

function promedio(arregloCalificaciones) {
    var suma = arregloCalificaciones.reduce(function(acumulador, elemento) {
                return acumulador + elemento;

            },

        )
        //for each


    var promedio = suma / arregloCalificaciones.length

    if (promedio < 31) {
        return 'promedio: ' + promedio + ' Muy deficiente'
    } else if (promedio < 51) {
        return 'promedio: ' + promedio + ' Insuficiente'
    } else if (promedio < 61) {
        return 'promedio: ' + promedio + ' Meh'
    } else if (promedio < 71) {
        return 'promedio: ' + promedio + ' regular'
    } else if (promedio < 91) {
        return 'promedio: ' + promedio + ' ahí va'
    } else {
        return 'sdfsdaf'
    }
}

console.log(promedio(calificaciones))


.map // me modifica un nuevo arreglo donde cada uno de sus elementos se le hace una modif
arreglo.map(function(elemento) {
    returno elemento / 2;
})

for (var i = 0; i < arreglo.length; i++)[
    elemento[i] = elemento[i] / 2;
]