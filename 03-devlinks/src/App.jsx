import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/switch";
import Links from "./components/links/Links";

import "./App.css";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";


const App = () => {
  return (
    <>
    <div id= "App" className="">
      <Perfil />
      <Switch />
      <ul>
      <Links />
      <Links />
      <Links />
      <Links />
      </ul>

      <div id="socialLinks">
        <SocialLinks/>
        <SocialLinks/>
        <SocialLinks/>
        <SocialLinks/>
      </div>
      <Rodape/>
      </div>
    </>
  );
};

export default App;
