import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Skills from "@/components/Home/Skills";

export default function Home() {
  return (
    <div>
      <div id="banner">
        <Banner />
      </div>
      <AboutMe />
      <Skills />
      <FeaturedProjects />
    </div>
  );
}
