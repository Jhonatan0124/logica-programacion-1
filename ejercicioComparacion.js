let mayor, medio, menor,num1,num2,num3;

alert('Bienvenido al juego de "Mayor, Medio y Menor!"');
alert('Por favor ingresa tres números');

function ordenarNumeros() {
    num1 = parseFloat(document.getElementById('numero1').value);
    num2 = parseFloat(document.getElementById('numero2').value);
    num3 = parseFloat(document.getElementById('numero3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Por favor, ingrese los tres números completos.');
        return;
    }

    alert(`Ha ingresado correctamente los 3 numeros!`)

    console.log(`Los numeros ingresados son: ${num1}, ${num2}, ${num3}`);
    alert(`Los numeros ingresados son: ${num1}, ${num2}, ${num3}`);
    
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            medio = num2;
            menor = num3;
        } else {
            medio = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            medio = num1;
            menor = num3;
        } else {
            medio = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            medio = num1;
            menor = num2;
        } else {
            medio = num2;
            menor = num1;
        }
    }

    console.log(`El resultado del juego, que asi: Número Mayor: ${mayor}, Número Medio: ${medio} y Número Menor: ${menor}`);
    alert(`El resultado del juego, que asi: Número Mayor: ${mayor}, Número Medio: ${medio} y Número Menor: ${menor}`);

    alert('Gracias por jugar, vuelva pronto');
}
