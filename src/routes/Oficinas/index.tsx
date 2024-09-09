import Header from "../../components/Header/Header";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import style from "./Oficinas.module.css"

export default function Oficinas() {
   return ( 
      <div className="container">
         <Header page="VOLTAR" path="#"/>
         <BackgroundBox title="OFICINAS">
            <div className={style.oficinas}>
               
            </div>
         </BackgroundBox>
      </div>
    );
}