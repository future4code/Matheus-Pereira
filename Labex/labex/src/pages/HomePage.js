/*Para o usuário escolher entre Área Administrativa e Lista de Viagens
*/

import { useHistory } from "react-router-dom";

function HomePage(){
    const navigate = useHistory();
    const goNextPage = (url) => {
         navigate.push(url);
     }
    return <div>
        <h1>LabeX</h1>
        <div>
            <button onClick = {() => goNextPage ("/listadeviagens")} >Ver Viagens</button>
            <button onClick = {() => goNextPage ("/admin")}>Área de Admin</button>
        </div>
    </div>
}

export default HomePage;