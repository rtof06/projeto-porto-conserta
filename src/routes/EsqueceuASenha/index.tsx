import style from "./EsqueceuASenha.module.css";
import Header from "../../components/Header/Header";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import PrimaryInput from "../../components/Inputs/PrimaryInputs";
import Buttons from "../../components/Buttons/Buttons";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function EsqueceuASenha() {
  document.title = "Recuperação de senha";

  const navigate = useNavigate();

  function emailBackup(e: FormEvent) {
    e.preventDefault();
    alert("Cheque seu email!");
    navigate("/");
  }

  return (
    <div className={style.main}>
      <Header page="LOGIN" path="/login" path2="/" />
      <BackgroundBox title="Recuperar minha senha">
        <div className={style.container}>
          <form className={style.form} onSubmit={emailBackup}>
            <PrimaryInput
              type="email"
              name="email"
              id="idEmail"
              placeholder="Digite seu email"
              required={true}
            />
            <Buttons type="submit" id="btnBackup">
              Recuperar
            </Buttons>
          </form>
        </div>
      </BackgroundBox>
    </div>
  );
}
