/*Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
*/
import { useHistory } from "react-router-dom";
import { useProtectedPage } from '../hooks/useProtectedPage';

export default function AdminHomePage() {
    useProtectedPage();
    const navigate = useHistory();
    const goNextPage = (url) => {
         navigate.push(url);
     }
    const  voltar = () => {
     navigate.push("/");
 }

    return <div>
        <button onClick = {voltar}>Voltar</button>
        <h1>Área Administrativa</h1>
        <button onClick = {() => goNextPage ("/criarviagem")}>Criar Viagem</button>
        </div>
}

