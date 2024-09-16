import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import CardOficina from "../../components/CardOficinas/CardOficina";
import Header from "../../components/Header/Header";
import style from "./Oficinas.module.css";
import { oficinas } from "../../types/oficinas";

export default function Oficinas() {
  return (
    <div className="container">
      <Header page="VOLTAR" path="#" />
      <div className={style.oficinas}>
        <BackgroundBox title="OFICINAS">
          {oficinas.map((oficina) => (
            <CardOficina
              title={oficina.name}
              neighbourhood={oficina.neighbourhood}
              uf={oficina.uf}
              adress={oficina.street}
              phone={oficina.phone}
              info={oficina.atendimento}
            />
          ))}
        </BackgroundBox>
      </div>
    </div>
  );
}
