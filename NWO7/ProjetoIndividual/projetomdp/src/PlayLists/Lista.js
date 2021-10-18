import React from 'react';
import {url, header, listaMusica} from '../App';
import axios from 'axios';
import {Icone, PlayListUnit, PlayListMusic} from '../style'

let lista = [];

class Lista extends React.Component {
    state = {
        list : [],
        musicas: []
    }

    deletarPlayList = (key) =>{
        axios.delete(url+"/"+key,header)
        .then((res) => {
            alert("Playlist apagada com sucesso");
          })
          .catch((err) => alert("Não foi possível excluir a playlist"))

    }

    visualizarPlayList = (key) =>{
        let local;
        axios
        .get(url+"/"+key+"/tracks", header)
        .then((res) => {
          this.setState({ musicas: res.data.result.tracks});
          listaMusica = this.state.musicas.map((list) => {
            return <PlayListMusic>
                        <p key={list.id}>{list.name}</p>
                        <p>{list.artist}</p>
                        <a href={list.url}>Audio</a>
                    </PlayListMusic>;
        })})
        .catch((err) => {
           listaMusica = <h1>Play List Vazia ou Inexistente</h1>
        });        
    }

    render() {
        lista = [];
          axios
            .get(url, header)
            .then((res) => {
              this.setState({ list: res.data.result.list});
            })
            .catch((err) => alert(err)) // é o que rola se der errado
        if(this.state.list){
            lista = this.state.list.map((list) => {
                return <PlayListUnit>
                            <Icone src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" alt="Visualizar músicas" onClick = {() => this.visualizarPlayList(list.id)}/>
                            <p key={list.id}>{list.name}</p>
                            <Icone src="https://cdn.icon-icons.com/icons2/1489/PNG/512/rubbishbin_102620.png" alt="Deletar" onClick = {() => this.deletarPlayList(list.id)}/>
                        </PlayListUnit>;
            });
        }
       return lista;
    }
}

export default Lista