import imgCarmona from "../../img/CARMONA.png";
import imgPedro from "../../img/PEDRO.png";
import imgRicardo from "../../img/RICARDO.png";
import style from "./MainContent.module.css";

type MainContentProps = {
  title: string;
  subtitle: string;
  paragraph: string;
};

export default function MainContent({
  title,
  subtitle,
  paragraph
}: MainContentProps) {
  const developers: { image: string, name: string; rm: string, alt: string }[] = [
    {
      image: `${imgPedro}`,
      name: "Pedro Abrantes Andrade",
      rm: "RM558186",
      alt: "Foto do Pedro"
    },
    {
      image: `${imgCarmona}`,
      name: "Victor Alves Carmona",
      rm: "RM555726",
      alt: "Foto do Victor"
    },
    {
      image: `${imgRicardo}`,
      name: "Ricardo Tavares de Oliveira Filho",
      rm: "RM556092",
      alt: "Foto do Ricardo"
    },
  ];

  return (
    <div className={style.header}>
      <h1 className={style.title}>{title}</h1>
      <h3 className={style.subtitle}>{subtitle}</h3>
      <p className={style.paragraph}>{paragraph}</p>
      <h2 className={style["team-title"]}>Time de Desenvolvedores</h2>
      <div className={style.team}>

        {developers.map((dev) => (
          <div className={style.developer}>
            <img src={dev.image} alt={dev.alt} className={style["dev-picture"]} />
            <p className={style.name}>{dev.name}</p>
            <p className={style.rm}>{dev.rm}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
