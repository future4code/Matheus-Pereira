import React from 'react'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconesavewhite from '../../img/save-white.svg'
import iconesaveblack from '../../img/save-black.svg'
import iconeShare from '../../img/share.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoShare} from '../SecaoShare/SecaoShare'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    share:false,
    numeroComentarios: 0,
    save: false
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido,
    })
    if(this.state.curtido){
      this.setState({numeroCurtidas : this.state.numeroCurtidas - 1})
      
    }else{
      this.setState({numeroCurtidas : this.state.numeroCurtidas + 1})
    } 
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando //Aqui
    })
  }

  onClickSave = () => {
    this.setState({
      save: !this.state.save
    })
  }

  onClickShare = () => {
   this.setState({
      share: !this.state.share
    })
 
    
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false, //aqui
      numeroComentarios: this.state.numeroComentarios + 1 //aqui
    })
  }

  render() {
    let iconeCurtida
    let iconeSave

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.save){
      iconeSave = iconesaveblack
    } else {
      iconeSave = iconesavewhite
    }

    let componenteComentario
    let componenteShare

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.share) {
      componenteShare = <SecaoShare/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas} //aqui
        />

        <IconeComContador
          icone={iconeShare}
          onClickIcone={this.onClickShare}
        />

        <IconeComContador
          icone={iconeSave}
          onClickIcone={this.onClickSave}
          //valorContador={this.state.}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      {componenteShare}
    </PostContainer>
  }
}

export default Post