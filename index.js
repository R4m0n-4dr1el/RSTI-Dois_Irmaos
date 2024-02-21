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
*/

var funcao = function pessoa(nome) {
    console.log("Olá ", nome);
}
funcao("Lucas")
funcao("Ramon")
funcao("Pedro")


