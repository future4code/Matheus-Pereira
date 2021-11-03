/*Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
*/

function ApplicationFormPage(){
    return <div>
        <h1>Inscrever-se para uma viagem</h1>
        <form>
            <select>
                <option value="" disabled="" selected="">Escolha uma Viagem</option>
                <option value="">Comer jujuba em Júpiter</option>
                <option value="">Pedido de casamento nos anéis de Saturno</option>
                <option value="">viagem a jupiter</option>
                <option value="">Direto para o futuro</option>
                <option value="">Viagem para mercúrio</option>
                <option value="">Viagem de ferias para mercurio</option>
                <option value="">Pegar os que ficaram </option>
            </select>
            <input placeholder="Nome" name="name"/>
                <button>Voltar</button>
                <button type="submit">Enviar</button>
        </form>
    </div>
}

export default ApplicationFormPage;