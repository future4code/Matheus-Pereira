import axios from 'axios';
import React, {useState} from "react";


export default function PagMatch () {
    let [lista, setLista] = useState([])
    let [lista2, setLista2] = useState([])
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheusdias/matches"
 //   visualizarPlayList = () =>{
        axios
        .get(url)
        .then((res) => {
            console.log(res)
          setLista(res.data.matches);
          setLista2 ( lista.map((pessoa) => {
            return <div>
                        <img src = {pessoa.photo}/>
                        <p>{pessoa.name}</p>
                    </div>;
        }))})
        .catch((err) => {
           alert(err)
        });        
  //  }
    
    return {lista2}

}