import style from "./Developers.module.css";
import { developers } from "./developersInfo"

export default function Developers() {

  return (
    <section className={style.developers}>
      <h2 className={style["team-title"]}>Time Amplexus Technology</h2>
      <div className={style.team}>
        {developers.map((dev) => (
          <div className={style.developer}>
            <img
              src={dev.image}
              alt={dev.alt}
              className={style["dev-picture"]}
            />
            <p className={style.name}>{dev.name}</p>
            <p className={style.rm}>{dev.rm}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
