import React from "react";
import { listaMusica } from "../App";

class Musica extends React.Component {
    

    render (){
        if(listaMusica){
            return listaMusica
        }else {
            return <h1>Selecione uma PlayList</h1>
        }
        
    }
}


export default Musica