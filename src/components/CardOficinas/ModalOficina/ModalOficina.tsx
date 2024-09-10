import style from "./ModalOficina.module.css";

type ModalOficinaProps = {
  title: string;
  info: string;
};

export default function ModalOficina({ title, info }: ModalOficinaProps) {
  return (
    <div className={style.container}>
      <button className={style.close}>Fechar</button>
      <div className={style.content}>
        <h2 className={style.cardTitle}>{title}</h2>
        <p className={style.cardInfo}>{info}</p>
      </div>
    </div>
  );
}
