import { PerguntaAberta } from "../Components/PerguntaAberta";
import { PerguntaOpcoes } from "../Components/PerguntaOpcoes";

function Etapa1() {
    return (
      <div>
          <h1>ETAPA 1 - DADOS GERAIS</h1>
          <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
          <PerguntaAberta pergunta={"2. Qual sua idade?"} />
          <PerguntaAberta pergunta={"3. Qual seu email?"} />
          <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
          //Criar a função a1ui 
        />
      </div>
    );
  }
  
  export default Etapa1;
  