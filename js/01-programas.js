/*01-Funcion que devuelve el numero de caracteres de un string */
function contarCaracteres(unString){

    let longitud;
    longitud = unString.length;    
    console.log(`La longitud de la cadena es: ${longitud}`);
}

contarCaracteres("Hola mundo");

/*02-Programa una función que te devuelva el texto recortado según el número de caracteres indicados*/

function indiceString(otroString, unIndice){
    
    let resultado = otroString.substring(0,unIndice);
    console.log(resultado);
}

indiceString("Hola mundo",4);

/*03-Programa para dividir un string en palabras y guardarla en un array*/

function divisionCadena(unaCadena, separador){

    let arrayCadena = unaCadena.split(separador);

    for(let i=0;i<arrayCadena.length;i++){

        console.log(arrayCadena[i]);

    }

}

divisionCadena("Este es un texto de prueba"," ");

/*04-Programa una fucion para que calcule el precio de un producto aplicando un descuento  */

function calcularDescuento(precio, porcDesc){

    let precioConDescuento = precio - ((precio/100)*20);
    console.log(`El precio con descuento es: ${precioConDescuento}`);

}

calcularDescuento(1000,20);

/*05-Calcular la cantidad de años entre dos fechas */

function calcularAnios(fechaNac){

    const fecha = new Date();
    
    let edad = (fecha.getFullYear()-fechaNac.getFullYear())
    console.log(edad);
}

calcularAnios(new Date(1989,9,8));

/* 6 - Convertir de decimal a romano */

function convertRomanNumber(unNumero){

    let numero = unNumero;

    if(unNumero <= 1000){
        
        //Arrays con los valores de los numeros romanos
        let unidades = [" ","I","II","III","IV","V","VI","VII","VIII","IX"];
        let decenas  = [" ","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
        let centenas = [" ","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
        let miles    = [" ","M","MM","MMM"];
        //Variables que van a almacenar los indices para los arrays
        let indexmil;
        let indexcen;
        let indexdec;
        let indexuni;
        //Extraemos los miles, centenas, decenas y unidades y los guardamos en los indices.
        //Truncamos los decimales para obtener numeros enteros para nuestros indices.
        indexmil = Math.trunc(numero/1000); 
        numero = numero%1000;

        indexcen = Math.trunc(numero/100);
        numero = numero%100;

        indexdec = Math.trunc(numero/10);
        numero = numero%10;

        indexuni = numero
        // Imprimimos los resultados.
        console.log(`El numero ${unNumero} en romano es: ${miles[indexmil]}${centenas[indexcen]}${decenas[indexdec]}${unidades[indexuni]}`)

    } else {
        console.log("El numero ingresado supera la valor permitido");
    }
}

convertRomanNumber(411);

/** 7-Convertir un numero decimal a binario */

function convertDecimalToBinary(otroNumero){

    let resultadoBinario="";

    if(otroNumero > 0){
        while(otroNumero > 0){

            if (otroNumero % 2 == 0){

                resultadoBinario = "0"+ resultadoBinario;

            }else{

                resultadoBinario = "1"+ resultadoBinario;
            }

            otroNumero=Math.trunc(otroNumero/2);            
        }

        console.log(`El resultado binario es: ${resultadoBinario}`);

    }else if (otroNumero == 0) {

        resultadoBinario = "0";
        console.log(`El valor bianario es: ${resultadoBinario}`);

    }else{
        console.log("El numero ingresado no es valido para este programa.")
    }
}

convertDecimalToBinary(100);

/** 8 - Contar las vocales de una cadena de texto */
function contarVocales(unaCadena){

    let unString = unaCadena.toLowerCase();
    let contadorVocales = 0;

    for( i=0; i<unString.length;i++){

        if(unString[i]=="a" || unString[i] == 'e' || unString[i] == 'i' || unString[i] == 'o' || unString[i] == 'u'){

            contadorVocales = contadorVocales+1;

        }
    }

    console.log(`La cantidad de vocales es: ${contadorVocales}`);

}

contarVocales("otorrinolaringolOgo");

/** 9 - Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.  */

function validaPalindromo(unaFrase){

    let fraseOriginal = unaFrase.toLowerCase();
    fraseOriginal = fraseOriginal.replace(/ /g, "");
    let fraseInvertida="";
    //let tamano = fraseOriginal.length;

    for( i=fraseOriginal.length-1;i>=0;i--){
        
        fraseInvertida = fraseInvertida+fraseOriginal[i];
    }

    if(fraseInvertida==fraseOriginal){
        
        console.log("True")
    }else{
        console.log("False");
    }
}

validaPalindromo("Anita lava la tina");

/**10 - rograma que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo" */

function eliminaEspacios(textoCortar){

    textoCortar = textoCortar.replace(/ /g, "");

    console.log(`El exto sin espacios es: ${textoCortar}`);

}

eliminaEspacios("Hola Mundo");

/** 11 - Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas. Ejemplo: "Yoni Escobar". Resultado: "YE".*/


function extraePrimeraLetra(textoExtrae){
    let separador = " ";
    let arrayCadena = textoExtrae.split(separador);
    let iniciales="";

    for(let i=0;i<arrayCadena.length;i++){
        
        iniciales = iniciales+arrayCadena[i].substring(0,1)
    }

    console.log(iniciales.toUpperCase());

}

extraePrimeraLetra("guatemala tu nombre inmortal");

/**12 - Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo" = 2 palabras. */

function extraeCantPalabras(contarTextoc){
    let separador = " ";
    let arrayContar = contarTextoc.split(separador);
    let contPalabras = 0;
    
    console.log(`La cantidad de palabras es: ${arrayContar.length}`);

}

extraeCantPalabras("Hola Mundo")

/** 13 - Programa que devuelva el texto con la primera letra de cada palabra en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo". */

function primreaPalabraMayusc(miOracion){
   
        
    const OracionFinal = miOracion.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());

    console.log(OracionFinal);
    
}

primreaPalabraMayusc("Hola Mundo");

/** 14 - Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH".  */

function invertirFrase(textoAInvertir){

    let textAlReves="";

    for( i=textoAInvertir.length-1;i>=0;i--){
        
        textAlReves = textAlReves+textoAInvertir[i];
    }

    console.log(textAlReves);
}

invertirFrase("Hola mundo");

/** 15 - Programa que pase un arreglo de números y devuelva la suma de todos los números. Ejemplo: suma(10, 20, 30, 40, 50) = "La suma de todos los números es 150" */

function sumarUnArray(arrayParameter){

    resultSuma = 0;

    for(let i=0; i<arrayParameter.length; i++){

        resultSuma = resultSuma+arrayParameter[i];

    }

    console.log(`La suma del array es: ${resultSuma}`)
}

let unArray = [10,20,30,40,50];
sumarUnArray(unArray);

/** 16 -Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejemplo: edades(10, 20, 30, 40, 50) = "La edad mayor es 50 y la edad menor es 10". */

function edadMayorMenor(edades){

    let aux;

    for(let i = 0; i < edades.length-1; i++){
        for(let j = 0; j < edades.length - i -1; j++){
            if(edades[j + 1] < edades[j]) {
                aux = edades[j+1];
                edades[j+1]=edades[j];
                edades[j]=aux;
            }
        }
    }

    console.log(`La edad mayor es: ${edades[edades.length-1]} y la edad menor es: ${edades[0]}`);
}

let numerosArray=[12,45,89,56];

edadMayorMenor(numerosArray);

/** 17 - programa de escala de notas de 0 a 10. Ejemplo: 0-5 = "Pésimo", 6-7 = "Regular", 8-9 = "Bueno", 10 = "Excelente". */

function rangoNotas(notaAlumno){

    if(notaAlumno>=0 && notaAlumno<=5){

        console.log("Pesimo");

    }else if(notaAlumno>5 && notaAlumno <=7){

        console.log("Regular");

    }else if(notaAlumno>7 && notaAlumno <=9){

        console.log("Bueno");

    }else{

        console.log("Excelente");
    }
}

rangoNotas(10)

/** 18 - programa que devuelva el número de cifras de un número entero. Ejemplo: 1234 = 4 cifras */

function contadorCifras(contarCifras){

    let contador = 0;
    
    while(contarCifras!=0){

        contarCifras=Math.trunc(contarCifras/10);

        contador++;
    }

    console.log(`El numero ingresado tiene: ${contador} cifras`);

}

contadorCifras(45551);

/** programa que muestre los numeros primos de 1 a 1000. */

function numerosPrimos(){

    let c = 1000;
    let j = 2;
    for (; j < c; j++) {

  if (primo(j)) {
    console.log(j);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}


}

numerosPrimos()

/** 20 - Programa que realice el juego de piedra, papel o tijera. Ejemplo: "Piedra" > "Tijera", "Tijera" > "Papel", "Papel" > "Piedra".*/

function juegoPiedraPapel(opcion1, opcion2){

    if(opcion1=="papel" && opcion2=="piedra" || opcion1=="piedra" && opcion2=="papel" ){

        console.log("Gana Papel");

    }else if(opcion1=="tijera" && opcion2=="papel" || opcion1=="papel" && opcion2=="tijera"){

        console.log("Gana Tijera");

    }else if(opcion1 =="piedra" && opcion2 =="tijera" || opcion1 =="tijera" && opcion2 =="piedra"){

        console.log("Gana Piedra");

    }else if(opcion1 =="piedra" && opcion2 =="piedra" || opcion1 =="papel" && opcion2 =="papel" || opcion1 =="tijera" && opcion2 =="tijera" ){

        console.log("Empate");
    }   
    
    else{
        console.log("Opcion no válida");
    }
}

juegoPiedraPapel("piedra","piedra");

/** 21 - Programa con temporizador que muestre un mensaje cada cierto tiempo. Ejemplo: "Hola Mundo" cada 3 segundos. */

function mensajeTemporizador(){

    let temporaizador;

    temporaizador = setInterval(mandarMensaje(), 3000);
    
    function mandarMensaje(){
        console.log("Hola Mundo");
    }
}

mensajeTemporizador();