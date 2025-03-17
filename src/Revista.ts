import { Item } from "./Item";

class Revista extends Item {
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

    exibirDetalhes(): string {
        return `--- Revista: ${this.titulo} ---\n
        ID: ${this.id}\n
        Ano: ${this.ano}
        Edição: ${this.edicao}\n
        Periodicidade: ${this.periodicidade}\n`
    }
}