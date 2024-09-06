import style from "./DeveloperCard.module.css";
import { developers } from "../developersInfo";

// type DeveloperCardProps = {
//   image: string;
//   name: string;
//   title: string;
//   description: string;
//   instagram: string;
//   github: string;
//   linkedin: string;
// };

export default function DeveloperCard() {
  return (
    <>
      <div className={style.card}>{
        developers.map( (dev) => (
          <h1>CARD {dev.name}</h1>
        ))        
        }</div>
    </>
  );
}
