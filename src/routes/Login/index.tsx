import style from "./Login.module.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

export default function Login() {

  return (
    <div className={style.container}>
      <Header page="" path="/" />
      <div className={style.login}>
        <h1 className={style.title}>FAZER LOGIN</h1>
        <form className={style.form}>
          <input type="text" name="user" id="user" />
          <input type="password" name="password" id="password" />
          <button type="submit" id="btnLogin">LOGIN</button>
        </form>
        <Link to="/cadastro">Não possui cadastro? <strong>Cadastre-se aqui!</strong></Link>
      </div>
    </div>
  );
}
