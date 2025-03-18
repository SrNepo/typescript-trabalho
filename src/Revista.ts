import type { Pesquisavel } from "./interfaces";
import { Item } from "./Item";

export class Revista extends Item implements Pesquisavel{
    // propriedades adicionais
    edicao:number;
    periodicidade:string;

    // construtor
    constructor(id:number, titulo:string, ano:number,
        edicao:number, periodicidade:string
    ) {
        super(id, titulo, ano);
        this.edicao = edicao;
        this.periodicidade = periodicidade;
    }

    // Métodos
    
    exibirDetalhes(): string {
        return `--- Revista: ${this.titulo} ---
    - ID: ${this.id}
    - Ano: ${this.ano}
    - Edição: ${this.edicao}
    - Periodicidade: ${this.periodicidade}`
    }

    pesquisar(termo: string): boolean {
        return (
            this.titulo.includes(termo) ||
            this.periodicidade.includes(termo)
        );
    }
}