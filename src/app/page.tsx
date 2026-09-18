import { HeroFlight } from "@/components/sections/HeroFlight";
import { Hero } from "@/components/sections/Hero";
import { FieldNotebook } from "@/components/sections/FieldNotebook";
import { Research } from "@/components/sections/Research";
import { Species } from "@/components/sections/Species";
import { PublicationsBooks } from "@/components/sections/PublicationsBooks";
import { FieldPhotography } from "@/components/sections/FieldPhotography";
import { TeachingRecognition } from "@/components/sections/TeachingRecognition";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroFlight />
      <Hero />
      <FieldNotebook />
      <Research />
      <Species />
      <PublicationsBooks />
      <FieldPhotography />
      <TeachingRecognition />
      <Contact />
    </>
  );
}
