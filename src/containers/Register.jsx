import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerRequest } from "../actions";

import "../assets/styles/components/Register.scss";

const Register = (props) => {
  const [form, setValues] = useState({ email: "", name: "", password: "" });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/")
  };

  return (
    <section class="register">
      <section class="register__container">
        <h2>Regístrate</h2>
        <form class="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            class="input"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="email"
            class="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            class="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button class="button">Registrarme</button>
        </form>
        <Link to="login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default connect(null, null)(Register);
