/*Exercício de interpretação de código
Exercício 1

a) Explique o que o código faz. Qual o teste que ele realiza?
    Testa se um número é par
b) Para que tipos de números ele imprime no console "Passou no teste"? 
    Números pares
c) Para que tipos de números a mensagem é "Não passou no teste"?
    números ímpares

Exercício 2

O código abaixo foi feito por uma pessoa desenvolvedora,
contratada para automatizar algumas tarefas de um supermercado:
a) Para que serve o código acima?
    Recebe um nome de fruta e retorna um texto mostranso o valor.
b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
    O preço da fruta, Maçã é, R$ 2.25
c) Considere que um usuário queira comprar uma Pêra, 
qual seria a mensagem impressa no console se retirássemos 
o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
    O preço da fruta, Pêra é, R$ 5

Exercício 3

a) O que a primeira linha está fazendo?
    Recebe um valor digitado pelo usuário, este valor é convertido em Número e amarzenado na contante numero
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal?
    Este número passou no teste
E se fosse o número -10?
Nada
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Sim, a varíavel mensagem é declarada dentro do if e  não é reconhecida fora dele, logo o console.log irá falhar
*/

/*
Exercícios de escrita de código

1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir
(apenas maiores de idade).
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
*/
const idade = Number(prompt("Digite sua idade"))
if(idade >= 18 ){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}

/*
Exercícios de escrita de código

2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
Utilize o bloco if/else
*/

const turno = prompt("Digite o seu período de aula: M (matutino) ou V (Vespertino) ou N (Noturno). ")
if(turno.toUpperCase() === "M"){
    console.log("Bom Dia!")
}else if(turno.toUpperCase() === "V"){
    console.log("Boa Tarde!")
}else if(turno.toUpperCase() === "N"){ 
    console.log("Boa Noite!")
} else {
    console.log("Digite uma letra válida")
}

// 3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

switch(turno.toUpperCase()){
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break
    default :
        console.log("Digite uma letra válida")
}

/*
4 - Considere a situação: você vai ao cinema com um amigo ou amiga, 
porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
e outra pergunta sobre o preço do ingresso, 
então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

Desafio:
Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) 
e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", 
trocando [LANCHINHO] pelo que o usuário colocou no input.

*/

const genero = prompt("Qual o Gênero do filme?")
const precoIngresso = Number(prompt("Qual o Preço do Ingresso?"))

if (genero.toLowerCase() == "fantasia" && precoIngresso <= 15){
    lanchinho = prompt("Qual lanche você vai comprar?")
    console.log("Bom filme!"+" Aproveite o seu " + lanchinho)
}else {
    console.log("Escolha outro filme :(")
}

/*Desafio 2
Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol.
 Para esta compra, o usuário deve fornecer algumas informações:
 Nome completo;
Tipo de jogo: IN indica internacional; e DO indica doméstico;
Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
Categoria: pode ser as opções 1, 2, 3 ou 4;
Quantidade de ingressos

*/