import React from 'react'
import styled from 'styled-components'

const Pergunta = styled.h2`
	
`

const Resposta = styled.input`

`

export function PerguntaAberta(props) {
	return <div>
        <Pergunta> {props.pergunta}</Pergunta>
        <Resposta/>
    </div>
}