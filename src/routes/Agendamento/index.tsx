import { useParams } from "react-router-dom";
import { services } from "../../types/servicesInfo";
import { useNavigate } from "react-router-dom";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import Header from "../../components/Header/Header";
import PrimaryInput from "../../components/Inputs/PrimaryInputs";
import Buttons from "../../components/Buttons/Buttons";
import style from "./Agendamento.module.css";
import { useState } from "react";

export default function Agendamento() {
  document.title = "Agendamento";

  const navigate = useNavigate();
  const [buscaOficina, setBuscaOficina] = useState("")

  const { id } = useParams();
  const servico = services.find((service) => service.id == Number(id));

  const handleAgendar = (e: any) => {
    e.preventDefault();
    alert("Serviço agendado!");
    navigate("/diagnostico");
  }

  return (
    <>
      <Header page="OFICINAS" path="/oficinas" />
      <div className={style.container}>
        <BackgroundBox title="AGENDAMENTO DE SERVIÇO">
          <h2 className={style.servicoSelecionado}>
            Serviço selecionado: {servico?.service}
          </h2>
          <div className={style.agendamento}>
            <PrimaryInput
              type="text"
              name="oficina"
              id="idOficina"
              placeholder="Filtrar por oficina"
              onChange={(e) => setBuscaOficina(e.target.value)}
              required={true}
            />
            <label htmlFor="date">Escolha o dia que deseja agendar</label>
            <PrimaryInput
              type="date"
              name="date"
              id="idData"
              onChange={() => "teste"}
              required={true}
            />

            <Buttons type="submit" id="btnAgendar" onClick={handleAgendar}>
              AGENDAR
            </Buttons>
          </div>
        </BackgroundBox>
      </div>
    </>
  );
}
