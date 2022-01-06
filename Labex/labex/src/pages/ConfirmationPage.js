import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ApplytoTrip from "../components/ApplytoTrip";

export default function ConfirmationPage () {
    const navigate = useHistory();
    const  voltar = () => {
        navigate.goBack();
    }
    const pathParams = useParams();
    
    ApplytoTrip(pathParams)

    return <div>       
        <button onClick = {voltar}>Voltar</button>
        <h1>Inscrição efetuada com sucesso</h1>
    </div>
}