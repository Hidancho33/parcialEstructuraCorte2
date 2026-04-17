class Pila {
    constructor() {
        this.items = [];
    }

    
    push(objeto) {
        this.items.push(objeto);
        console.log("Objeto agregado a la pila:", objeto);
    }

    // 
    pop() {
        if (this.items.length === 0) {
            return "La pila está vacía";
        }
        const eliminado = this.items.pop();
        console.log("Objeto eliminado de la pila:", eliminado);
        return eliminado;
    }
}


const miPila = new Pila();
miPila.push({ Nombre: "Orlando", Edad: 30 });
miPila.push({ Nombre: "Ivan", Edad: 22 });
miPila.push({ Nombre: "Felipe", Edad: 21});
miPila.pop();