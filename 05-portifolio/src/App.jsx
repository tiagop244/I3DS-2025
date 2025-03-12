import "./App.css";

import Perfil from "./components/perfil/Perfil";
import foto from "./img/464110169_1624656028470005_4929541502473855788_n.jpg";
import Links from "./components/links/Links";
import Rodape from "../../03-devlinks/src/components/rodape/Rodape";

const App = () => {
  return (
    <div>
      <div id="container">
      <div id="Cabecalho">
          <h5>Olá seja bem vindo ao</h5>
          <h3>Meu Portifólio!!!</h3>
        </div>
        <Perfil fotoPerfil={foto}>TIAGO PEREIRA DUARTE</Perfil>

        <ul id="links">
          <Links link={"https://github.com/tiagop244"}>GitHub</Links>
          <Links link={"https://github.com/tiagop244"}>Portifólio</Links>
          <Links link={"https://github.com/tiagop244?tab=repositories"}>
            Projetos
          </Links>
          <Links link={"https://wa.me/5514991751064"}>Whatsapp</Links>
        </ul>
      </div>
      <Rodape>Tigas</Rodape>
    </div>
  );
};

export default App;
