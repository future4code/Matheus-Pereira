/*Exercício de interpretação de código
Exercício 1
a) O que vai ser impresso no console?
10
50
b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
Nada


Exercício 2
a. Explique o que essa função faz e qual é sua utilidade

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura
     true
     ii.  CENOURA é bom pra vista
     true
     iii. Cenouras crescem na terra
     true
*/

/*Exercícios de escrita de código

Exercício 1
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
*/

function escreverFrase(){
   console.log("Eu sou Matheus, tenho 26 anos, moro em São Paulo e sou estudante.")
}
escreverFrase()

/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/

const nome = prompt("Digite o seu nome")
const idade = Number(prompt("Digite sua idade"))
const cidade = prompt("Digite sua cidade")
const profissao = prompt("Digite a sua profissão")

function frase(nome1, idade1, cidade1, profissao1){
return ("Eu sou " + nome1 + ", tenho " + idade1 + " anos, moro em "+ cidade1 + " e sou " + profissao1)
}

console.log(frase(nome, idade, cidade, profissao))

/*
2. Escreva as funções explicadas abaixo:

    a) Escreva uma função que receba 2 números como parâmetros, 
    e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
    Invoque a função e imprima no console o resultado.
*/
function soma(num1, num2){
return num1 + num2}

console.log(soma(10, 5))
/*

    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número 
    é **maior ou igual** ao segundo.
*/
function maioriounem(num1, num2){
    return num1 >= num2}
    
    console.log(maioriounem(10, 11))
/*
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/
function ehPar(num){
    return num%2 == 0
}
    console.log(ehPar(10))
/*
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
    juntamente com uma versão dela em letras maiúsculas.
*/
function mensagem (frase){
return frase.length + frase.toUpperCase()
}
const fraseRemora = prompt("Digite uma frase aleatória")
console.log(mensagem(fraseRemora))

/*Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações: */

function soma1(num1, num2){
    return num1 + num2}

 function sub(num1, num2){
    return num1 - num2}

function multi(num1, num2){
    return num1 * num2}

function div(num1, num2){
    return num1 / num2}

const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))
console.log(soma1(numero1,numero2))
console.log(sub(numero1,numero2))
console.log(multi(numero1,numero2))
console.log(div(numero1,numero2))

//Desafios
/* 
a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
*/
const func1 = (par1) => {
    console.log(par1)
}
const teste = func1("teste")
/*
b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.**
Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

*/
const func2 = (val1, val2) => {
    func1(val1 + val2)
}
func2 (10, 20)

/*Faça uma função que execute o teorema de Pitágoras, 
recebendo dois catetos e calculando o valor da hipotenusa. 
Retorne este valor, invoque a função e imprima o resultado no console.
 hip = √(a² + b²)  */

function pitagoras (cat1, cat2){
    h = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2)) 
    console.log(h)
}
pitagoras(2,2)