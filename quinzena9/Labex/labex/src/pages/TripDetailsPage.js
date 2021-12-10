/*Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
*/

import { useNavigate } from "react-router";
import { getTripDetails } from "../Components/GetTripDetail";
import { useProtectedPage } from "../services/ProtectedPage";
import { useEffect } from "react";

function TripDetailsPage(){
    useProtectedPage();
    const navigate = useNavigate();
    const voltar = () => {
        navigate(-1);
    }
    useEffect(() => {
        const fetch = async () => {
            const token = localStorage.getItem("token");
            const response = await getTripDetails(token, "275opPEaZmwOSSDL3NUW");
            console.log(response);
        }
        fetch();
        // setMyState({}); //loop infinito se myState estiver na array de dependências
    }, []);
    return <div>
        <button onClick = {voltar}>Voltar</button>
    </div>
}

export default TripDetailsPage;