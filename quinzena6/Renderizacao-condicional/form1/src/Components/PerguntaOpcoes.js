import React from 'react'
import styled from 'styled-components'

const Pergunta = styled.h2`
	
`

const Resposta = styled.select`

`
function mapearOpcoes (opcoes) {
     
    return (
        <option value= {opcoes.value}> {opcoes.value}</option>
    );
  }

export function PerguntaOpcoes(props) {
    console.log(props.opcoes)
	return <div>
        <Pergunta> {props.pergunta}</Pergunta>
        <Resposta> {props.opcoes.map(mapearOpcoes)} </Resposta>
    </div>
}