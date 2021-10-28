import React from "react";
import Post from "../Post/Post";

class Postagem extends React.Component {
    state = {
        valorInputNomeUsuario : "",
        valorInputFotoUsuario : "",
        valorInputFotoPost : "", 
    
   postagens: [
        {
          nomeUsuario: "Paulinha",
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/200/150'
        },

        {
            nomeUsuario: "MDP",
            fotoUsuario: 'https://picsum.photos/50/70',
            fotoPost: 'https://picsum.photos/200/100'
        },

        {
            nomeUsuario: "Zé",
            fotoUsuario: 'https://picsum.photos/50/80',
            fotoPost: 'https://picsum.photos/200/200'
        },

      ]
    };

    onChangeNomeUsuario = (event) => {
        this.setState({ valorInputNomeUsuario : event.target.value });
      };
    
      onChangeFotoUsuario = (event) => {
        this.setState({ valorInputFotoUsuario : event.target.value });
      };
    
      onChangeFotoPost = (event) => {
        this.setState({ valorInputFotoPost : event.target.value });
      };
    
    adicionaPost = () => {
        const novoPost = {
            nomeUsuario : this.state.valorInputNomeUsuario,
            fotoUsuario : this.state.valorInputFotoUsuario,
            fotoPost : this.state.valorInputFotoPost  
        //  return ( <div><Post nomeUsuario={this.state.valorInputnomeUsuario}
        //      fotoUsuario={this.state.valorInputFotoUsuario}
        //      fotoPost={this.state.valorInputFotoPost}/> </div>);
        }
        const arrayNovoPost = [...this.state.postagens, novoPost];
        this.setState({postagens : arrayNovoPost})
    };


    render() {
      // Da mesma forma que nos exemplos anteriores, pegamos o array de
      // pessoas do estado e mapeamos ele para um componente
      let listaPostagens = this.state.postagens.map((postagens) => {
     
        return (
            <Post nomeUsuario={postagens.nomeUsuario}
            fotoUsuario={postagens.fotoUsuario}
            fotoPost={postagens.fotoPost}
            />
        );
      });

      return (
          <><div>{listaPostagens}</div>
          <div>
              <input
                  placeholder={"nomeUsuario"}
                  value={this.state.valorInputNomeUsuario}
                  onChange={this.onChangeNomeUsuario} />
              <input
                  placeholder={"fotoUsuario"}
                  value={this.state.valorInputFotoUsuario}
                  onChange={this.onChangeFotoUsuario} />
              <input
                  placeholder={"fotoPost"}
                  value={this.state.valorInputFotoPost}
                  onChange={this.onChangeFotoPost} />
              <button onClick={this.adicionaPost}>Adicionar</button>
          </div></>

          
      );
    }
  }
  export default Postagem;
