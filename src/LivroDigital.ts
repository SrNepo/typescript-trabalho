import { Livro } from "./Livro";

export class LivroDigital extends Livro {
    // Propriedades adicionais
    formato:string;
    tamanhoMB:number;
    linkDownload:string;

    // Construtor
    constructor(id:number, titulo:string, ano:number,
        autor:string, editora:string, numero_pags:number,   
        formato:string, tamanhoMB:number, linkDownload:string) {
        super(id, titulo, ano, autor, editora, numero_pags);
        this.formato = formato;
        this.tamanhoMB = tamanhoMB;
        this.linkDownload = linkDownload;
    }

    // Métodos
    exibirDetalhes(): string{
        return `--- Livro: ${this.titulo} ---
    - ID: ${this.id}
    - Ano: ${this.ano}
    - Autor(a): ${this.autor}
    - Editora: ${this.editora}
    - Formato: ${this.formato}
    - Tamanho(MB): ${this.tamanhoMB}
    - Numero de páginas: ${this.numero_pags}
    - Link para download: ${this.linkDownload}\n`
    }
}