import logoFacebook from "../../img/Facebook F.png";
import logoInstragram from "../../img/InstagramP.png";
import logoLinkedin from "../../img/LinkedInP.png";
import logoTikTok from "../../img/TikTok.png";
import logoX from "../../img/TwitterX.png";
import logoYoutube from "../../img/YouTube.png";
import logoAmplexus from "../../img/logoAmplexus.png";
import logoPorto from "../../img/poto-escuro.png";
import style from "./Footer.module.css";

export default function Footer() {
  const redesSociais: {id: string, link:string, img: string, alt: string}[] = [
    {
      id: "instagram",
      link: "https://instagram.com/porto",
      img: `${logoInstragram}`,
      alt: "Logo Instagram"
    },
    {
      id: "twitter",
      link: "https://twitter.com/portoseguro",
      img: `${logoX}`,
      alt: "Logo X"
    },
    {
      id: "tiktok",
      link: "https://tiktok.com/@portoseguro",
      img: `${logoTikTok}`,
      alt: "Logo TikTok"
    },
    {
      id: "linkedin",
      link: "https://linkedin.com/company/porto",
      img: `${logoLinkedin}`,
      alt: "Logo LinkedIn"
    },
    {
      id:"youtube",
      link: "https://youtube.com/portoseguro",
      img: `${logoYoutube}`,
      alt: "Logo Youtube"
    },
    {
      id:"facebook",
      link: "https://www.facebook.com/porto",
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
              <a href={rede.link} className={style.social} key={rede.id}>
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
