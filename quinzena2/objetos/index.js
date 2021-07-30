/*Exercício de interpretação de código
Exercício 1
a) O que vai ser impresso no console?
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"


Exercício 2
a) O que vai ser impresso no console?
nome: "Juca", idade: 3, raca: "SRD"
nome: "Juba", idade: 3, raca: "SRD"
nome: "Jubo", idade: 3, raca: "SRD"
b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Copia o objeto

Exercício 3
a) O que vai ser impresso no console?
false
undefined
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
A propriedade batender no objeto é false, e não existe propriefade altura

*/

/*Exercícios de escrita de código

Exercício 1
a) Crie um objeto. 
Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: */
const pessoa1 = {
    nome: "Matheus", 
    apelidos: ["Math", "fumaça", "doidão"]
 }
 
function ex1(pessoa){
    console.log("Eu sou " + pessoa.nome + ", mas pode me chamar de: " + pessoa.apelidos[0] + 
    ", " + pessoa.apelidos[1] + " ou " + pessoa.apelidos[2])
}
ex1(pessoa1)

/*
b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como argumento o novo objeto
*/
const pessoa2 = {...pessoa1, apelidos: ["Matheuzinho", "Dias", "Ma"]}
ex1(pessoa2)

/*Exercício 2
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
*/
const gente1 = {
    nome: "Rayssa Leal",
    idade: 13,
    profissao: "Atleta"
}

const gente2 = {
    nome: "Laura",
    idade: 103,
    profissao: "Aposentada"
}
/*
b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    O valor de nome
    O numero de caracteres do valor nome
    O valor de idade
    O valor de profissão
    O numero de caracteres do valor profissão
 */

function ex2(pessoa){
    arrayPessoa = [
        pessoa.nome, pessoa.nome.length, 
        pessoa.idade, pessoa.idade.toString().length, 
        pessoa.profissao, pessoa.profissao,length]
    return arrayPessoa
}

console.log(ex2(gente1))
console.log(ex2(gente2))

/*Exercício 3 
Resolva os passos a seguir: 
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
*/
let carrinho = []
/*
b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
nome (string) e disponibilidade (boolean - devem começar como true)
*/
let mamao = {
    nome: "Mamão",
    disponibilidade : true
}

let maca = {
    nome: "Maçã",
    disponibilidade : true
}

let limao = {
    nome: "Limão",
    disponibilidade : true
}
/*
c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
Invoque essa função passando os três objetos criados. 
*/
function adicionarFrutanoCarrinho(fruta){
    carrinho.push(fruta)
}
adicionarFrutanoCarrinho(mamao)
adicionarFrutanoCarrinho(maca)
adicionarFrutanoCarrinho(limao)

/*
d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.
*/
console.log(carrinho)
/*DESAFIOS
1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e 
depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, 
imprima também o tipo dele para garantir que é um objeto.
*/

function desafio1(){
    nomeUsuario = prompt("Qual o seu nome?")
    idadeUsuario = Number(prompt("Qual sua idade)"))
    profissaoUsuario = prompt("Qual a sua profissão?")
    const objeto = {
        nome : nomeUsuario,
        idade : idadeUsuario,
        profissão : profissaoUsuario
    }
    console.log(objeto)
    console.log(typeof(objeto))
}

desafio1()

/*
2. Crie uma função que receba dois objetos que representam filmes. 
Eles devem ter as propriedades: ano de lançamento e nome. 
A função deve retornar uma mensagem no seguinte modelo:

    O primeiro filme foi lançado antes do segundo? false
    O primeiro filme foi lançado no mesmo ano do segundo? true
*/
const starWars = {
    nome: "Star Wars",
    anoLancamento: 1980,
}

const benHur = {
    nome: "Ben Hur",
    anoLancamento: 1980,
}

function comparaFilmes(filme1, filme2){
    console.log("O primeiro filme foi lançado antes do segundo?", filme1.anoLancamento<filme2.anoLancamento)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.anoLancamento==filme2.anoLancamento)
}
comparaFilmes(starWars, benHur)

/*
3. Crie uma função a mais pro exercício 3 de escrita de código. 
Essa função vai auxiliar o controle de estoque do sacolão: 
ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade 
com o valor invertido. : */

function controleEstoque(fruta){
    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
}

controleEstoque(maca)
console.log(maca)