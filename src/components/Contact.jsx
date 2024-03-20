import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-[#2392d4ff] pb-2">
          {t("contact-me")}
        </h2>

        <p>{t("contact-description")}</p>

        <p className="py-2">
          <span className="font-bold">{t("contact-email")} </span>{" "}luigicerchiaro@gmail.com
        </p>
        
      </div>
    </section>
  );
};
export default Contact;
