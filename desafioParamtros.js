 var nombre = "";
 var options = [mañana, tarde, noche];

 function greet(nombre, options) {                   
   if (nombre === "Fernando") {
    if (options[0]) return "Buenos dias Fernando";                                  // Use Braquet notation y DOT notation para que sea un poco mas facil de leer el codigo.
    else if (options[1]) return "Buenas tardes Fernando"
    else return "Buenas noches Fernando"
   }
    else if (nombre === "Count Dooku") {
        return "¡Voy por ti, Dooku!";
    }
    else {
        if (options[0]) return "Buenos dias " + nombre;
        if (options[1]) return "Buenas tardes " + nombre;
        else return "Buenas noches " + nombre; 
    }
    
 }
   sadasdasda    
 