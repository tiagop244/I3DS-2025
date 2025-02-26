import "./App.css";
import fotoLight from "./img/464110169_1624656028470005_4929541502473855788_n.jpg";
import fotoDark from "./img/foto 2.jpg"


import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/switch";
import Links from "./components/links/Links";

import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight((anterior) => !anterior);
  };

  return (
    <>
      <div id="App" className={isLight ? "light" : ""}>
        <div id= "container">
          <Perfil fotoPerfil={isLight ? fotoLight : fotoDark}>
            @NewTigas
            </Perfil>

          <Switch troca={troca} isLight={isLight} />

          <ul id="links">
            <Links link={"https://github.com/tiagop244"}>GitHub</Links>
            <Links link={"https://www.instagram.com/"}>Instagram</Links>
            <Links link={"https://github.com/tiagop244"}>Portifólio</Links>
            <Links link={"https://github.com/tiagop244?tab=repositories"}>
              Projetos
            </Links>
          </ul>

          <div id="socialLinks">
            <SocialLinks
              link={"https://github.com/tiagop244?tab=repositories"}
              icon={"logo-github"}
            />
            <SocialLinks
              link={"https://www.instagram.com/"}
              icon={"logo-instagram"}
            />
            <SocialLinks
              link={"https://www.youtube.com/"}
              icon={"logo-youtube"}
            />
            <SocialLinks
              link={"https://br.linkedin.com/"}
              icon={"logo-linkedin"}
            />
          </div>
          <Rodape>@NewTigas</Rodape>
        </div>
      </div>
    </>
  );
};

export default App;
