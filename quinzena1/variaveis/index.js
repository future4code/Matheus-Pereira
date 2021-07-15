/*
Exercícios de interpretação

1. Analise o programa abaixo e diga o que será impresso no console.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Será exibido no console:
10
10 5

2. Analise o programa abaixo e diga o que será impresso no console.

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)
Será exibido no console:
20 20 10

3. Analise o programa abaixo,
entenda o que ele faz e sugira melhores nomes para as variáveis. 
Lembre-se que devemos escolher nomes significativos, 
usar o padrão camelCase. Alem disso,
os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

Sugestão de nomes para as variáveis.

p = horasTrabalhadasDia
t = salarioDia

*/

//Exercício 1
let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
// Apareceu undefined porque ainda não foi atribuído nenhum valor pras variavéis logo o Java Script não sabe que tipo de variável essas são.
nome = prompt("Qual o seu nome?")
idade =  prompt("Qual o seu nome?")
console.log(typeof nome)
console.log(typeof idade)
// Apareceu que as duas variáveis são Strings pois o prompt sempre retorna texto
console.log("Olá", nome, "você tem", idade, "anos")

//Exercício 2

let pergunta1 = prompt("Você é canhoto?")
let pergunta2 = prompt("Você têm carro?")
let pergunta3 = prompt("Você é corinthiano?")
console.log("Você é canhoto?", pergunta1)
console.log("Você têm carro?", pergunta2)
console.log("Você é corinthiano?", pergunta3)

//Exercício 3

let a = 10
let b = 25
let c = a
a = b 
b = c 
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) 

/*esafio
Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:

1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y.
*/

let n1 = Number (prompt("Digite um número"))
let n2 = Number (prompt("Digite outro número"))

console.log("O primeiro número somado ao segundo número resulta em:", n1+n2)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", n1*n2)