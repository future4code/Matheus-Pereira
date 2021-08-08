/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let cartaUsu = []
let cartaPC = []
function concatenarvalorcartas(c1){
   let mensagem  = "".toString()
   for(let i=0; i<c1.length; i++){

      mensagem = mensagem + " " + c1[i].texto
   }
   return mensagem
}
function calculapontos(c2){
   pontos = 0
   for(i=0;i<c2.length;i++){
      pontos = pontos + Number(c2[i].valor)
   }
   return pontos
}
console.log("Bem vindo ao jogo de Black Jack")
if(confirm("Quer iniciar uma nova rodada?")) {
// o que fazer se o usuário clicar "ok"
   
   cartaUsu.push(comprarCarta()); 
   cartaPC.push(comprarCarta());
   cartaUsu.push(comprarCarta());  
   cartaPC.push(comprarCarta());
   while((cartaUsu[0].texto.includes("A") && cartaUsu[1].texto.includes("A")) 
       || (cartaPC[0].texto.includes("A") && cartaPC[1].texto.includes("A")) ){
      console.log("Jogo deverá ser redistribuído!")
      cartaUsu[0] =comprarCarta(); 
      cartaPC[0] =comprarCarta();
      cartaUsu[1] = comprarCarta();  
      cartaPC[1] = comprarCarta()       
   }
   let cartas = concatenarvalorcartas(cartaUsu)
  // console.log(cartaUsu)

   while(confirm(
      "Suas cartas são " + cartas + "" 
      + " A carta revelada do computador é " + cartaPC[0].texto +
      "\n"+  // \n faz pular a linha
      "Deseja comprar mais uma carta?"
   ) && calculapontos(cartaUsu) <= 21)
   {
         cartaUsu.push(comprarCarta())
         cartas = concatenarvalorcartas(cartaUsu)
   }

   let pontUsua = calculapontos(cartaUsu)
   let pontPC = calculapontos(cartaPC)
   while(pontUsua<=21 && pontPC<=pontUsua && pontPC< 21){
      cartaPC.push(comprarCarta())
      pontPC = calculapontos(cartaPC)
   }
   console.log("Suas cartas são " + concatenarvalorcartas(cartaUsu) + " Sua pontuação é " +calculapontos(cartaUsu))
   console.log("As cartas do computador são "+ concatenarvalorcartas(cartaPC) + " Sua pontuação é " + calculapontos(cartaPC))
   if((pontUsua>21 || pontUsua<pontPC) && pontPC <= 21){
      console.log("Computador ganhou")
   }else if(pontUsua<=21 && (pontUsua > pontPC || pontPC > 21)){
      console.log("Usuário ganhou")
   }else{
      console.log("Empate")
   }    



} else {
       // o que fazer se o usuário clicar "cancelar"
       console.log("O jogo acabou")
    }