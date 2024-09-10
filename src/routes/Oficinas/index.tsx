import Header from "../../components/Header/Header";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import CardOficina from "../../components/CardOficinas/CardOficina";
import style from "./Oficinas.module.css"

export default function Oficinas() {
   return (
      <div className="container">
         <Header page="VOLTAR" path="#" />
         <div className={style.oficinas}>
            <BackgroundBox title="OFICINAS">
               <CardOficina title="Centro Automotivo Porto" neighbourhood="Butantã" uf="SP" />
            </BackgroundBox>
         </div>
      </div>
   );
}