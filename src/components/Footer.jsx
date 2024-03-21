import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="flex py-4 justify-center bg-primary">
      <a
        href="https://react.dev/"
        className="pr-4 inline-block text-accent hover:text-white"
      >
        <IconBrandReact size={40} />
      </a>

      <a
        href="https://tailwindcss.com/"
        className="pr-4 inline-block text-accent hover:text-white"
      >
        <IconBrandTailwind size={40} />
      </a>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        className="pr-4 inline-block text-accent hover:text-white"
      >
        <IconBrandJavascript size={40} />
      </a>

      <a
        href="https://nodejs.org/en"
        className="pr-4 inline-block text-accent hover:text-white"
      >
        <IconBrandNodejs size={40} />
      </a>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        className="pr-4 inline-block text-accent hover:text-white"
      >
        <IconBrandCss3 size={40} />
      </a>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        className="pr-4 inline-block text-accent hover:text-white"
      >
        <IconBrandHtml5 size={40} />
      </a>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        className="pr-4 inline-block text-accent hover:text-white"
      ></a>

    </div>
  );
};
export default Footer;
