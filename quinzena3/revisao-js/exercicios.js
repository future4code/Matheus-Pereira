// EXERCÍCIO 01
function inverteArray(array) {
let index = array.length;
let arrayinvertido = [];
  for (i=0; i<array.length; i++){
    index=index-1
    arrayinvertido.push(array[index])
  }
return arrayinvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let arrayElevadoADois = [];
  let array2 = retornaNumerosPares(array)
    for (i=0; i<array2.length; i++){
      arrayElevadoADois.push(array2[i]*array2[i])
      
    }
  return arrayElevadoADois

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
const div2 = (numero, indice, array) => {
  if(numero%2 == 0){
    return true
  }
  return false
}
return array.filter(div2)

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = array[0]
  for (i=0; i<array.length; i++){
    if(array[i]>maior){
      maior = array[i]
    }
  }
  return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  array = []
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
  array.push(booleano1 && booleano2 && !booleano4)
  array.push((booleano1 && booleano2) || !booleano3)
  array.push((booleano2 || booleano3) && (booleano4 || booleano1))
  array.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
  array.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
  return array
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  pares = []
  contador = 0
  n1=0
  while (contador != n){
    if (n1%2==0){
        contador = contador + 1
        pares.push(n1)
    }
    n1 = n1+1
  }
  return pares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a==b&&a==c){
    return "Equilátero"
  }
  if(a==b||a==b||b==c){
    return "Isósceles"
  }
  return "Escaleno"
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maior
  let menor
  if(num1>=num2){
    maior = num1
    menor = num2
  }else{
    menor = num1
    maior = num2
  }

  let divisivel = maior%menor==0
  let dif = maior-menor
  return {
    maiorNumero: maior,
    maiorDivisivelPorMenor: divisivel,
     diferenca: dif
    }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

arrayOrdenado = ordenaArray(array)
return [arrayOrdenado[arrayOrdenado.length-2], arrayOrdenado[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {

let arrayOrdenado = []
const menor = retornaMenorNumero(array);
const maior = retornaMaiorNumero(array)
let numeroMomento = maior
let ultimoNumero = menor
arrayOrdenado.push(menor)
while(ultimoNumero < maior){
 
  for (let i=0; i<array.length;i++){
    if(array[i]<numeroMomento && array[i]>ultimoNumero){
      numeroMomento = array[i]
    }
  }
 
  arrayOrdenado.push(numeroMomento)
  ultimoNumero = numeroMomento
  numeroMomento = maior
}
return arrayOrdenado
}

function retornaMenorNumero(array) {
  let menor = array[0]
  for (i=0; i<array.length; i++){
    if(array[i]<menor){
      menor = array[i]
    }
  }
  return menor
}

// EXERCÍCIO 12
function filmeFavorito() {
return {"nome":"O Diabo Veste Prada","ano":2006,"diretor":"David Frankel","atores":["Meryl Streep","Anne Hathaway","Emily Blunt","Stanley Tucci"]}


}

// EXERCÍCIO 13
function imprimeChamada() {
  filme = filmeFavorito()
  return "Venha assistir ao filme " + filme.nome + ", de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " 
  + filme.atores[0] + ", " + filme.atores[1] + ", " + filme.atores[2] + ", " + filme.atores[3] + "."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
return { 
largura : lado1,
altura : lado2,
perimetro : 2*(lado1 + lado2),
area : (lado1*lado2)

}
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

pessoa.nome = "ANÔNIMO"
return pessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
const apenasMaiores = (objeto, indice, array) => {
  if(objeto.idade >= 18){
    return true
  }
  return false
}

return arrayDePessoas.filter(apenasMaiores)

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const apenasMenores = (objeto, indice, array) => {
    if(objeto.idade < 18){
      return true
    }
    return false
  }
  
  return arrayDePessoas.filter(apenasMenores)
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
let array2 = []
  for (let i of array){
    array2.push(i*2)
  }
return array2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
let array2 = []
  for (let i of array){
    array2.push((i*2).toString())
  }
return array2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
arrayString = []
for (let i=0; i<array.length; i++){
  if(array[i] % 2 == 0){
    arrayString.push((array[i]).toString() + " é par")
  }else{
    arrayString.push((array[i]).toString() + " é ímpar")
  }
}
return arrayString
}

// EXERCÍCIO 18A

function retornaPessoasAutorizadas(pessoas) {
  
const autorizacao = (objeto, indice, array) => {
  if(objeto.altura >=1.5 && objeto.idade > 14 && objeto.idade < 60){
    return true
  }
  return false
}
return pessoas.filter(autorizacao)
}

// EXERCÍCIO 18B


function retornaPessoasNaoAutorizadas(pessoas) {
  
const noautorizacao = (objeto, indice, array) => {
  if(objeto.altura >=1.5 && objeto.idade > 14 && objeto.idade < 60){
    return false
  }
  return true
}
  
 return pessoas.filter (noautorizacao)
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  return consultasNome.sort(function (a, b) {
	
    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
   
  });

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  for (let i = 0;i < consultasData.length;i++) {
    for (let j = 0;j < consultasData.length - i - 1;j++) {

      const arrayData1 = consultasData[j].dataDaConsulta.split('/')
      const dia1 = Number(arrayData1[0])
      const mes1 = Number(arrayData1[1])
      const ano1 = Number(arrayData1[2])

      const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/')
      const dia2 = Number(arrayData2[0])
      const mes2 = Number(arrayData2[1])
      const ano2 = Number(arrayData2[2])

      const data1 = new Date(ano1, mes1 - 1, dia1).getTime()
      const data2 = new Date(ano2, mes2 - 1, dia2).getTime()

      if (data1 > data2) {
        const temp = consultasData[j]
        consultasData[j] = consultasData[j + 1]
        consultasData[j + 1] = temp
      }
    }
  }
  return consultasData
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  const calcula = (client, indice, array) => {
    let soma = 0
    for(i=0; i<client.compras.length;i++){
      soma = soma + client.compras[i]
    }
    client.saldoTotal = client.saldoTotal - soma
    return client
  }

return contas.map(calcula)
}

