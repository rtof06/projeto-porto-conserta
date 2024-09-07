import style from "./Buttons.module.css";

type ButtonsProps = {
  type?: "submit" | "reset" | "button";
  id: string;
  children: React.ReactNode;
};

export default function Buttons({ type, id, children }: ButtonsProps) {
  return (
    <button type={type} id={id} className={style.button}>
      {children}
    </button>
  );
}
