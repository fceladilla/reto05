import { useState } from "react";
import "./assets/style/App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [saludo, setSaludo] = useState("");

  const handleChange = (e) => {
    setUsuario(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const iniciame = () => {
    if (usuario == "Marcelo" && password == "Tinelli") {
      setSaludo("Bienvenido a la web ");
    } else {
      setSaludo("Nombre de usuario o contraseña incorrecta");
    }
  };

  return (
    <>
      <div className="contenedor">
        <div className="form">
          <h1 className="txt">Hola: {usuario}</h1>
          <input
            className="input"
            type="text"
            placeholder="Usuario"
            onChange={handleChange}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handlePass}
          />
          <button className="btn" onClick={iniciame}>
            Iniciar Sesion
          </button>
          <p className="txt">{saludo}</p>
        </div>
      </div>
    </>
  );
}

export default App;
