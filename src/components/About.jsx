import coderHero from "../assets/coderHero.svg";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
    <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
      <div className="about-info">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#2392d4ff] pb-2">
          About Me
        </h2>

        <p className="pb-5">
          Hi, My Name is Luis Cerchiaro. I am a Junior Frontend Developer. I build websites with React and
          Tailwind CSS.
        </p>
        <p className="pb-5">
          I am proficient in Frontend skills like React.js, Redux, Redux Tool
          Kit, Axios, Tailwind and many more.
        </p>

        <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

        <p>
          In my spare time I create YouTube videos and write blogs on my Blog.
          Where I talk about programming theory and build various projects.
        </p>
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
  )
}
export default About