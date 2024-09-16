import MainContent from "../../components/MainContent/MainContent";
import Header from "../../components/Header/Header";
import Developers from "../../components/MainContent/Developers/Developers";
import { developers } from "../../types/developersInfo";
import { Outlet } from "react-router-dom";
import style from "./Home.module.css";

export default function Home() {
  document.title = "Página inicial";

  return (
    <>
      <Header page="LOGIN" path="/login" />
      <Outlet />
      <MainContent
        title="PORTO CONSERTA"
        subtitle="UM JEITO FÁCIL DE MANTER O SEU CARRO SEMPRE SAUDÁVEL"
        paragraph="A Porto Conserta é uma plataforma de fácil manipulação
         que gera um autodiagnóstico do seu veículo a partir de um scanner
          OBD II, sinalizando quando há necessidade de reparo e conectando o
           usuário com as oficinas pareiras Porto."
      />
      <div className={style.developers}>
        <h2 className={style.teamTitle}>Time Amplexus Technology</h2>
        <section className={style.developers}>
          <div className={style.team}>
            {developers.map((dev) => (
              <Developers
                name={dev.name}
                rm={dev.rm}
                img={dev.image}
                alt={dev.alt}
                github={dev.github}
                instagram={dev.insta}
                linkedin={dev.linkedin}
                key={dev.rm}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
