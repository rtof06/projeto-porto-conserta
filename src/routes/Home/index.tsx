import MainContent from "../../components/MainContent/MainContent";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Home() {
  document.title = "Página inicial";

  return (
    <>
      <Header page="LOGIN" path="/login"/>
      <Outlet />
      <MainContent
        title="PORTO CONSERTA"
        subtitle="UM JEITO FÁCIL DE MANTER O SEU CARRO SEMPRE SAUDÁVEL"
        paragraph="A Porto Conserta é uma plataforma de fácil manipulação
         que gera um autodiagnóstico do seu veículo a partir de um scanner
          OBD II, sinalizando quando há necessidade de reparo e conectando o
           usuário com as oficinas pareiras Porto."
      />
    </>
  );
}
