import logoFacebook from "../../img/Facebook F.png";
import logoInstragram from "../../img/Instagram.png";
import logoLinkedin from "../../img/LinkedIn.png";
import logoTikTok from "../../img/TikTok.png";
import logoX from "../../img/TwitterX.png";
import logoYoutube from "../../img/YouTube.png";
import logoAmplexus from "../../img/logoAmplexus.png";
import logoPorto from "../../img/poto-escuro.png";
import style from "./Footer.module.css";

export default function Footer() {
  const redesSociais: {link:string, img: string, alt: string}[] = [
    {
      link: "https://instagram.com/portoseguro",
      img: `${logoInstragram}`,
      alt: "Logo Instagram"
    },
    {
      link: "https://twitter.com/portoseguro",
      img: `${logoX}`,
      alt: "Logo X"
    },
    {
      link: "https://tiktok.com/portoseguro",
      img: `${logoTikTok}`,
      alt: "Logo TikTok"
    },
    {
      link: "https://linkedin.com/in/porto",
      img: `${logoLinkedin}`,
      alt: "Logo LinkedIn"
    },
    {
      link: "https://youtube.com/portoseguro",
      img: `${logoYoutube}`,
      alt: "Logo Youtube"
    },
    {
      link: "https://facebook.com/portoseguro",
      img: `${logoFacebook}`,
      alt: "Logo Facebook"
    },
  ];
  return (
    <div className={style.footer}>
      <div className={style["social-media"]}>
        <p className={style.title}>Siga nas redes sociais:</p>
        <ul>
          <li className={style["social-media__list"]}>
            {redesSociais.map((rede) => (
              <a href={rede.link} className={style.social}>
                {" "}
                <img src={rede.img} alt={rede.alt} />
              </a>
            ))}
          </li>
        </ul>
      </div>
      <div className={style.copyright}>
        <div className={style["copyright__company"]}>
          <img
            src={logoPorto}
            alt="Logo da Porto"
            className={style["company-logo"]}
          />
          <img
            src={logoAmplexus}
            alt="Logo da Amplexus"
            className={style["company-logo"]}
          />
        </div>
        <p className={style.copyright__text}>© 2024 Porto & FIAP</p>
      </div>
    </div>
  );
}
