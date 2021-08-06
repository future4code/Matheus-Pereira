/*1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    Pega o valor da varíavel valor e a cada loop soma o valor de i na variável, 10

2. a) O que vai ser impresso no console?
Todos os números de Lista que forem maior que 18

b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? 
Se não, o que poderia ser usado para fazer isso?
Não. poderia ser usado no for a estrutura: for(let i = 0; i < lista.leght(); i++) aonde o valor de i seria o índice do elemento

3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
*
**
***
****
*/

//Exercícios de escrita de código
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
function ex1(){
let qtdPet = Number(prompt("Quantos Pets você tem?"))

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
if(qtdPet == 0){
    console.log("Que pena! Você pode adotar um pet!")
} else{
let nomes = []
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um,
//e guarde esses nomes em um array
    for (let i=0; i<qtdPet; i++){
     nomes.push(prompt("Qual o nome do " + (i+1) + "° animal?"))

}
//c) Por fim, imprima o array com os nomes dos bichinhos no console
console.log(nomes)
}

}

//ex1()
//Exercício 2
//Considere que você tenha acesso a um array  (chamado de 'array original') 
//que é composto somente de números. Baseando-se nisso, 
//crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//a) Escreva um programa que imprime cada um dos valores do array original.
function imprimeArray(array){
    for(let i of array){
        console.log(i)
    }
}
//imprimeArray(arrayOriginal)
//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
function arrayVezesDez(array){
    for(let i of array){
        console.log(i*10)
    }
}
//arrayVezesDez(arrayOriginal)
//c) Escreva um programa que crie um novo array contendo, 
//somente, os números pares do array original e imprima esse novo array
function soPar(array){
    let pares = []
    for(let i of array){
        if(i%2 == 0){
            pares.push(i)
        }
    }
    console.log(pares)
}
//soPar(arrayOriginal)
//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: 
//"O elemento do índex i é: numero". Depois, imprima este novo array.

function criarStrings(array){
    let arrayStrings = []
    for(let i=0; i<array.length; i++){
        arrayStrings.push("O elemento do índex " +i +" é: " + array[i])
    }
    console.log(arrayStrings)
}
//criarStrings(arrayOriginal)
//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
function maiorMenor(array){
    let menor = array[0]
    let maior = array [0]
    for(let i of array){
        if (i>maior){
            maior = i
        }
        if (i<menor){
            menor = i
        }
    }
    console.log("O maior número é: " + maior + " e o menor é: " + menor)

}
//maiorMenor(arrayOriginal)