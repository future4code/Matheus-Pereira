import { useHistory } from "react-router-dom";
import ApplytoTrip from "../components/ApplytoTrip";
import GetIdtoTrip from "../components/GetIdtoTrip";
import GetTrips from "../components/GetTrips";
import { Botao, Formulario } from "../services/styled";
import useForm from "../hooks/useForm";

/*Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
*/
function ApplicationFormPage () {
    const navigate = useHistory();
    const  voltar = () => {
        navigate.goBack();
    }
    const { form, onChange, cleanFields } = useForm({ 
        name: "", 
        age: 0, 
        applicationText:"", 
        profession: "",
        country: ""
     });

    

    const enviarForm = (event) => { 
        event.prevent.default();
        var select = document.getElementById('trip');
        let id = GetIdtoTrip(select.options[select.selectedIndex].value)
        alert(id);
        
        console.log(form);
        ApplytoTrip({...form, [id] : id });
        cleanFields();
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

        <Formulario onSubmit={enviarForm}>
            <select name="trip" required>
                <option>Escolha uma Viagem</option>
                {lista}
            </select>
            <input placeholder="Nome" name="name" value={form.name} onChange={onChange} required/>
            <input placeholder="Idade" name="age" value={form.age} onChange={onChange} required type="number"/>
            <input placeholder="Texto de Candidatura " name="applicationText" value={form.applicationText} onChange={onChange} required/>
            <input placeholder="Profissão" name="profession" value={form.profession} onChange={onChange} required/>
            <input placeholder="País" name="country" value={form.country} onChange={onChange} required/>    
                <Botao>Enviar</Botao>
        </Formulario>
    </div>
}

export default ApplicationFormPage;