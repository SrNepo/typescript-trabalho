import { Item } from "./Item";

export class Usuario {
    // propriedades privadas
    private _id:number;
    private _nome:string;
    private _email:string;
    private _telefone:string;
    private _itensEmprestados:Item[];

    // construtor
    constructor(id:number, nome:string, email:string, telefone:string
    ) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._itensEmprestados = []
    }

    // getters e setters

    get id(): number {
        return this._id;
    }
    
    get nome(): string {
        return this._nome;
    }

    get email(): string {
        return this._email;
    }
    
    get telefone(): string {
        return this._telefone;
    }

    get itensEmprestados(): Item[] {
        return this._itensEmprestados;
    }

    set nome(nome: string) {
        this._nome = nome;
    }
    
    set email(email: string) {
        if (!this.validarEmail(email)) {
            throw new Error("Email inválido");
        }
        this._email = email;
    }
    
    set telefone(telefone: string) {
        this._telefone = telefone;
    }
    
    private validarEmail(email: string): boolean {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }

    // Métodos

    emprestarItem(item:Item): boolean {
        if (!this._itensEmprestados.includes(item)) { // verifica se o item não tá no array
            this._itensEmprestados.push(item); // coloca o item no array de itens emprestado
            return true;
        } else {
            return false;
        }
    }

    devolverItem(item:Item): boolean {
        if (this._itensEmprestados.includes(item)) { // verifica se o item tá no array
            this._itensEmprestados = this._itensEmprestados.filter(
                item => item['id'] !== this._id
            ); // tira o item no array de itens emprestado
            return true; 
        } else {
            return false;
        }
    }
}