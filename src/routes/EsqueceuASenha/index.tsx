import style from "./EsqueceuASenha.module.css";
import Header from "../../components/Header/Header";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import PrimaryInput from "../../components/Inputs/PrimaryInputs";
import Buttons from "../../components/Buttons/Buttons";
import { FormEvent } from "react";

export default function EsqueceuASenha() {

  document.title = "Recuperação de senha"

  function emailBackup(e: FormEvent) {
    e.preventDefault();

  }

  return (
    <div className={style.main}>
      <Header page="" path="/" />
      <BackgroundBox title="Recuperar minha senha">
        <div className={style.container}>
          <form className={style.form}>
            <PrimaryInput
              type="email"
              name="email"
              id="idEmail"
              placeholder="Digite seu email"
              required={true}
            />
            <Buttons type="submit" id="btnBackup" onClick={emailBackup}>Recuperar</Buttons>
          </form>
        </div>
      </BackgroundBox>
    </div>
  );
}
