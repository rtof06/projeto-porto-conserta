import style from "./CardOficina.module.css";

type CardOficinaProps = {
  title: string;
  info: string;
};

export default function CardOficina({ title, info }: CardOficinaProps) {
  return (
    <div className={style.CardOficina}>
      <h2 className={style.cardTitle}>{title}</h2>
      <p className={style.cardInfo}>{info}</p>
    </div>
  );
}
