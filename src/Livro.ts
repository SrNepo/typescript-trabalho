import type { Pesquisavel } from "./interfaces.ts";
import { Item } from "./Item.ts";


export class Livro extends Item implements Pesquisavel {
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

    // Métodos

    exibirDetalhes(): string{
        return `--- Livro: ${this.titulo} ---
    - ID: ${this.id}
    - Ano: ${this.ano}
    - Autor(a): ${this.autor}
    - Editora: ${this.editora}
    - Numero de páginas: ${this.numero_pags}`
    }

    pesquisar(termo:string): boolean {
        return (
            this.titulo.includes(termo) ||
            this.autor.includes(termo) ||
            this.editora.includes(termo)
        );
    }
}