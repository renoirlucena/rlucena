import About from "../src/components/About";
import Clients from "../src/components/Clients";
import CustomText from "../src/components/CustomText";
import Interests from "../src/components/Interests";
import { DefaultPageBanner } from "../src/components/PageBanner";
import ResumeSection from "../src/components/ResumeSection";
import Service from "../src/components/Service";
import {
  DesignSkills,
  KnowledgeSkills,
  LanguagesSkills,
} from "../src/components/Skills";
// import Team from "../src/components/Team";
import Testimonials from "../src/components/Testimonials";
import Layout from "../src/layout/Layout";
const Resume = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
  ];
  return (
    <Layout>
      {/* Section Started */}
      <DefaultPageBanner pageName={"Resume"} typingData={typingAnimation} />
      {/* Section About */}
      <About />
      {/* Section Service */}
      <Service />

      <ResumeSection />
      {/* Section Design Skills */}
      <DesignSkills />
      {/* Section Languages Skills */}
      <LanguagesSkills />
      {/* Section Knowledge Skills */}
      <KnowledgeSkills />
      {/* Section Interests */}
      <Interests />
      {/* Section Testimonials */}

    </Layout>
  );
};
export default Resume;
