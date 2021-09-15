import React, {Component} from 'react'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import styled from 'styled-components'

const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`
const Mensagem = styled.input`
	width: 100%;
	margin-right: 5px;
`

export class SecaoShare extends Component {
	state = {
		mensagem : "",
	}
	onClickShareFacebook = () => {
		console.log("Post Compartilhado no Facebook com a mensagem: "+ this.state.mensagem)
	}

	onClickShareInstagram = () => {
		console.log("Post Compartilhado no Instagram com a mensagem: "+ this.state.mensagem)
	}

	onClickShareTwitter = () => {
		console.log("Post Compartilhado no Twitternpm run build com a mensagem: "+ this.state.mensagem)
	}

	onChangeMensagem = (event) => {
		this.setState({ mensagem: event.target.value });
	  };
	


	render() {
		return <ShareContainer>
		<Mensagem
			placeholder={'Mensagem'}
			value={this.state.mensagem}
			onChange={this.onChangeMensagem}
		/>
		<button onClick={this.onClickShareFacebook}><img src="https://images.vexels.com/media/users/3/137253/isolated/lists/90dd9f12fdd1eefb8c8976903944c026-logotipo-do-icone-do-facebook.png" height = '30px' /></button>
		<button onClick={this.onClickShareInstagram}><img src="https://images.vexels.com/media/users/3/137198/isolated/preview/07f0d7b69ef071571e4ada2f4d6a053a-icone-do-instagram-colorido.png" height = '30px' /></button>
		<button onClick={this.onClickShareTwitter}><img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-logotipo-do-icone-do-twitter.png" height = '30px' /></button>	
		</ShareContainer>
	}
}
