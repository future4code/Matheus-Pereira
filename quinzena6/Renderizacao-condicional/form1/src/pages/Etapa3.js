import { PerguntaAberta } from "../Components/PerguntaAberta";
import { PerguntaOpcoes } from "../Components/PerguntaOpcoes";

function Etapa3() {
    return (
      <div>
          <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"}/>
          <PerguntaOpcoes
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={[
            "Nenhum",
            "Curso Técnico",
            "Ensino superior incompleto",
            "Curso de Inglês"
          ]}
        />
      </div>
    );
  }
  
  export default Etapa3;