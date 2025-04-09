import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from "react";
import Join from "./pages/Join";
import Chat from "./pages/chat";
import Rodape from "./components/rodapé/Rodape";

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true); // Estado para alternar entre Dark e Light

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Alterna entre os modos
  };

  return (
    <div
      id="App"
      className={`m-0 p-0 vh-100 d-flex flex-column justify-content-center align-items-center ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <button
        className="btn btn-outline-secondary position-absolute top-0 end-0 m-3"
        onClick={toggleTheme}
      >
        <i className={`bi ${isDarkMode ? "bi-sun" : "bi-moon"}`}></i>
      </button>

      {chatVisibility ? (
        <Chat socket={socket} />
      ) : (
        <Join setSocket={setSocket} visibility={setChatVisibility} />
      )}
      <Rodape>Tiago P.</Rodape>
    </div>
  );
}

export default App;