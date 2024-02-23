/*Exercicio 1 Leia nome

var nome = prompt("Escreva qual é o seu nome?")
var cor = prompt("Qual a sua cor favorita?")
var frase = console.log("A cor favorita do " + nome + " é " + cor + ".")

Exercicio Aumenta letra
var frase = prompt("Digite uma frase");
var frase2 = frase.toUpperCase();
console.log(frase2);


var substituto = prompt("Digite uma frase boa");
var novaSubstituto = substituto.replaceAll("o", "i");
console.log(novaSubstituto);
console.log(novaSubstituto.length);

const listaDeCompras = ["Abacate", "Banana", "Tomate"]
const segundoItem = listaDeCompras[2]
console.log(segundoItem)


var raças = ["Dalmata", "Pastor-Alemão", "Labrador", "Husky", "Golden"];
var frase = prompt("Digite um número de 0 a 4");
console.log(raças[frase]);

console.log(raças[prompt("Digite de 0 a 4")])


var array = ["a", "b", "c", "d", "e", "f", "g", "h"];
//          [ 0,   1,   2,   3,   4,   5,   6,   7]
array.splice(3, 1)
console.log(array)


var array = [1, 2, 3, 4, 5, 6]
console.log(array.length)
array.push(7)
array.splice(3, 2);
console.log(array.length)


const altura = 2
const largura = 3
const area = altura * largura
console.log(area)


function calculoArea(altura, largura) {
    const area = altura * largura
    console.log(area)
}
calculoArea(2, 3)

function imprimirOlaMundo() {
    console.log("Ola mundo");
}
imprimirOlaMundo()

function pessoa(nome) {
    console.log("Olá ", nome);
}
pessoa("Lucas")
pessoa("Pedro")
pessoa("Ramon")


const a = 1

function imprimeVariavel() {
    const b = 2;
    console.log('variavel a', a);
    console.log('variavel b', b);
}

imprimeVariavel();

console.log('variavel a', a);
console.log('variavel b', b);


function calculoArea(altura, largura) {
    const area = altura * largura
    return area
}

const areaCalculada = calculoArea(2, 3)
console.log(calculoArea(2, 3))


function receba(numero1, numero2){
    const soma = numero1 + numero2
    return soma 
}

const somaCalculada = receba(3, 4)
console.log(receba(3, 4))


function recebaArray(arrayDeNumeros = []){
    return [(arrayDeNumeros.length)/2, (arrayDeNumeros[0])/2];   
}
console.log(recebaArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));


var funcao = function pessoa(nome) {
    console.log("Olá ", nome);
}
funcao("Lucas")
funcao("Ramon")
funcao("Pedro")

let pessoas = function(nomedapessoa){
    console.log(nomedapessoa);
}

pessoas(prompt("Qual seu nome?"));


const professor = {
    nome: 'vitor',
    idade: 27,
    email: 'vitor@email.com',
    tarefas: ['Dar aula', 'Responder dúvidas'],
    contarPiada: function(){
        console.log('É pa vê ou pa comê?')
    }
}
console.log(professor.idade);
console.log(professor["email"]);

console.log(professor.nome = 'Ramon');
console.log(professor.nome);


const filme = {
    nome: 'Jumanji',
    ano: 2018,
    direcao: 'Jake Kasdan',
    roteiro: 'Jeff Pinkner',
    elenco: ['Dwayne Johson', 'Kevin Hart', 'Jack Black', 'Karen Gillan'],
    assistiu: true
}

console.log(filme.nome);
console.log(filme.ano);
console.log(filme.direcao);
console.log(filme['roteiro']);
console.log(filme['elenco']);
console.log(filme.assistiu);


const pessoa = {
    nome: 'Paula',
    idade: 18,
    genero: 'eletrônica',
}

console.log("O nome da pessoa é ", pessoa.nome, ", ela tem ", pessoa.idade, "anos e gosta muito de", pessoa.genero);
*/
/* 
const donoDoPet = {
    nome: "Vitor Hugo",
    pet: {
        nomeDoPet: "Wanda",
        raca: "Vira-Lata",
        idade: 1
    }
}
console.log(donoDoPet.pet.nomeDoPet) */

/* const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}

console.log(curso.linguagens[0]) */

/* const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3}
]
console.log(professores[1].nome) */

/* const curso = {
    nome: "Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}
curso.nomeEstudante = 50

console.log(curso.nomeEstudante) */

/* const filme = {
    nome: 'Jumanji',
    ano: 2018,
    direcao: 'Jake Kasdan',
    roteiro: 'Jeff Pinkner',
    elenco: ['Dwayne Johson', 'Kevin Hart', 'Jack Black', 'Karen Gillan'],
    personagens: ['Dr.Bravestone', 'Moose Finbar', 'Prof.Sheldon', 'Ruby Rhoundhouse'],
    assistiu: true
}
console.log(filme.elenco[0],'=', filme.personagens[0])
console.log(filme.elenco[1],'=', filme.personagens[1])
console.log(filme.elenco[2],'=', filme.personagens[2])
console.log(filme.elenco[3],'=', filme.personagens[3])

//assim mudo um array
filme.elenco[0] = 'Xuxa'

console.log(filme.elenco[0],'=', filme.personagens[0])
console.log(filme.elenco[1],'=', filme.personagens[1])
console.log(filme.elenco[2],'=', filme.personagens[2])
console.log(filme.elenco[3],'=', filme.personagens[3])
 */

/* const usuario = {
    nome: 'prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'Sao Paulo'
}

console.log(usuario.nome)
console.log(usuario.idade)

const novoUsuario = {
    ...usuario,
    nome: 'Joao',
    idade: 28
}
console.log(novoUsuario.nome)
console.log(novoUsuario.idade) */

/* const listaDeNomes = ["Mika", "Paula", "Vitor"]
const copiaListaDeNomes = [...listaDeNomes]

console.log(copiaListaDeNomes) */

const pessoa = {
    nome: 'Paula',
    idade: 18,
    genero: 'eletrônica',
}

funtion = adicionais(pessoa{

}

console.log("O nome da pessoa é ", pessoa.nome, ", ela tem ", pessoa.idade, "anos e gosta muito de", pessoa.genero);

