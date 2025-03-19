import type { Item } from "./Item";


export class Biblioteca {
    // Propiedades
    itens:Item[];

    // Construtor
    constructor(){
        this.itens = []
    }

    // Métodos

    adicionarItem(item:Item): boolean {
        if (!(this.itens.includes(item))) {
            this.itens.push(item);
            return true;
        } else {
            return false;
        }
    }
    
    buscarItens(termo:string): Item[] {
        return this.itens.filter(item => item.titulo === termo);
    }

}