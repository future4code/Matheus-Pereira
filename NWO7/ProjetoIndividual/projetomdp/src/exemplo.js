import './App.css';
import React from "react";
import axios from "axios";

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const header = {
  headers: {
    Authorization : "matheus-dias-banu" 
  },}


export default class App extends React.Component {
  state = {
    nome: "",
    email: "",
    pag: true,
    list: [],
  }

  criarCadastro = () => {
    const body = {
      "name": this.state.nome,
      "email": this.state.email
    }
    const request = axios.post(url, body, header)
    
    request.then((response) => {
      alert("Usuário Criado")
    }).catch((error) => {
      alert("Algo deu errado! Tente novamente mais tarde!")
    })
  };

  trocarPagina = () => {
    this.setState({ pag: !this.state.pag});
   };

   deletarUsuario = () => {
     const deletar = axios.delete(url+this.state.list.id,header)
     deletar.then((res) => {
      alert("Usuário Criado")
    }).catch((error) => {
      alert("Algo deu errado! Tente novamente mais tarde!")
    })
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  
  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  render () {
    if(this.state.list){
       axios
         .get(url, header)
         .then((res) => {
           this.setState({ list: res.data});
         })
         .catch((err) => alert("Algo deu errado! :( ")) // é o que rola se der errado
        }
    const lista = this.state.list.map((list) => {
      return <li key={list.id}>{list.name} <button type="submit" onClick = {this.deletarUsuario}>Deletar</button></li>;
    });
    let pagina;
      if(this.state.pag){
          pagina = <div>
                <h2>Criar usuário</h2>
                <input 
                     placeholder="Nome" 
                     value={this.state.nome}
                     onChange={this.onChangeNome}
                />
                <input
                    placeholder="E-mail" 
                    value={this.state.email}
                    onChange={this.onChangeEmail}/>
                <button type="submit" onClick = {this.criarCadastro}>Criar</button>
                </div>
      }else{
        pagina = <div>
                    <div><h2>Lista de Usuários</h2></div>
                    <div>{lista}</div>
                  </div>
      }

  return (
    <div className="App">
        <h1>Labenusers</h1>
        <button type="submit" onClick = {this.trocarPagina}>Trocar de página</button>
        {pagina}
    </div>
  );
  }
}
