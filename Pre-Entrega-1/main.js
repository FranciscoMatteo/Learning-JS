let cantidadNotas = parseInt(prompt("Ingrese la cantidad de alumnos"));
let notanro = 1;
let suma = 0;                                                                                                   //  Definiendo variables globales 
let promedio;

if (cantidadNotas > 0) {                                                                                        //  Utilizamos if unicamente para filtrar que el usuario no ponga el nro 0

    for (i=0; i < cantidadNotas; i++) {                                                                         //  Ciclo for para que el usuario cargue la cantidad de notas deseadas

        let nota = parseInt(prompt(`Digite la nota nro ${notanro}`))
        suma = suma + nota;                                                                                     // Acumulador
        notanro = notanro + 1;                                                                                  // Contador
        }

    promedio = suma / cantidadNotas;
    alert(`El promedio de ${cantidadNotas} notas es igual a ${promedio}`);

}

else {
    let cantidadNotas2 = parseInt(prompt("Porfavor, ingrese un numero mayor a 0"));                             // Para cada caso tuve que crear una variable de cantidad de notas diferentes, ya que
    for (i=0; i < cantidadNotas2; i++) {                                                                        // al utilizar let las variables no se pisan y el promedio en el caso que el usuario ingrese 0
        let nota = parseInt(prompt(`Digite la nota nro ${notanro}`))                                            // el promedio me daba infinito, por eso se crea la variable cantidadNotas2
        suma = suma + nota;
        notanro = notanro + 1;
        }

    promedio = suma / cantidadNotas2;
    alert(`El promedio de ${cantidadNotas2} notas es igual a ${promedio}`);
}






