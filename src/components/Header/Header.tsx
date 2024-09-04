import style from "./Header.module.css";
import logoAmplexus from "../../img/logoAmplexus.png";

type HeaderProps = {
   navegation: string
}

export default function Header({navegation}:HeaderProps) {
  return (
    <div className={style.header}>
      <img src={logoAmplexus} alt="Logo AmplexusTech" className={style.logo} />
      <nav className={style.navbar}>
         <ul>
            <li className={style.list}>
               <a href="#" className={style.list__item}>{navegation}</a>
            </li>
         </ul>
      </nav>
    </div>
  );
}
