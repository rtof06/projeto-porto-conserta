import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  document.title = "Página inicial"
  return (
    <>
      <Header navegation="LOGIN"/>
      <Footer />
    </>
  );
}

export default App;
