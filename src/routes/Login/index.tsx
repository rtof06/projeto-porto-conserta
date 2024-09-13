import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import PrimaryInput from "../../components/Inputs/PrimaryInputs";
import style from "./Login.module.css";


export default function Login() {

  document.title = "Login"

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className={style.container}>
      <Header page="" path="/" />
      <div className={style.login}>
        <h1 className={style.title}>FAZER LOGIN</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.email}>
            <PrimaryInput
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={(e) => setUsername(e.target.value)}
              required={true}
            />
          </div>
          <div className={style.password}>
            <PrimaryInput
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>
          <div className={style["recall-forget"]}>
            <label className={style.formControl}>
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className={style.rememberMe}
              />
              Lembre-se de mim
            </label>
            <Link to="/esqueciMinhaSenha" className={style.esqueciSenha}>
              Esqueceu a senha?
            </Link>
          </div>
          <Buttons type="submit" id="btnLogin">
            LOGIN
          </Buttons>
        </form>
        <div className={style.signup}>
          <Link to="/cadastro" className={style.signup__link}>
            Não possui cadastro? <strong>Cadastre-se aqui!</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
