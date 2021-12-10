import { useNavigate, useParams } from "react-router";
import ApplytoTrip from "../Components/ApplytoTrip";

export default function ConfirmationPage () {
    const navigate = useNavigate();
    const  voltar = () => {
        navigate(-2);
    }
    const pathParams = useParams();
    
    ApplytoTrip(pathParams)

    return <div>       
        <button onClick = {voltar}>Voltar</button>
        <h1>Inscrição efetuada com sucesso</h1>
    </div>
}