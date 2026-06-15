import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import EditorIntro from "@/components/sections/EditorIntro";
import RoastDemo from "@/components/sections/RoastDemo";
import HowItWorks from "@/components/sections/HowItWorks";
import FourDesks from "@/components/sections/FourDesks";
import HeatIndex from "@/components/sections/HeatIndex";
import FrontPage from "@/components/sections/FrontPage";
import PressClosed from "@/components/sections/PressClosed";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <EditorIntro />
        <RoastDemo />
        <HowItWorks />
        <FourDesks />
        <HeatIndex />
        <FrontPage />
        <PressClosed />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
