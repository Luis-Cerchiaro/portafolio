import { useTranslation } from "react-i18next";
import coderHero from "../assets/coderHero.svg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#2392d4ff] pb-2">
            {t("about-me")}
          </h2>

          <p className="pb-5">{t("about-description-01")}</p>
          <p className="pb-5">{t("about-description-02")}</p>

        </div>

        <div className="about-img">
          <img
            src={coderHero}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
