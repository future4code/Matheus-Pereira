/*Para o usuário escolher entre Área Administrativa e Lista de Viagens
*/

import { useNavigate } from "react-router";

function HomePage(){
    const navigate = useNavigate();
    const goNextPage = (url) => {
         navigate(url);
     }
    return <div>
        <h1>LabeX</h1>
        <div>
        <button onClick = {() => goNextPage ("/listadeviagens")} >Ver Viagens</button>
        <button onClick = {() => goNextPage ("/login")}>Área de Admin</button>
        </div>
    </div>
}

export default HomePage;