import React from "react";
import style from "./ModalOficina.module.css";

type ModalOficinaProps = {
  isOpen: boolean;
  children: React.ReactNode
};

export default function ModalOficina({ isOpen, children }: ModalOficinaProps) {
  return (
    <div className={style.container}>
      <button className={style.close}>Fechar</button>
      {children}
    </div>
  );
}
