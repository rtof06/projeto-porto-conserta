import style from "./Header.module.css";
import logoAmplexus from "../../img/logoAmplexus.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  page: string;
  path: string;
};

export default function Header({ page, path }: HeaderProps) {
  const navigate = useNavigate();

  const handleGoBack = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className={style.header}>
      <Link to={"/"}>
        <img
          src={logoAmplexus}
          alt="Logo AmplexusTech"
          className={style.logo}
          title="Página inicial"
        />
      </Link>
      {/* Navbar */}
      <nav className={style.navbar}>
        <ul>
          <li className={style.list}>
            {page === "VOLTAR" ? (
              <Link to="#" onClick={handleGoBack} className={style.list__item}>
                {page}
              </Link>
            ) : (
              <Link to={path} className={style.list__item}>
                {page}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
