import React, { useRef } from "react";
import io from "socket.io-client";
import img from "../img/Design sem nome.png"; 


const Join = (props) => {
  //Hook useRef
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    // Criando a conexão com servidor socket
    const servidorSocket = await io.connect("http://192.168.10.123:3001");
    servidorSocket.emit("set_username", username);

    // Abrindo a pagina de chat
    props.setSocket(servidorSocket);
    props.visibility(true);
  };
  return (
    <div className="text-center">
      <img
        src={img}
        alt="Imagem centralizada"
        className="img-fluid"
        style={{ width: "300px", height: "150px", objectFit: "cover", borderRadius: "10px" }}
      />

      <div
        id="join-box"
        className="mt-4 bg-secondary rounded-4 py-4 px-5  d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <h3>Bem-vindo ao DEVCHAT!</h3>
        <div className="form-floating mb-3">
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            id="nomeUsuario"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key == "Enter" && handleSubmit()}
          />
          <label htmlFor="nomeUsuario" className="">
            Nome de usuário
          </label>
        </div>
        <button
          className="btn btn-light px-5 py-2"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
