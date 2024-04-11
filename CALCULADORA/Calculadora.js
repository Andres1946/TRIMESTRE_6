class Calculadora {
    constructor(operator1Element, operator2Element) {
        this.operator1Element = operator1Element;  //variable elemento html donde vamos a pintar
        this.operator2Element = operator2Element;
        this.clear();
    }

    clear() {                        //estamos limpiando los operadores en la pantalla
        this.operator1 = 0;         // variable del operando, con los que vamos a operar
        this.operator2 = 0;
        this.operation = '';
        this.updateUser();
    }

    updateUser() {  //Actualizar la interfaz de usuario//
        this.operator1Element.innerHTML = this.operator1 + this.operation;
        this.operator2Element.innerHTML = this.operator2;
    }


    appendNumber(number) {// verificar que solo sea un punto el ingresado
        if (number === "." && this.operator2.includes('.')) return; //comprobar el punto: que solo se pueda ingresar un punto &&=y ademas
        this.operator2 = this.operator2 === 0 //comprobamos que el numero ingresado es diferente de cero
            ? number
            : this.operator2.toString() + number;

        this.updateUser();
    }
    delete() { //funcion de borrar el ultimo numero
        if (this.operator2 === 0) return; //comprueba si el operador 2 es igual a cero
        this.operator2 = +this.operator2.toString().slice(0, -1);//borrar la posicion(0, -1)slice: borrar la posicion. el + vuelve a convertir el dato en numero

        this.updateUser();
    }
    operations(operation){ //funcion para operaciones
        if(this.operation){
            this.calc();//calculo de datos
        }
        this.operation = operation; //igualamos al numero del boton que se dda click
        this.operator1 = +this.operator2 === 0 ? this.operator1 : this.operator2; //igualamos el operador uno con el dos, esto es para subir el numero uno en la posicion dos de la calculadora
        this.operator2 = 0; //el numero dos lo igualamos a cero para el ingreso del nuevo numero.
        this.updateUser();
    }
    calc(){
        switch(this.operation){//para poder distinguir un operador de otro
            case "+":
                this.operator1 = +this.operator1 + +this.operator2;
            break;
            case "-":
                this.operator1 = +this.operator1 - +this.operator2;
            break;
            case "*":
                this.operator1 = +this.operator1 * +this.operator2;
            break;
            case "/":
                this.operator1 = +this.operator1 / +this.operator2;
            break;
        }
    this.operation = "";
    this.operator2 = 0;
    this.updateUser();
    }
}

const operator1Element = document.querySelector(".operator1")
const operator2Element = document.querySelector(".operator2")
const clearButton = document.querySelector(".clear")
const numberButtons = document.querySelectorAll(".number")
const deleteButton = document.querySelector(".delete")
const operationButtons = document.querySelectorAll(".operation")
const equalButtons = document.querySelector(".equal")

const calculadora = new Calculadora(operator1Element, operator2Element);

clearButton.addEventListener("click", () => { //ejecuta la funcion de calculadora.clear.
    calculadora.clear();
});

numberButtons.forEach(button => { //lo usamos para recorrer todos los numeros
    button.addEventListener('click', () => {
        calculadora.appendNumber(button.innerHTML);
    });
});

deleteButton.addEventListener('click', () => {
    calculadora.delete();
});

operationButtons.forEach(button => { //lo usamos para recorrer todos los operadores
    button.addEventListener("click", () => {
        calculadora.operations(button.innerHTML);
    });
});
equalButtons.addEventListener('click', () => {
    calculadora.calc();
});
