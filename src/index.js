import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
import "./input.css";

function App() {
  const [login, setLogin] = useState(localStorage.getItem("login") === "true");

  useEffect(()=>{
    localStorage.setItem("login", login) 
  }, [login])

  if (login) {
    return (
      <>
        <Shop />
        <button className="btn" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Нужно залогиниться!</h2>
        <button className="btn" onClick={() => setLogin(true)}>
          Войти
        </button>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
