//Exercícios de interpretação de código
/*
1 - a) O que vai ser impresso no console?
Um array igual ao array usuários, mas de uma maneira melhor "mapeada"

2 - a) O que vai ser impresso no console?
Um array apenas com a propriedade nome dos itens

3 - a) O que vai ser impresso no console?
Um array com todos os objetos que não tiverem a propriedade apelido = chijo
*/

// Exercícios de escrita de código

/*1- Dado o seguinte array de cachorrinhos]
 que são clientes de um pet shop, 
 realize as operações pedidas
 nos itens abaixo utilizando as funções de array map e filter:
*/
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
/*a) Crie um novo array que contenha apenas o nome dos doguinhos */
const retornaNome = (objeto, indice, array) => {
    return objeto.nome
}
const nomePets = pets.map(retornaNome)
//console.log(nomePets)
/*b) Crie um novo array apenas com os cachorros salsicha */
const racaSalsicha = (cachorro, indice, array) => {
    if (cachorro.raca === "Salsicha"){
        return true
    }else {
        return false
    }
}
const apenasCachorrosSal = pets.filter(racaSalsicha)
//console.log (apenasCachorrosSal)

/*c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"*/

const racaPoodle = (cachorro, indice, array) => {
    if (cachorro.raca === "Poodle"){
        return true
    }else {
        return false
    }
}

const apenasCachorrosPoodle = pets.filter(racaPoodle)
const retornaMensagem = (objeto, indice, array) => {
    return "Você ganhou um cupom de desconto de 10% para tosar o/a " + objeto.nome
}

const mensagensPoodle = apenasCachorrosPoodle.map(retornaMensagem)
//console.log(mensagensPoodle)

/*2) Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
utilizando as funções de array map e filter: */

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 /*a) Crie um novo array que contenha apenas o nome de cada item */
 const nomeProdutos = produtos.map(retornaNome)
//console.log(nomeProdutos)
 /*b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
 aplicando 5% de desconto em todos eles */
 const desconto = (produto, indice, array) => {
     produto.preco = produto.preco * 0.95
     return produto
 }

 const produtosComDesconto = produtos.map(desconto)
 //console.log(produtosComDesconto)

 /*c) Crie um novo array que contenha apenas os objetos da categoria Bebidas*/
 const apenasBebida = (produto, indice, array) => {
     if(produto.categoria === "Bebidas"){
         return true
     } else {
         return false
     }
 }
 const bebidas = produtos.filter(apenasBebida)
//console.log(bebidas)
 /*d)d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"*/
 const apenasYpe = (produto, indice, array) => {
    if(produto.nome.includes("Ypê")){
        return true
    } else {
        return false
    }
}

const produtosYpe = produtos.filter(apenasYpe)
//console.log(produtosYpe)
 /* e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
 Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê" */
const mensagemYpe = (produto, indice, array) => {
    return "Compre " + produto.nome +" por " +produto.preco +". "
}

const fraseYpe = produtosYpe.map(mensagemYpe)
console.log(fraseYpe)