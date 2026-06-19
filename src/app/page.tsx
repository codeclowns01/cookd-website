import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import GetStarted from "@/components/sections/GetStarted";
import EditorIntro from "@/components/sections/EditorIntro";
import RoastDemo from "@/components/sections/RoastDemo";
import PressClosed from "@/components/sections/PressClosed";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <GetStarted />
        <EditorIntro />
        <RoastDemo />
        <PressClosed />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
