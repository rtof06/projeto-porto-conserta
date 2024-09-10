import { useState } from "react";
import style from "./CardOficina.module.css";
import ModalOficina from "./ModalOficina/ModalOficina";

type CardOficina = {
  title: string;
  neighbourhood: string;
  uf: string;
};

export default function CardOficina({ title, neighbourhood, uf }: CardOficina) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className={style.cardOficina}>
      <button className={style.card} onClick={() => setIsModalVisible(true)}>
        {title} - {neighbourhood}/{uf}
      </button>
      <ModalOficina
        openModal={isModalVisible}
        title={title}
        adress="Av. Vital Brasil, 1935"
        phone="(11) 97401-1923"
      />
    </div>
  );
}
