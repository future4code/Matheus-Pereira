//Formulário para o administrador criar uma nova viagem

import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";
import { Formulario, Botao } from "../services/styled";
import CreateTrip from "../components/CreateTrip";

function CreateTripPage(){
    useProtectedPage();

    const { form, onChange, cleanFlsields } = useForm({ 
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
        console.log(form)
        let token = localStorage.getItem["token"]
        CreateTrip(form,token);
    }
    return <div>
        <button onClick = {voltar}>Voltar</button>
        <h1>Criar uma Nova Viagem</h1>
        <Formulario onSubmit={enviarForm}>
            <input 
                placeholder="Nome" 
                name="name" 
                value={form.name} 
                onChange={onChange}
                pattern={"^.{5,}"}
                title={"O nome deve ter no mínimo 5 letras"}
                required/>
            <select name="planet" value ={form.planet} onChange={onChange} id="planet">  
                <option>Selecione um Planeta</option>
                <option value="mercurio">Mercurio</option>
                <option value="venus">Vênus</option>
                <option value="terra">Terra</option>
                <option value="marte">Marte</option>
                <option value="jupiter">Jupiter</option>
                <option value="saturno">Saturno</option>
                <option value="urano">Unarno</option>
                <option value="netuno">Netuno</option>
            </select>
            <input 
                placeholder="Data" 
                name="date" 
                value={form.date} 
                onChange={onChange}
                pattern
                required 
                type="date"/>
            <input 
                placeholder="Descrição" 
                name="description" 
                value={form.description} 
                onChange={onChange}
                pattern={"^.{30,}"}
                title={"O nome deve ter no mínimo 30 caracteres"}
                required/>
            <input 
                placeholder="Duração em dias" 
                name="durationInDays" 
                value={form.durationInDays} 
                onChange={onChange}
                pattern={"^[0-9]*$"}
                title={""} 
                required 
                type="number"/>    
            <Botao>Enviar</Botao>
        </Formulario>
    </div>
}

export default CreateTripPage;