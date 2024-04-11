class Calculadora {
    constructor(operator1Element, operator2Element) {
        this.operator1Element = operator1Element;
        this.operator2Element = operator2Element;
        this.clear();
    }

    clear() {
        this.operator1 = 0;
        this.operator2 = 0;
        this.operation = '';
        this.updateUser();
    }

    updateUser() {
        this.operator1Element.textContent = this.operator1 + this.operation;
        this.operator2Element.textContent = this.operator2;
    }

    appendNumber(number) {
        if (number === "." && this.operator2.includes('.')) return;
        this.operator2 = this.operator2 === 0 ? number : this.operator2.toString() + number;
        this.updateUser();
    }

    delete() {
        if (this.operator2 === 0) return;
        this.operator2 = +this.operator2.toString().slice(0, -1);
        this.updateUser();
    }

    operations(operation) {
        if (this.operation) {
            this.calc();
        }
        this.operation = operation;
        this.operator1 = +this.operator2 === 0 ? this.operator1 : this.operator2;
        this.operator2 = 0;
        this.updateUser();
    }

    calc() {
        switch (this.operation) {
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

document.addEventListener("DOMContentLoaded", () => {
    const operator1Element = document.querySelector(".operator1")
    const operator2Element = document.querySelector(".operator2")
    const clearButton = document.querySelector(".clear")
    const numberButtons = document.querySelectorAll(".number")
    const deleteButton = document.querySelector(".delete")
    const operationButtons = document.querySelectorAll(".operation")
    const equalButton = document.querySelector(".equal")

    const calculadora = new Calculadora(operator1Element, operator2Element);

    clearButton.addEventListener("click", () => {
        calculadora.clear();
    });

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculadora.appendNumber(button.textContent);
        });
    });

    deleteButton.addEventListener('click', () => {
        calculadora.delete();
    });

    operationButtons.forEach(button => {
        button.addEventListener("click", () => {
            calculadora.operations(button.textContent);
        });
    });

    equalButton.addEventListener('click', () => {
        calculadora.calc();
    });
});