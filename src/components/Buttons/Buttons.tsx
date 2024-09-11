import style from "./Buttons.module.css";

type ButtonsProps = {
  type?: "submit" | "reset" | "button";
  id:string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode;
};

export default function Buttons({ type, id, onClick, children }: ButtonsProps) {
  return (
    <button type={type} id={id} onClick={onClick} className={style.button}>
      {children}
    </button>
  );
}
