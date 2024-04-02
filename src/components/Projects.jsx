import { useTranslation } from "react-i18next";

import weatherApp from "../assets/weatherApp.jpeg";
import infogalax from "../assets/infogalax.jpeg";
import userManager from "../assets/userManager.jpeg";
import pokedex from "../assets/pokedex.jpeg";
import rickAndMorty from "../assets/rickAndMorty.jpeg";

const Projects = () => {

  const { t } = useTranslation();

    const projects = [
        {
          img: infogalax,
          title: "Infogalax",
          desc: "A gallery of random facts about space. Built with Node.js, React, and CSS.",
          live: "https://melodic-narwhal-8705b8.netlify.app/",
          code: "https://github.com/Luis-Cerchiaro/entregable_1",
        },
        {
          img: weatherApp,
          title: "weatherApp",
          desc: "App to get the weather based in the user location, data from openweather. Built with Axios, Tailwind CSS and JavaScript.",
          live: "https://sweet-bonbon-4cb386.netlify.app/",
          code: "https://github.com/Luis-Cerchiaro/entregable_2",
        },
        {
          img: userManager,
          title: "User Manager",
          desc: "A basic user manager using AXIOS to read, post and edit an user, Built with Axios, Tailwind CSS and JavaScript.",
          live: "https://heartfelt-llama-14c6f5.netlify.app/",
          code: "https://github.com/Luis-Cerchiaro/entregable_4_V01",
        },
        {
          img: pokedex,
          title: "Pokedex",
          desc: "Just for fun!!! a pokedex for the pokemons trainers.  Built with Axios, Tailwind CSS, Redux, React-Router-DOM and JavaScript.",
          live: "https://celebrated-vacherin-2a519d.netlify.app/",
          code: "https://github.com/Luis-Cerchiaro/entregable_5",
        },
        {
          img: rickAndMorty,
          title: "Rick and Morty APP",
          desc: "Just for fun!!! a guide of all known dimmensions in Rick and Morty.  Built with Axios, Tailwind CSS and JavaScript.",
          live: "https://celebrated-vacherin-2a519d.netlify.app/",
          code: "https://github.com/Luis-Cerchiaro/entregable_3",
        },
        {
          img: movieApp,
          title: "Movie APP",
          desc: "An app built with a custom API to save and filter my favorites movies accordinging to genre, actors and directors",
          live: "https://jazzy-sunflower-26b2cf.netlify.app/",
          code: "https://gitlab.com/luisCerchiaro/moviesapp",
        },
        {
          img: webStore,
          title: "E-Commerce",
          desc: "An online web store with user creation and authentication",
          live: "https://frabjous-palmier-7e84a2.netlify.app/",
          code: "https://github.com/Luis-Cerchiaro/trabajo_final",
        },
      ];
  
      

    return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
    <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
      <div className="about-info mb-5">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#2392d4ff] pb-2">
        {t("projects-title")}
        </h2>

        <p className="pb-5">
        {t("projects-main")}
        </p>
      </div>

      <div className="about-img"></div>
    </div>

    <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
      {projects.map((project, i) => {
        return (
          <div className="relative" key={i}>
            <img src={project.img} alt={project.title} />
            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
              <p className="py-5 text-center font-bold px-2 text-white">
                {project.desc}
              </p>

              <div className="mx-auto">
                <a
                  href={project.live}
                  className="px-5 py-2 bg-blue-400 hover:bg-blue-700 mr-5 font-bold"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  className="px-5 py-2 bg-blue-400 hover:bg-blue-800 font-bold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
  )
}
export default Projects