import style from "./MainContent.module.css";
import imgRicardo from "../../img/RICARDO.png"
import imgPedro from "../../img/PEDRO.png"
import imgCarmona from "../../img/CARMONA.png"

type MainContentProps = {
  title: string;
  subtitle: string;
  paragraph: string;
};

export default function MainContent({
  title,
  subtitle,
  paragraph,
}: MainContentProps) {
  const developers: { image: Object, name: string; rm: string }[] = [
    {
      image: {imgRicardo},
      name: "Pedro Abrantes Andrade",
      rm: "RM558186",
    },
    {
      image: {imgCarmona},
      name: "Victor Alves Carmona",
      rm: "RM555726",
    },
    {
      image: {imgPedro},
      name: "Ricardo Tavares de Oliveira Filho",
      rm: "RM556092",
    },
  ];

  return (
    <>
      <h1 className={style.title}>{title}</h1>
      <h3 className={style.subtitle}>{subtitle}</h3>
      <p className={style.paragraph}>{paragraph}</p>
      <div className={style.team}>
        {developers.map((dev) => (
          <div className={style.developer}>
            <img src="" alt="" className={style["dev-picture"]} />
            <p className={style.name}>{dev.name}</p>
            <p className={style.rm}>{dev.rm}</p>
          </div>
        ))}
      </div>
    </>
  );
}
