
   

        const runner = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        const speed = 10;
        

        // 1) Pregunta: Se que necesitamos un bucle para tener una forma de medir la distancia recorrida.
        // 2) El punto de partida del bucle es 0, la primera posicion de neustro array de runner que representa al corredor
        // y sus km de distancia recorrida. 
        // 3) El bucle debe detenerse mientras que la distancia recorrida sea 10km.
        // 4) Sabra como parar porque tiene la condición dentro del bucle. 
        // 5) El incremento para cada iteración es uno, se ve representado con el "i++".
        // 6) Necesito de variables un array que represente al corredor y sus kms recorridos y otra que diga la velocidad a
        // que se traslada para hacer la caracteristica stretch1. 
            
     
        for (let i = 0; i < runner.length; i++) {
            if (runner[i] === 3 || runner[i] === 6 || runner[9]) {
                return "Candy!!!"
            } else if (runner[i] >= 10) {
                return "I can't give you a candy"
            }
            console.log(i)
            }

 if (runner && speed > 9){
    for (let i = 0; i < runner.length; i++){
        if (runner[i] === 3 || runner[i] === 6 || runner[9]){
            return "Candy!!!"
        }else if (runner[i] >= 10){
            return "I cant't give you a candy"
        }
    }
    console.log(i)
 }


          