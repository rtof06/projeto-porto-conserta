import { useState } from "react";
import style from "./CardOficina.module.css";
import ModalOficina from "./ModalOficina/ModalOficina";

type CardOficina = {
  title: string;
  neighbourhood: string;
  uf: string;
  adress: string;
  phone: string;
  info: string
};

export default function CardOficina({
  title,
  neighbourhood,
  uf,
  adress,
  phone,
  info
}: CardOficina) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className={style.cardOficina}>
      <button
        className={style.card}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        {title} - {neighbourhood}/{uf}
      </button>
      <ModalOficina
        isOpen={isModalVisible}
        setModalOpen={() => setIsModalVisible(!isModalVisible)}
      >
        <div className={style.content}>
          <h2 className={style.cardTitle}>{title}</h2>
          <p className={style.cardInfo}>{adress}</p>
          <p className={style.cardInfo}>{phone}</p>
          <p className={style.info}>{info}</p>
        </div>
      </ModalOficina>
    </div>
  );
}
