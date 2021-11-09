//Formulário para o administrador criar uma nova viagem

import { useNavigate } from "react-router";


function CreateTripPage(){
    const navigate = useNavigate;
    const  voltar = () => {
        navigate(-1);
    }
    return <div>
        <button onClick = {voltar}>Voltar</button>
    </div>
}

export default CreateTripPage;