import style from "./CardOficina.module.css";
import { useState } from "react";
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
      {isModalVisible ? (
        <ModalOficina
          title={title}
          info={"Oficina da Porto localizada em " + neighbourhood + "/" + uf}
        />
      ) : null}
    </div>
  );
}
