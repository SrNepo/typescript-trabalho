
export abstract class Item {
    // propriedades
    id: number;
    titulo: string;
    ano:number;

    // construtor
    constructor(id:number, titulo:string, ano:number) {
        this.id = id;
        this.titulo = titulo;
        this.ano = ano
    }

    // método abstrato
    abstract exibirDetalhes(): {

    }

}