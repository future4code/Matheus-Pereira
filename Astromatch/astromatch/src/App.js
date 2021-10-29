import React, { useState, useEffect } from "react";
import './App.css';
import { Card, Icone, Match } from "./Components/styles";
import Perfil from "./Components/Perfil";
import PagMatch from "./Components/PagMatch";


export default function App (){
  
  let [page, setPage] = useState(true);
  let pagina = <Perfil/>;


  const onClickTelaMatches = () =>{
    setPage(!page);
    
  }
//  useEffect(() => {
    if(page){
      pagina = <Perfil/>
    }else{
    pagina = <PagMatch/>
    }
//},[]
//)

    return <Match>
                    <Card>
                    <h2>Astromatch</h2>
                    <Icone onClick={onClickTelaMatches} src="https://cdn-icons-png.flaticon.com/512/33/33906.png"/>
                    </Card>
              {pagina}
            </Match>
//  }
}