import Header from "../../components/Header/Header";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import Buttons from "../../components/Buttons/Buttons";
import style from "./Diagnostico.module.css";
import { services } from "../../types/servicesInfo";
import { Link } from "react-router-dom";

export default function Diagnostico() {

  document.title = "Diagnóstico"

  return (
    <>
      <Header page="OFICINAS" path="/oficinas" path2="/" />
      <div className={style.container}>
        <BackgroundBox title="DIAGNÓSTICO DO CARRO">
          <div className={style.diagnosticos}>
            {services.map((diagnostic) => (
              <Link to={`/agendamento/${diagnostic.id}`} key={diagnostic.id}>
                {" "}
                <Buttons
                  type="button"
                  id={style.diagnostico}
                  key={diagnostic.id}
                >
                  {diagnostic.service}
                </Buttons>
              </Link>
            ))}
          </div>
        </BackgroundBox>
      </div>
    </>
  );
}
