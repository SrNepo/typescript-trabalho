import { Item } from "./Item";

class Usuario {
    // propriedades privadas
    private _id:number;
    private nome:string;
    private email:string;
    private telefone:string;
    private itensEmprestados:Item[] = [];
    private simbolo:symbol = Symbol("@email.com");
    // depois voltamos aqui (parte 2: getters e setters)

    // construtor
    constructor(id:number, nome:string, email:string, telefone:string
    ) {
        this._id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    // depois voltamos aqui (parte2: metodos)
    emprestarItem(item:Item): boolean {
        if (!this.itensEmprestados.includes(item)) { // verifica se o item não tá no array
            this.itensEmprestados.push(item); // coloca o item no array de itens emprestado
            return true;
        } else {
            return false;
        }
    }

    devolverItem(item:Item): boolean {
        if (this.itensEmprestados.includes(item)) { // verifica se o item tá no array
            return true; // coloca o item no array de itens emprestado
        } else {
            return false;
        }
    }
}