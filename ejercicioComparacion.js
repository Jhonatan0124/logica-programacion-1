let num1 = 0;
let num2 = 0;
let num3 = 0;
let numeros = [];

alert('Bienvenido al juego de "Mayor, Medio y Menor!');
alert(`Por favor ingresa tres numeros`);

function ordenarNumeros() {    
    num1 = parseFloat(document.getElementById('numero1').value);
    num2 = parseFloat(document.getElementById('numero2').value);
    num3 = parseFloat(document.getElementById('numero3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Por favor, ingrese los tres números completos.');
        return; 
    }


    numeros = [num1, num2, num3];

    console.log(`Números ingresados: ${numeros}`)
    alert(`Usted ha ingresado satisfactoriamente los 3 números`);

    
    if(num1 >= num2 && num1 >= num3) {
        alert(`El Número mayor es: ${num1}`);
        console.log(`El Número mayor es: ${num1}`);
    }else if(num2 >= num1 && num2 >= num3) {
        alert(`El Número mayor es: ${num2}`);
        console.log(`El Número mayor es: ${num2}`);
    }else{
        alert(`El Número mayor es: ${num3}`);
        console.log(`El Número mayor es: ${num3}`);
    }

    if(num1 >= num2 && num1 <= num3) {
        alert(`El Número en Medio es: ${num1}`);
        console.log(`El Número en Medio es: ${num1}`);
    }else if(num2 >= 1 && num2 <= num3){
        alert(`El Número en Medio es: ${num2}`);
        console.log(`El Número en Medio es: ${num2}`);
    }else{
        alert(`El Número en Medio es: ${num3}`);
        console.log(`El Número en Medio es: ${num3}`);
    }

    if(num1 <= num2 && num1 <= num3){
        alert(`El Número menor es: ${num1}`);
        console.log(`El Número menor es: ${num1}`);
    }else if(num2 <= num1 && num2 <= num3){
        alert(`El Número menor es: ${num2}`);
        console.log(`El Número menor es: ${num2}`);
    }else{
        alert(`El Número menor es: ${num3}`);
        console.log(`El Número menor es: ${num3}`);
    }

    alert(`Gracias por Jugar, vuelva pronto`);
            
}








/*
let num1;
let num2;
let num3;

alert("Bienvenidos al juego numero mayor, ingresa 3 numeros diferentes por favor");


num1 = parseFloat(prompt("Ingresa el primer numero"));
num2 = parseFloat(prompt("Ingresa segundo numero"));
num3 = parseFloat(prompt("Ingresa el tercero numero"));

if (num1 == num2 && num1 == num3) {
    console.log("Los tres números son iguales. Por favor, ingresa 3 números diferentes.");
    }else {
        if(num1 > num2 && num1 > num3){
            console.log("El numero mayor es: " + num1);    
        }else if(num2 > num1 && num2 > num3){
            console.log("El numero mayor es: "+ num2);
        }else {
            console.log("El numero del medio es: "+ num1);
        }

        if(num1 < num2 && num1 >num3){
            if (num1 < num2 && num1 >num3) {
                console.log("El numero del medio es: "+ num1);
            }else if(num2 < num1 && num2 >num3){
                console.log("El numero del medio es: "+ num2);
            }else{
                console.log("El numero del medio es: "+ num3);
            }
        }

        if (num1 < num2 && num1 < num3) {
            if (num1 < num2 && num1 < num3) {
                console.log("El numero menor es: "+num1);
            }else if(num2 < num1 && num2 < num3){
                console.log("El numero menor es: "+num2);
            }else{
                console.log("El numero menor es: "+num3);
            }    
        }
        console.log("Sesion Terminda, Gracias por jugar!");
    }

*/



