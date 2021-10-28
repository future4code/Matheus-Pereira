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


console.log("Bem vindo ao jogo de Black Jack")
if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"

   const cartaUsu1 = comprarCarta(); // Sorteia uma carta. 
   const cartaUsu2 = comprarCarta();
   const cartaPC1 =comprarCarta();
   const cartaPC2 =comprarCarta();
   const pontUsu = Number(cartaUsu1.valor + cartaUsu2.valor)
   const pontPC = Number(cartaPC1.valor + cartaPC2.valor)
   console.log("Usuário - cartas:" + cartaUsu1.texto +" " + cartaUsu2.texto + " - pontuação: " + pontUsu)
   console.log("PC - cartas:" + cartaPC1.texto +" " + cartaPC2.texto + "- pontuação: " + pontPC)
   if(pontUsu == pontPC){
      console.log("Empate!")
   }else if(pontUsu>pontPC){
      console.log("Usuário Ganhou!")
   }else{
      console.log("PC Ganhou!")
   }
  
} else {
	// o que fazer se o usuário clicar "cancelar"
   console.log("O jogo acabou")
}
