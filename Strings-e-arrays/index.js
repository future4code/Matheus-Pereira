/*console.log("Hello world!!!")
let nome = prompt("Qual o seu nome?")
console.log(nome)
*/

//Exercicio 1
//1
const soma = 3+4
console.log(soma)
//2
const multi = (3*4)/5
console.log(multi)
//3
const subs = (5-4)*-1
console.log(subs)
//4
const resto = 234%5
console.log(resto)
// Fim do exercício


//Exercicio 2

let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite um número"))
//1
console.log("O primeiro número é igual ao segundo?", num1 ===num2)
//2
console.log("O primeiro número é diferente do segundo?", num1 !==num2)
//3
console.log("O primeiro número é maior que o segundo?", num1 >= num2)
//4
console.log("O primeiro número é menor que o segundo?", num1 <= num2)
// Fim do exercício

//Exercicio 3
const a = true
const b = false
const c = true
//1
console.log(a&&b)
//2
console.log(b&&c)
//3
console.log(a&&c)
//4
console.log(a&&b&&c)
// Fim do exercício

//Exercicio 4
//1
console.log(a||b)
//2
console.log(b||c)
//3
console.log(a||c)
//4
console.log(a||b||c)
// Fim do exercício

//Exercicio 5
let nome = prompt("Digite seu nome")
let idade = Number(prompt("Sua idade"))

console.log("Nome:", nome)
console.log("Idade:", idade)
console.log("É maior de idade?:", idade>=18)
console.log("Idade em 2050:", idade+30)