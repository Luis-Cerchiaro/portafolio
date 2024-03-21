import { useTranslation } from "react-i18next";
import thinkerHeroImg from "../assets/thinkerHero.svg";
import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react"

const Hero = () => {
  const {t} = useTranslation();

  return (
    <section className="bg-primary px-5 text-white py-32">
    <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
      <div className="hero-info pb-5 md:pb-0">
        <h1 className="text-4xl lg:text-6xl">
          {t("hero-intro-00")}, <br />{t("hero-intro-01")} <span className="text-accent">L</span>uis <br />
          {t("hero-intro-02")} 
        </h1>

        <p className="py-5">
        {t("hero-description-00")}
        </p>

        <div className="flex py-5 ">
          <a
            href="https://twitter.com/cerchiaro_luis"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            <IconBrandX size={40} />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/luis-cerchiaro-4b2129191/"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            <IconBrandLinkedin size={40} />{" "}
          </a>
        </div>

        <a
          href="/#projects"
          className="btn bg-accent  border-2 border-[#2392d4ff] text-white px-6 py-3 hover:bg-transparent"
        >
          {t("hero-button-projects-00")}
        </a>
      </div>

      <div className="hero-img">
        <img
          src={thinkerHeroImg}
          alt="coding illustration"
          className="lgw-[80%] ml-auto"
        />
      </div>
    </div>
  </section>
  )
}
export default Hero