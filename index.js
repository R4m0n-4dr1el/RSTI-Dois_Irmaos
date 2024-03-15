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
/*
Exercício 1:

Calculadora Simples; Crie uma função calculadora que recebe dois
números e uma operação (soma, subtração, multiplicação ou divisão)
como argumentos e retorna o resultado da operação. */

/* function calculadora(num1, num2){
    if(operacao === '1'){
    co/* nsole.log("A soma é: " ,soma)
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
/*
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
 
 Fazer panqueca

Passo 1 - Logo de manha acorde, abrindo os olhos da cara, retirando a coberta que esta por cima de seu corpo, com voce deitado na cama.

Passo 2 - Saia da posição de deitado e fique sentado na cama, depois fique de pé com os pés no chão, servindo como sustento para o resto do corpo.

Passo 3 - Usando os pés para andar, va até o banheiro dando um passo de cada vez, chegando lá escove os dentes utilizando a escova de dentes, onde irá colocar a pasta de dentes nela, e esfregar nos dentes de sua boca.

Passo 4 - Terminando, enxague a boca com agua da torneira, lave o rosto com água, em seguida ande até a cozinha com os pés. Onde procurara os ingredientes para fazer a panqueca. 

Passo 5 - Olhara com os olhos os armarios e estantes, procurando ovo, banana, farinha de aveia e um prato.

Passo 6 - Com isso em mãos dará inicio ao processo de preparo, onde a banana descascara, tirando sua casca e jogando no lixo, em seguida colocara ela no prato e esmagará com um garfo, que pegara da gaveta até virar uma pasta mole.

Passo 7 - Após, quebrara a casca do ovo e colocara apenas a gema e a clara, sem colocar a casca, no prato, em seguida pegara a farinha de aveia e enchera uma colher com 30g colocando 3x no prato, com tudo junto mistura-ra até virar uma pasta mais densa.

Passo 8 - Com essa pasta, colocara em uma frigideira que estara no fogão com o fogo acesso. Com a pasta no fogo ficara de olho para não deixar queimar, deixando por apenas 1 minuto e meio até virar a pasta com uma espatula, do outro lado.

Passo 9 - Deixara por mais 1 minuto e meio e em seguida desligara o fogo do fogão, pegara a frigideira e 
*/


/*Em JavaScript, os laços são estruturas que permitem executar um bloco de código várias vezes. Aqui está um exemplo simples de cada tipo de laço em JavaScript, com explicações:

JavaScript*/
/*
// Laço for: Executa um bloco de código um número específico de vezes
for (let i = 0; i < 5; i++) {
  console.log('Número ' + i);
}

// Laço while: Executa um bloco de código enquanto uma condição especificada é verdadeira
let j = 0;
while (j < 5) {
  console.log('Contagem: ' + j);
  j++;
}

// Laço do...while: Executa um bloco de código uma vez, e depois continua executando enquanto a condição especificada é verdadeira
let k = 0;
do {
  console.log('Valor: ' + k);
  k++;
} while (k < 5);

// Laço for...in: Itera sobre as propriedades enumeráveis de um objeto
const objeto = {a: 1, b: 2, c: 3};
for (const prop in objeto) {
  console.log('Propriedade ' + prop + ' tem o valor ' + objeto[prop]);
}

// Laço for...of: Itera sobre os valores de um objeto iterável, como arrays ou strings
const array = ['a', 'b', 'c'];
for (const valor of array) {
  console.log('Valor: ' + valor);
}
*/

/*
for (let i = 0; i < 10; i++) {
    console.log(i)

    
}
/*
for: Utilizado para repetir um bloco de código um número definido de vezes. A estrutura consiste em três partes: inicialização (let i = 0), condição (i < 5), e incremento (i++).
while: Executa o bloco de código enquanto a condição for verdadeira. A condição é avaliada antes da execução do bloco de código.
do…while: Semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez, pois a condição é avaliada após a execução do bloco.
for…in: Itera sobre as propriedades de um objeto. É útil para percorrer chaves em um objeto literal.
for…of: Itera sobre os valores de um objeto iterável, como arrays ou strings. É útil para percorrer os valores em uma coleção.
*/

/*
// Jogo de adivinhação de números em JavaScript

// Gera um número aleatório entre 1 e 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Número de tentativas que o jogador tem
var tentativas = 10;

// Array para armazenar as tentativas do jogador
var tentativasJogador = [];

// Função para jogar o jogo
function jogar() {
    // Enquanto ainda houver tentativas
    while(tentativas > 0) {
        // Pede ao jogador para adivinhar o número
        var palpite = prompt("Adivinhe o número (entre 1 e 100):");

        // Verifica se o palpite já foi feito
        if(tentativasJogador.includes(palpite)) {
            alert("Você já tentou esse número. Tente um número diferente.");
            continue;
        }

        // Adiciona o palpite às tentativas do jogador
        tentativasJogador.push(palpite);

        // Verifica se o palpite está correto
        if(palpite == numeroAleatorio) {
            alert("Parabéns! Você adivinhou o número!");
            break;
        } else if(palpite < numeroAleatorio) {
            alert("Muito baixo! Tente novamente.");
        } else {
            alert("Muito alto! Tente novamente.");
        }

        // Diminui o número de tentativas
        tentativas--;
        
        // Se o jogador ficar sem tentativas
        if(tentativas == 0) {
            alert("Você ficou sem tentativas. O número era " + numeroAleatorio + ".");
        }
    }
}

// Inicia o jogo
jogar();
*/
/*
 let i = 0
 while(i < 10) {
    console.log(i)

    i++
 }
*/
/*
let estomago = 0;

while (estomago < 100) {
    console.log("Quero comer mais coxinhas");
    estomago = estomago + 10;
}
*/

/*
// Arte ASCII em JavaScript

// Array de arte ASCII
var arte
function  Arte1()  {`
    |   
  .'|'. 
 /.'|\ \
 | /|'.|
  \ |\/ 
   \|/  
      
   `};

arte = prompt("Digite um número")
// Função para gerar arte ASCII
function gerarArteASCII(numero) {
    // Verifica se o número está dentro do intervalo
    if (numero < 1 || numero > 10) {
        console.log('Número inválido. Por favor, insira um número de 1 a 10.');
        return;
    }

    // Exibe a arte ASCII correspondente
    console.log(Arte1[numero - 1]);
}

// Teste a função com um número de 1 a 20
gerarArteASCII(arte);
*/


/*
// Programa para somar números em JavaScript

var numeros = [];

function solicitarNumeros() {
    while(true) {
        var numero = Number(prompt("Insira um número (ou '0' para parar):"));

        if(numero == 0) {
            break;
        }
        numeros.push(numero);
    }
    var soma = numeros.reduce(function(a, b) {
        return a + b;
    }, 0);

    console.log("A soma dos números é: " + soma);
}

solicitarNumeros();
*/

/*
function somarNumeros() {
    let soma = 0;
    let numero = 1;
    while (numero !== 0) {
        numero = Number(prompt("Digite um número (ou 0 para sair"));
        soma += numero;
    }
    console.log("A soma dos números digitados é: ",soma);
}
somarNumeros();
*/

/*
const numeros = [14,67,89,23]

for(let i = 0; i < 5; i++){
const elemento = numeros[i]
console.log("elemento")
}
*/
/*
// Lista de 10 números
var numeros = [12, 3, 7, 1, 9, 23, 8, 13, 5, 6];
// Função para encontrar o maior número em uma lista
function encontrarMaiorNumero(lista) {
    return Math.max.apply(null, lista);
}
// Encontra e imprime o maior número
var maiorNumero = encontrarMaiorNumero(numeros);
console.log("O maior número é: " + maiorNumero);
*/

/*
function valorMaior(array){
    var numeroMaior = array[0];
    for (let i = 0; i < array.lenght; i++) {
    const element = array[i];
    if(element > numeroMaior){
        numeroMaior = element
    }
    }
    return numeroMaior
}
var meuArray = [10,20,30,50,67,45,43]
console.log(valorMaior(meuArray));

*/

/*
 function somarNumeros() {
    var numeros = []
    var numero
    numero = 1;
    while (numero !== 0) {
        numero = (Number(prompt("Digite um numero(ou 0 para sair)")));
        numeros.push(numero);
    }
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log(`A soma dos números digitados é: ${soma}`);
  }
  
  // Chamar a função
  somarNumeros();
  */

/*
function somarNumerosComArray() {
  const numeros = []; 
  let numero = 1;
    while (numero !== 0) {
    numero = parseInt(prompt("Digite um número (ou 0 para sair): "));
    numeros.push(numero);
  }
  const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  console.log(`A soma dos números digitados é: ${soma}`);
}
 
// Chamar a função
somarNumerosComArray();

*/
// UID = (z0o4r) Andrey, Gabriel, Maxuel, João, Ramon

function gerarId() {
    return Math.floor((50 + Math.random()) * 0x10000000).toString(16).substring(1);
}

function gerarIds(quantidade) {
    var ids = [];
    for (var i = 0; i < quantidade; i++) {
        ids.push(gerarId(10));
    }
    return ids;
}

// Exemplo de uso:
console.log(gerarIds(20)); 
