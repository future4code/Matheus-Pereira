import './App.css';
import React from "react";
import Criar from './PlayLists/Criar';
import Lista from './PlayLists/Lista';
import { Corpo } from './style';
import Musica from './PlayLists/Musica';

export const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
export const header = {
  headers: {
    Authorization : "matheus-dias-banu" 
  },}
export let listaMusica;

export default class App extends React.Component {
  render () {
  return (
    <div className="App">
        <h1>Labenusers</h1>
        <Corpo>
          <Criar></Criar>
          <Lista></Lista>
          <Musica></Musica>
        </Corpo>

    </div>
  );
  }
}


