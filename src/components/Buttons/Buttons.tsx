import style from "./Buttons.module.css";

type ButtonsProps = {
  type?: "submit" | "reset" | "button";
  id: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  title?: string
  children: React.ReactNode;
};

export default function Buttons({
  type,
  id,
  onClick,
  disabled,
  title,
  children,
}: ButtonsProps) {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={style.button}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
