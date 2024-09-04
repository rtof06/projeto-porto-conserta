import style from "./Footer.module.css";
import logoInstragram from "../../img/Instagram.png"
import logoX from "../../img/TwitterX.png"
import logoTikTok from "../../img/TikTok.png"
import logoLinkedin from "../../img/LinkedIn.png"
import logoYoutube from "../../img/YouTube.png"
import logoFacebook from "../../img/Facebook F.png"
import logoPorto from "../../img/poto-escuro.png"
import logoAmplexus from "../../img/logoAmplexus.png"

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style["social-media"]}>
        <p className={style.title}>Siga nas redes sociais:</p>
        <ul>
         <li className={style["social-media__list"]}>
            <a href="https://instagram.com/portoseguro" className={style["social-media__link instagram"]}><img src={logoInstragram} alt="logo do Instragram}" /></a>
            <a href="https://twitter.com/portoseguro" className={style["social-media__link twitter"]}><img src={logoX} alt="logo do X" /></a>
            <a href="https://tiktok.com/portoseguro" className={style["social-media__link tiktok"]}><img src={logoTikTok} alt="logo do TikTok" /></a>
            <a href="https://linkedin.com/in/porto" className={style["social-media__link linkedin"]}><img src={logoLinkedin} alt="logo do Linkedin" /></a>
            <a href="https://youtube.com/portoseguro" className={style["social-media__link youtube"]}><img src={logoYoutube} alt="logo do Youtube" /></a>
            <a href="https://facebook.com/portoseguro" className={style["social-media__link facebook"]}><img src={logoFacebook} alt="logo do Facebook" /></a>
         </li>
        </ul>
      </div>
      <div className={style.copyright}>
         <div className={style["copyright__company"]}>
            <img src={logoPorto} alt="Logo da Porto" className={style["company-logo"]} />
            <img src={logoAmplexus} alt="Logo da Amplexus" className={style["company-logo"]} />
         </div>         
         <p className={style.copyright__text}>© 2024 Porto & FIAP</p>
      </div>
    </div>
  );
}
