```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let soma = 0
  for(let i=0; i<arrayDeNumeros.length; i++){
    console.log(arrayDeNumeros[i])
    if(arrayDeNumeros[i]==numeroEscolhido){
      soma = soma + 1
    }
  }
  if(soma==0){
    return "Número não encontrado"
  }
  return "O número "+ numeroEscolhido + " aparece " + soma +"x"// Escreva seu código aqui
}
```