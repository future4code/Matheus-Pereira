import { useNavigate } from "react-router";
import GetTrips from "../Components/GetTrips";
import { Botao, Formulario } from "../services/styled";


/*Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
*/
function ApplicationFormPage () {
    const navigate = useNavigate();
    const  voltar = () => {
        navigate(-1);
    }

    

    const enviarForm = () => {
        console.log("teste")
        //navigate("/confirmacao")
    }

    let lista = GetTrips();
    if(lista){
        lista = lista.map((list) => {
            return <option value={list.id}>{list.name}</option>
        });
    } else{
        //alert("Algo deu errado, tente novamente mais tarde");
        console.log("erro")
    }

    return <div>
        <button onClick = {voltar}>Voltar</button>
        <h1>Inscrever-se para uma viagem</h1>

        <Formulario>
            <select>
                <option>Escolha uma Viagem</option>
                {lista}
            </select>
            <input placeholder="Nome" name="name"/>
            <input placeholder="Idade" name="age"/>
            <input placeholder="Texto de Candidatura " name="applicationText"/>
            <input placeholder="Profissão" name="profession"/>
            <input placeholder="País" name="country"/>    
                <Botao onClick={enviarForm}>Enviar</Botao>
        </Formulario>
    </div>
}

export default ApplicationFormPage;