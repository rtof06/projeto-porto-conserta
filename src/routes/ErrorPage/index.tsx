import erro404 from "../../img/img404.jpg";
import Header from "../../components/Header/Header";
import style from "./ErrorPage.module.css";

export default function ErrorPage() {

   document.title = "Error 404";

   return (
      <div className={style.erro}>
         <Header page="" path="/"/>
         <h1>Erro 404 - Página não encontrada.</h1>
         <div>
            <figure className={style.img404}>
               <img src={erro404} alt="Error 404" />
            </figure>
         </div>
      </div>
   );
}

