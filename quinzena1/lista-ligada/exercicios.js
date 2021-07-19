// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura do retangulo')
  const largura = prompt ('Digite a largura do retangulo')
  console.log(Number(altura)*Number(largura))
  // escreva seu código aqui
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt('Digite o ano atual')
  const anoNasc = prompt ('Digite o ano do nascimento')
  console.log(Number(anoAtual)-Number(anoNasc))
  // escreva seu código aqui
}

// Exercício 3
function calculaIMC() {
  const peso = prompt('Digite o seu peso em kg')
  const altura = prompt ('Digite sua altura')
  console.log(Number(peso)/(Number(altura)*Number(altura)))
  // escreva seu código aqui
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite o seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite o seu email') 
  console.log("Meu nome é " + nome + ", tenho " + idade +" anos, e o meu email é " + email +".")
  // escreva seu código aqui
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite a primeira cor')
  const cor2 = prompt('Digite a segurnda cor')
  const cor3 = prompt('Digite a terceira cor') 
  const cores = [cor1, cor2, cor3]
  console.log(cores)
  // escreva seu código aqui
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const word = prompt('Digite qualquer coisa')
  console.log(word.toUpperCase())
  // escreva seu código aqui
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = prompt('Digite o Custo do espetáculo')
  const precoIngresso = prompt('Digite o preço do ingresso')
  console.log(Number(custoEspetaculo)/Number(precoIngresso))
  // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const word1 = prompt('Digite qualquer coisa')
  const word2 = prompt('Digite qualquer coisa')
  if (word1.length == word2.length)
    console.log(true)
  else
  console.log(false)
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let pala1 = prompt('Digite qualquer coisa')
  let pala2 = prompt('Digite qualquer coisa')
  pala1 = pala1.toUpperCase()
  pala2 = pala2.toUpperCase()
  if (pala1 == pala2)
    console.log(true)
  else
  console.log(false)

  // escreva seu código aqui
}

/* Exercício 10 

Escreva um código que **pede ao usuário** o **ano atual**, seu **ano de nascimento**, 
e o **ano em que sua carteira de identidade foi emitida** (nessa ordem). 
A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada 
ou não. A carteira precisa ser renovada segundo os seguintes critérios:

*/
function checaRenovacaoRG() {
  const anoHoje = Number(prompt('Digite o ano atual'))
  const anoNascimento = Number(prompt('Digite o ano de seu nascimento'))
  const anoRg = Number(prompt('Digite o ano do seu RG'))
  idade = anoHoje-anoNascimento

  if ( idade <= 20 ) {
    /* - Para pessoas com menos de 20 anos, ou exatamente 20 anos, 
  deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada). */
    if (anoHoje-anoRg >=5){
      console.log(true)
    }else{
      console.log(false)
    }
    
    } else if ( idade > 20 && idade <=50 ) {
        /*- 
    Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos
     (se for exatamente 10 anos, deve ser renovada).
    */
      if (anoHoje-anoRg>=10){
        console.log(true)
      }else{
        console.log(false)
      }
    
    } 
    else {
      /*- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos*/
      if (anoHoje-anoRg>=15){
        console.log(true)
      }else{
        console.log(false)
      }
         
    }
 
}

// Exercício 11
function checaAnoBissexto() {

  const ano = prompt('Digite um ano')
  if(ano%4==0){
    if(ano%100==0){
      if(ano%400==0){
        console.log(true)
      }else {
        console.log(false)
      }
    }else{
        console.log(true)
      }
  } else {
    console.log(false)
  }
  
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const dezoito = prompt('Você tem mais de 18 anos?')
  const ensinoMedio = prompt('Você possui ensino médio completo?')
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  if (dezoito=="sim"&&ensinoMedio=="sim"&&disponibilidade=="sim")
    console.log(true)
  else
    console.log(false)
  
  // escreva seu código aqui
}