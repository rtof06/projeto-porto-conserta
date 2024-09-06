import style from "./MainContent.module.css";
import Developers from "./Developers/Developers";

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
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <h3 className={style.subtitle}>{subtitle}</h3>
      <p className={style.paragraph}>{paragraph}</p>
      <Developers />
    </div>
  );
}
