import React from 'react'
import styled from 'styled-components'

const Pergunta = styled.h2`
	
`

const Resposta = styled.select`

`
function mapearOpcoes (opcao) {
     
    return (
        <option value = {opcao}> {opcao}</option>
    );
  }

export function PerguntaOpcoes(props) {
	return <div>
        <Pergunta> {props.pergunta}</Pergunta>
        <Resposta> {props.opcoes.map(mapearOpcoes)} </Resposta>
    </div>
}