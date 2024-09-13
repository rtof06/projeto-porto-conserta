import style from "./ErrorPage.module.css";

export default function ErrorPage() {

   document.title = "Error 404";

   return (
      <div className={style.erro}>
         <h1>Erro 404 - Página não encontrada.</h1>
      </div>
   );
}

