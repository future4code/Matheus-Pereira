import React from 'react';
import {url, header} from '../App';
import axios from 'axios';
import { CriarUnit } from '../style';

class Criar extends React.Component{
    state = {
        nome: "",
        page: false,
        list: []
      }
    
      criarPlayList = () => {
        const body = {
          "name": this.state.nome,
        }
        const request = axios.post(url, body, header)
        
        request.then((response) => {
          alert("Playlist Criado")
        }).catch((error) => {
          alert("Algo deu errado! Tente novamente mais tarde!")
        })
      };
    
      onChangeNome = (event) => {
        this.setState({ nome: event.target.value });
      };
    
      render () {
      return (
            <CriarUnit>
                    <h3>Criar PlayList</h3>
                    <input 
                         placeholder="Nome da Playlist" 
                         value={this.state.nome}
                         onChange={this.onChangeNome}
                    />
                    <button type="submit" onClick = {this.criarPlayList}>Criar</button>
            </CriarUnit>
      );
      }    
    
}

export default Criar;