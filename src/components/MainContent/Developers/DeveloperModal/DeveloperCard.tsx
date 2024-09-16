import style from "./DeveloperCard.module.css";

type DeveloperCardProps = {
  isOpen: boolean;
  children: React.ReactNode;
  setModalOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function DeveloperCard({
  isOpen,
  children,
  setModalOpen
}: DeveloperCardProps) {
  if (isOpen) {
    return (
      <div className={style.card}>
        {children}
        <button className={style.close} onClick={setModalOpen}>
          Fechar
        </button>
      </div>
    );
  }

  return null;
}
