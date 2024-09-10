import style from "./ModalOficina.module.css";

type ModalOficinaProps = {
  openModal: boolean;
  title: string;
  adress: string;
  phone: string;
};

export default function ModalOficina({ title, adress, phone }: ModalOficinaProps) {
  return (
    <div className={style.container}>
      <button className={style.close}>Fechar</button>
      <div className={style.content}>
        <h2 className={style.cardTitle}>{title}</h2>
        <p className={style.cardInfo}>{adress}</p>
        <p className={style.cardInfo}>{phone}</p>
      </div>
    </div>
  );
}
