/* Exercicio 1 Leia nome

var nome = prompt("Escreva qual é o seu nome?")
var cor = prompt("Qual a sua cor favorita?")
var frase = console.log("A cor favorita do " + nome + " é " + cor + ".")

//Exercicio Aumenta letra
var frase = prompt("Digite uma frase");
var frase2 = frase.toUpperCase();
console.log(frase2);

//Exercicio aumentaLetra
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

/* const pessoa = {
   nome: 'Paula',
   idade: 18,
   genero: 'eletrônica',
}

console.log("O nome da pessoa é ", pessoa.nome, ", ela tem ", pessoa.idade, "anos e gosta muito de", pessoa.genero);

function exercicio4(objetoPessoa, arrayComidas, objetoMelhorAmigo){
   var novoObjeto = {...objetoPessoa, comidasPreferidas: arrayComidas, melhorAmigo: objetoMelhorAmigo};

   console.log('O nome da pessoa é' ,novoObjeto.nome , 'e suas comidas preferidas são:' ,novoObjeto.comidasPreferidas[0], novoObjeto.comidasPreferidas[1], novoObjeto.comidasPreferidas[2],  'Seu melhor amigo se chama' ,novoObjeto.melhorAmigo.nome, "e tem" ,novoObjeto.melhorAmigo.idade, "anos.");
}

exercicio4(pessoa, ["arroz", "feijao", "carne"], {nome: "joao", idade: 10}); 
*/

/* let condicao1 = true

if(condicao1){
    //Como o valor da condicao é true,
    //O código desse bloco é executado
    console.log('Entrei no IF 1!')
}
 
let condicao2 = false

if(condicao2){
    //Como o valor da condicao é false,
    //O código desse bloco é executado
    console.log('Entrei no IF 2!')
} */

/* function numeros(num1, num2){

    if(num1 === num2)
    console.log("verdadeiro")
    else(console.log("False"))
}

numeros(prompt("Digite um numero pro Num1") , prompt("Digite um numero pro Num2")); */

/* function exercicio(nome, idade) {
    if (idade >= 18) {
        return `${nome}, voce pode dirigir`;
    }
}

console.log(exercicio(prompt("Digite seu nome"), prompt("Digite sua idade"))); */

/* let condicao = false

if(condicao){
    console.log("Entrei no IF")
} else {
    //Como o valor da condicao é false,
    //O código desse bloco é executado
    console.log('Entrei no ELSE!')
} */

/* function numeros(num1, num2){

    if(num1 === num2){
    return "São iguais"
    }else{
    return "São diferentes"}
}

console.log(numeros(prompt("Digite um numero pro Num1") , prompt("Digite um numero pro Num2"))); */

/* let condicao1 = false
let condicao2 = true

if(condicao1){
    console.log('Entrei no IF 1!')
}else{
    //Como o valor da condicional é false
    //O código de ELSE será executado
    if(condicao2) {
    //Como o valor da condicao2 é true,
    //executaremos esse código
        console.log("Entrei no IF 2!")
    }
} */

/* function numeros(num1, num2){

    if(num1 > num2){
        return "Maior"
    
}else if(num1===num2){
        return "São iguais"

}else{
    return "É menor"}
}
console.log(numeros(prompt("Digite um numero pro Num1") , prompt("Digite um numero pro Num2"))); */

/* let paisDeOrigem
if (paisDeOrigem === 'Brasil'){
console.log('Brasileiro')
}else if (paisDeOrigem === 'EUA'){
    console.log('Norte Americano')
}else if (paisDeOrigem === 'Inglaeterra'){
    console.log('Inglês')
}else if (paisDeOrigem === 'França'){
    console.log('Françês')
}else if (paisDeOrigem === 'Itália'){
    console.log('Italiano')
}else if (paisDeOrigem === 'Canadá'){
    console.log('Canadense')  
} else {
    console.log("Nacionalidade não enconntrada")
}
 */
/* let paisDeOrigem
switch (paisDeOrigem) {
    case 'Brasil':
        console.log('Brasileiro')
        break
    case 'EUA':
            console.log('Norte Americano')
        break
    case 'Inglaterra':
            console.log('Inglês')
        break
    default:
        console.log('Nacionalidade não encontrada')
        break;
} */

/* var pokemon
var pokemon = prompt("Escolha 1 pra Bulbassauro, 2 pra Charmander e 3 pra Squirtle");

switch (pokemon) {
    case '1':
        console.log('Planta e veneno')
        break
    case '2':
        console.log('Fogo')
        break
    case '3':
        console.log('Água')
        break
    default:
        console.log('Pokemon não encontrado')
        break;
} */

/* let condicao1 = true
let condicao2 = false

if(condicao1 && condicao2){
//Entra aqui se ambas forem true
}

if(!condicao1){
//Entra aqui se condicao1 for false
} */

/* function faculdade(ensinoMedio, idade, cursandoFaculdade) {
    if (cursandoFaculdade === "sim" || cursandoFaculdade === "Sim") {
        cursandoFaculdade = true;
    } else { cursandoFaculdade = false }
    if (ensinoMedio === "sim" || ensinoMedio === "Sim") {
        ensinoMedio = true;
    } else { ensinoMedio = false }

    if ((idade >= 18) && (ensinoMedio) && !(cursandoFaculdade)) {
        console.log('Parabéns, voce foi aceito!!!')
    } else {
        console.log('Foi mal, não poderemos aceitar voçê na nossa faculdade')
    }
}
faculdade(prompt("Voçê conclui o Ensino Médio?"), prompt("Qual sua idade?"), prompt("Está cursando outra faculdade?")) */

/* Exercício 1:

Calculadora Simples; Crie uma função calculadora que recebe dois
números e uma operação (soma, subtração, multiplicação ou divisão)
como argumentos e retorna o resultado da operação. */

/* function calculadora(num1, num2){
    if(operacao === '1'){
    console.log("A soma é: " ,soma)
    }
    else if(operacao === '2'){
        console.log("A divisão é: ", divisao)
    }
    else if(operacao === '3'){
        console.log("A subtração é: ", subtracao)
    }else{
        console.log("A multiplicação é: ", multiplicacao) 
    }
}

num1 = Number(prompt("Digite um valor pra Num1"));
num2 = Number(prompt("Digite um valor pra Num2"));

var soma = (num1 + num2)
var divisao = (num1 / num2)
var subtracao = (num1 - num2)
var multiplicacao = (num1 * num2)
var operacao = prompt("Digite 1 pra somar, 2 pra dividir, 3 pra subtrair e 4 pra multiplicar");

calculadora(); */

/* Exercício 2:

Média de Notas; Crie uma função calcularMedia que recebe um
array de números (notas de um aluno) e retorna a média dessas notas. */

/* function calcularMedia(num1, num2) {
    media = (num1 + num2) / 2;

}
calcularMedia(Number(prompt('Nota 1:')), Number(prompt('Nota 2:')));
console.log("A média é: ", media);  */

function calculaArea(base, altura){
    return base * altura;
}

function calculaAreaTotal(valores = []) {
    var resultados = valores[0] + valores[1] + valores[2] + valores[3];
    return resultados;
}

function calcularValores(valores = []) {
    valores[0] = Number(valores[0]);
    valores[1] = Number(valores[1]);

    var areaCalculada = calculaArea(valores[0], valores[1])

    var areaTotal = calculaAreaTotal([areaCalculada, areaCalculada, areaCalculada, areaCalculada]);
    return areaTotal;
}

function pegaValores(){

    return calcularValores([prompt('Digite a base: '), prompt('Digite a altura')]);
}