//Formulário para o administrador criar uma nova viagem

import { useNavigate } from "react-router";
import { useProtectedPage } from "../services/ProtectedPage";
import useForm from "../services/useForm";
import { Formulario, Botao } from "../services/styled";
import CreateTrip from "../Components/CreateTrip";

function CreateTripPage(){
    useProtectedPage();

    const { form, onChange, cleanFields } = useForm({ 
        name: "", 
        planet: "", 
        date:"", 
        description: "",
        durationInDays: ""
     });

    const navigate = useNavigate();
    const  voltar = () => {
        navigate(-1);
    }
    
    const enviarForm = (event) => { 
        event.prevent.default();
        CreateTrip(form);
    }
    return <div>
        <button onClick = {voltar}>Voltar</button>
        <h1>Criar uma Nova Viagem</h1>
        <Formulario onSubmit={enviarForm}>
            <input placeholder="Nome" name="name" value={form.name} onChange={onChange} required/>
            <input placeholder="Planeta" name="planet" value={form.planet} onChange={onChange} required/>
            <input placeholder="Data" name="date" value={form.date} onChange={onChange} required type="date"/>
            <input placeholder="Descrição" name="description" value={form.description} onChange={onChange} required/>
            <input placeholder="Duração em dias" name="durationInDays" value={form.durationInDays} onChange={onChange} required/>    
            <Botao>Enviar</Botao>
        </Formulario>
    </div>
}

export default CreateTripPage;