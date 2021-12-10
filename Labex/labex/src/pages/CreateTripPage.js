//Formulário para o administrador criar uma nova viagem

import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";
import { Formulario, Botao } from "../services/styled";
import CreateTrip from "../components/CreateTrip";

function CreateTripPage(){
    useProtectedPage();

    const { form, onChange, cleanFields } = useForm({ 
        name: "", 
        planet: "", 
        date:"", 
        description: "",
        durationInDays: ""
     });

    const navigate = useHistory();
    const  voltar = () => {
        navigate.goBack();
    }
    
    const enviarForm = (event) => { 
        event.prevent.default();
        let token = localStorage.getItem["token"]
        CreateTrip(form,token);
    }
    return <div>
        <button onClick = {voltar}>Voltar</button>
        <h1>Criar uma Nova Viagem</h1>
        <Formulario onSubmit={enviarForm}>
            <input placeholder="Nome" name="name" value={form.name} onChange={onChange} required/>
            <input placeholder="Planeta" name="planet" value={form.planet} onChange={onChange} required/>
            <input placeholder="Data" name="date" value={form.date} onChange={onChange} required type="date"/>
            <input placeholder="Descrição" name="description" value={form.description} onChange={onChange} required/>
            <input placeholder="Duração em dias" name="durationInDays" value={form.durationInDays} onChange={onChange} required type="number"npm run build/>    
            <Botao>Enviar</Botao>
        </Formulario>
    </div>
}

export default CreateTripPage;