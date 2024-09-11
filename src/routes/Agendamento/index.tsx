import { useParams } from "react-router-dom";
import { services } from "../../types/servicesInfo";
import { useNavigate } from "react-router-dom";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import Header from "../../components/Header/Header";
import PrimaryInput from "../../components/Inputs/PrimaryInputs";
import Buttons from "../../components/Buttons/Buttons";
import style from "./Agendamento.module.css";

export default function Agendamento() {

  document.title = "Agendamento"

  const navigate = useNavigate();
  const filter: string[] = ["Oficina", "Dia", "Horário"];

  const { id } = useParams();
  const servico = services.find((service) => service.id == Number(id))

  function handleAgendar(e: any) {
    e.preventDefault();
    alert("Serviço agendado!")
    navigate("/diagnostico")
  }

  return (
    <>
      <Header page="OFICINAS" path="/oficinas" />
      <div className={style.container}>
        <BackgroundBox title="AGENDAMENTO DE SERVIÇO">
          <h2 className={style.servicoSelecionado}>Serviço selecionado: {servico?.service}</h2>
          <div className={style.agendamento}>
            {filter.map((filter) => (
              <PrimaryInput
                type="search"
                name={filter}
                id={"id" + filter}
                placeholder={`Filtrar por ${filter}`}
                onChange={() => "teste"}
                required={true}
              />
            ))}

            <Buttons type="submit" id="btnAgendar" onClick={handleAgendar}>AGENDAR</Buttons>
          </div>
        </BackgroundBox>
      </div>
    </>
  );
}
