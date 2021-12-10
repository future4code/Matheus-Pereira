//Para vermos todas as viagens

import { useHistory } from "react-router-dom";
import { Painel } from "../services/styled";
import GetTrips  from "../components/GetTrips";
import { ListUnit } from "../services/styled";

function ListTripsPage(){
    let lista = [];

    const navigate = useHistory();

    const goNextPage = (url) => {
         navigate.push(url);
     }
    
     const  voltar = () => {
        navigate.goBack();
    }

//    useEffect (() => {
        lista = GetTrips();
        if(lista){
            lista = lista.map((list) => {
                return <ListUnit>
                            <p key={list.id}><b>Nome: </b>{list.name}</p>
                            <p><b>Planeta: </b>{list.planet}</p>
                            <p><b>Descrição: </b>{list.description}</p>
                            <p><b>Duração: </b>{list.durationInDays} dias</p>
                            <p><b>Data: </b> {list.date}</p>
                        </ListUnit>;
            });
        }
        else {
          lista = <h1>Sem Viagens disponíveis</h1>
        }
  //    },[])



    return <div>
        <div>
            <button onClick = {voltar}>Voltar</button>
        </div>
        <Painel>
            <h1>Lista de Viagens</h1>
            <button onClick = {() => goNextPage ("/formulariodeviagem")} >Inscrever-se</button>
        </Painel>
        {lista}
    </div>
}

export default ListTripsPage;