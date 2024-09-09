import style from "./BackgroundBox.module.css";

type BackgroundBoxProps = {
  title: string;
  children: React.ReactNode;
};

export default function BackgroundBox({ title, children }: BackgroundBoxProps) {
  return (
    <section className={style.backgroundBox}>
      <h1 className={style["backgroundBox-title"]}>{title}</h1>
      {children}
    </section>
  );
}
