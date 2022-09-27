
const minHeight = 52;     // altura mínima para subir
const minAge = 10;     // edad mínima para subir 

var children = {
    age: Math.random(),
    height: Math.random()
}

//se me ocurrio una variable que es un objeto que representa la persona "children", tiene dos propiedades : edad y altura, que
// tienen un número aleatorio en su valor. Despues cree dos variables, "minHeight" y "minAge" para determinar la altura mínima
// para que la persona pueda entrar. 
//Podriamos configurar por ejemplo un condicional que compare las propiedades del objeto "person" con "minHeight" y "minAge",
// para saber si la persona cumple con los mínimos estandares.
  

//Desafío de código: Súbete a ese juego 

if (children.height > minHeight && children.age > minAge) {
    return "¡Súbete, chico!"
} else if (children.height > minHeight || children.age > minAge ) {
    return "¡Súbete, chico!"
} else {
    return "Lo siento, chico. Tal vez el próximo año"
}
