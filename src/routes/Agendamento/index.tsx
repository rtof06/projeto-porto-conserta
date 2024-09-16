import { useParams } from "react-router-dom";
import { services } from "../../types/servicesInfo";
import { oficinas } from "../../types/oficinas";
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
  const [buscaOficina, setBuscaOficina] = useState("");
  const [showOficinas, setShowOficinas] = useState(false);
  const { id } = useParams();
  const servico = services.find((service) => service.id === Number(id));

  const buscaOficinaLowerCase = buscaOficina.toLowerCase();
  const listaOficinas = oficinas.filter((oficina) =>
    oficina.name.toLowerCase().includes(buscaOficinaLowerCase)
  );

  const fillSearch = (name: string) => {
    setBuscaOficina(name);
  };

  const handleAgendar = (e: any) => {
    e.preventDefault();
    alert("Serviço agendado!");
    navigate("/diagnostico");
  };

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
              type="search"
              name="oficina"
              id="idOficina"
              placeholder="Filtrar por oficina"
              value={buscaOficina}
              onFocus={() => setShowOficinas(true)}
              onChange={(e) => setBuscaOficina(e.target.value)}
              required={true}
            />
            <ul className={`${style.oficinas} ${showOficinas ? style.show : ""}`}>
              {listaOficinas.map((oficina) => (
                <li key={oficina.id}>
                  <p
                    className={style.oficinaItem}
                    onClick={() => fillSearch(oficina.name)}
                  >
                    {oficina.name}
                  </p>
                </li>
              ))}
            </ul>
            <label htmlFor="idDate" className={style.subTitle}>
              Escolha o dia que deseja agendar
            </label>
            <PrimaryInput
              type="date"
              name="date"
              id="idDate"
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
