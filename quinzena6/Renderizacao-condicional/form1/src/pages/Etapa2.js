import { PerguntaAberta } from "../Components/PerguntaAberta";

function Etapa2() {
    return (
      <div>
        <h1>ETAPA 2 - Informações do Ensino Superior</h1>
        <PerguntaAberta pergunta={"5.Qual curso?"}/>
        <PerguntaAberta pergunta={"2.Qual a unidade de Enisno?"}/>
      </div>
    );
  }
  
  export default Etapa2;