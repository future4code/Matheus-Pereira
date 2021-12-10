/*Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
*/
import { getTripDetails } from "../components/GetTripDetail";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function TripDetailsPage(){
    useProtectedPage();
    const navigate = useHistory();
    const voltar = () => {
        navigate.goBack()
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