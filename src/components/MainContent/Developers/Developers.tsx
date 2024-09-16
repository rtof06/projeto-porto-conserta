import style from "./Developers.module.css";
import { useState } from "react";
import DeveloperCard from "./DeveloperModal/DeveloperCard";

type DevelopersProps = {
  name: string;
  rm: string;
  img: string;
  alt: string;
  linkedin: string;
  github: string;
  instagram: string;
};

export default function Developers({
  name,
  rm,
  img,
  alt,
  github,
  instagram,
  linkedin,
}: DevelopersProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <section className={style.developers}>
      <div className={style.developer} key={rm}>
        <img
          src={img}
          alt={alt}
          className={style["dev-picture"]}
          onClick={() => {
            setIsModalVisible(true);
          }}
        />
        <p className={style.name}>{name}</p>
        <p className={style.rm}>{rm}</p>
      </div>
      <div className={style.modal}>
        <DeveloperCard
          isOpen={isModalVisible}
          setModalOpen={() => setIsModalVisible(!isModalVisible)}
        >
          <div className={style.content}>
            <a href={instagram} className={style.socialMedia}>Instagram</a>          
            <a href={github} className={style.socialMedia}>GitHub</a>          
            <a href={linkedin} className={style.socialMedia}>LinkedIn</a>          
          </div>
        </DeveloperCard>
      </div>
    </section>
  );
}
