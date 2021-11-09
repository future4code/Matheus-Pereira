/*Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
*/
import { useNavigate } from "react-router";
import { useProtectedPage } from '../services/ProtectedPage';

export default function AdminHomePage() {
    useProtectedPage();
    const navigate = useNavigate();
    const goNextPage = (url) => {
         navigate(url);
     }
    const  voltar = () => {
     navigate(-1);
 }

    return <div>
        <button onClick = {voltar}>Voltar</button>
        <h1>Área Administrativa</h1>
        <button onClick = {() => goNextPage ("/criarviagem")}>Criar Viagem</button>
        </div>
}

