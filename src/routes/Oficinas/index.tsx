import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import CardOficina from "../../components/CardOficinas/CardOficina";
import Header from "../../components/Header/Header";
import style from "./Oficinas.module.css";

export default function Oficinas() {
   return (
      <div className="container">
         <Header page="VOLTAR" path="#" />
         <div className={style.oficinas}>
            <BackgroundBox title="OFICINAS">
               <CardOficina title="Centro Automotivo Porto" neighbourhood="Butantã" uf="SP" adress="Av. Vital Brasil" phone="(11) 97450-4992" />
            </BackgroundBox>
         </div>
      </div>
   );
}