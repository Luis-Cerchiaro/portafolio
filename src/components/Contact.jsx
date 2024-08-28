import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto ">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-[#2392d4ff] pb-2 text-white">
          {t("contact-me")}
        </h2>

        <p className="text-white p-6">{t("contact-description")}</p>

        <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form
              action="https://public.herotofu.com/v1/671f4850-64e0-11ef-b56a-996140013c43"
              method="post"
              accept-charset="UTF-8"
            >
              <label className="block mb-6">
                <span className="text-white">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Luis Cerchiaro"
                />
              </label>
              <label className="block mb-6">
                <span className="text-white">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="luis_cerchiaro@hotmail.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-white">Message</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
            h-10
            px-5

            bg-[#2392d4ff]
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-[#235ed4]
          "
                >
                  Contact Us
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
