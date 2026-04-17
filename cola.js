class Cola {
    constructor() {
        this.items = [];
    }

    // Punto 6: Agregar datos numéricos y mostrar mensaje
    agregar(numero) {
        if (typeof numero !== 'number') return console.log("Error: Solo se permiten números");
        this.items.push(numero);
        console.log(`Se ha agregado el número ${numero} a la cola.`);
    }

    // Punto 6: Eliminar y mostrar mensaje 
    eliminar() {
        if (this.items.length === 0) {
            console.log("La cola ya está vacía.");
            return;
        }
        const eliminado = this.items.shift();
        console.log(`Se ha eliminado el número ${eliminado} de la cola.`);
        return eliminado;
    }
}


const miCola = new Cola();
miCola.agregar(10);
miCola.agregar(25);
miCola.eliminar();