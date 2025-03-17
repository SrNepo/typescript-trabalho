import { Item } from "./Item.ts";

class Livro extends Item {
    // propriedades adicionais
    autor:string;
    editora:string;
    numero_pags:number;

    // construtor
    constructor(id:number, titulo:string, ano:number, 
        autor:string, editora:string, numero_pags:number) {
        super(id, titulo, ano);
        this.autor = autor;
        this.editora = editora;
        this.numero_pags = numero_pags;
    }

    exibirDetalhes(): string{
        return `--- Livro: ${this.titulo} ---\n
        ID: ${this.id}\n
        Ano: ${this.ano}
        Autor(a): ${this.autor}\n
        Editora: ${this.editora}\n
        Numero de páginas: ${this.numero_pags}`
    }
}