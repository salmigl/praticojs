// 1- Crea un array con 5 estudiantes y luego mostrarlos en el documento html
// let estudiantes= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
// document.write(estudiantes)

// 2- Acceder al array y mostrar en la consola el estudiante que está en el último lugar
// let estudiante= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")

// let ultimo = estudiante[estudiante.length - 1]
// document.write(ultimo)

// 3- El preceptor se confundió de un nombre por lo que debes cambiarle el nombre al tercer estudiante
// 4- Se sumo un nuevo integrante al grupo llamado Alberto, debes añadirlo a la lista y mostrarlo
// mediante un alert
// let estudiante= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
// let nuevos = estudiante.push("Alberto")
// document.write(nuevos)
// 5- Ahora, escribe el método que te permita quitar el último ingresante
let estudiante= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
let ultimo = estudiante.pop()
document.write(estudiante, "se elimino a: "+ultimo)

