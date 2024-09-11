import React from "react";
import style from "./ModalOficina.module.css";

type ModalOficinaProps = {
  isOpen: boolean;
  children: React.ReactNode;
  setModalOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ModalOficina({
  isOpen,
  children,
  setModalOpen,
}: ModalOficinaProps) {
  if (isOpen) {
    return (
      <div className={style.container}>
        {children}
        <button className={style.close} onClick={setModalOpen}>
          Fechar
        </button>
      </div>
    );
  }

  return null;
}
