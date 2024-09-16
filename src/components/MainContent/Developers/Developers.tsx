import style from "./Developers.module.css";
import logoInsta from "../../../img/Instagram92.png";
import logoGitHub from "../../../img/GitHub92.png";
import logoLinkedin from "../../../img/LinkedIn92.png";
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
            <h2 className={style.title}>Redes sociais</h2>
            <div className={style.socialMedia}>
              <a href={instagram} className={style.socialMediaLogo}>
                <img src={logoInsta} alt="" />
              </a>
              <a href={github} className={style.socialMediaLogo}>
                <img src={logoGitHub} alt="" />
              </a>
              <a href={linkedin} className={style.socialMediaLogo}>
                <img src={logoLinkedin} alt="" />
              </a>
            </div>
          </div>
        </DeveloperCard>
      </div>
    </section>
  );
}
