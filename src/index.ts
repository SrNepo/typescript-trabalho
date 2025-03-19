
import { Livro } from "./Livro";
import { Revista } from "./Revista";
import { Usuario } from "./Usuario";
import { Biblioteca } from "./Biblioteca";
import { LivroDigital } from "./LivroDigital";

// Crie instâncias de pelo menos 2 livros, 1 revista e 1 livro digital
const livro1 = new Livro(1, "Os sete maridos de Evelyn Hugo", 2017, "Taylor Jenkins Reid", "Editora Dora", 360);
const livro2 = new Livro(2, "Harry Potter e as relíquias da morte", 2005, "J.K. Rowling", "Editora Letty", 512);
const revista1 = new Revista(1, "OnTheJuju", 2000, 6, "Semanal");
const livroDigital1 = new LivroDigital(1, "Orgulho e Preconceito", 1918, "Jane Austen", "Martin Clarete", 240, "ePub", 4.56, "link.download.com/livrogitial/1");

// Crie 2 usuários
const user1 = new Usuario(1, "Zacarias", "Zaca@email.com", "99887-7665");
const user2 = new Usuario(2, "Didi", "didi@email.com", "88776-6554");

// Realize operações de empréstimo e devolução
console.log(user1.emprestarItem(livro1)); // true
console.log(user2.emprestarItem(revista1)); // false
console.log(user2.devolverItem(livro2)); // true
console.log(user2.devolverItem(revista1)); // true

// Demonstre o polimorfismo usando o método de busca da biblioteca
const biblioteca = new Biblioteca();
console.log(biblioteca.adicionarItem(livro1)); // true
console.log(biblioteca.adicionarItem(livro2)); // true
console.log(biblioteca.adicionarItem(livroDigital1)); // true
console.log(biblioteca.adicionarItem(revista1)); // true

// Com livro
let resultados = biblioteca.buscarItens("Harry Potter e as relíquias da morte");
resultados.forEach(item => console.log(item.exibirDetalhes()));

// Com Revista
resultados = biblioteca.buscarItens("OnTheJuju");
resultados.forEach(item => console.log(item.exibirDetalhes()));

// Com Livro Digital
resultados = biblioteca.buscarItens("Orgulho e Preconceito");
resultados.forEach(item => console.log(item.exibirDetalhes()));