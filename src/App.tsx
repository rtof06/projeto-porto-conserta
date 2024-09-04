import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {

  document.title = "Página inicial"
  return (
    <>
      <Header navegation="LOGIN" />
      <MainContent title="PORTO CONSERTA"
        subtitle="UM JEITO FÁCIL DE MANTER O SEU CARRO SEMPRE SAUDÁVEL"
        paragraph="A Porto Conserta é uma plataforma de fácil manipulação
         que gera um autodiagnóstico do seu veículo a partir de um scanner
          OBD II, sinalizando quand há necessidade de reparo e conectando o
           usuário com as oficinas pareiras Porto." />
      <Footer />
    </>
  );
}

export default App;
