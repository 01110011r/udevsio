import AboutServices from "../components/sections/AboutServices";
import Clients from "../components/sections/Clients";
import ContactUs from "../components/sections/ContactUs";
import HowWeWork from "../components/sections/HowWeWork";
import Portfolio from "../components/sections/Portfolio";
import Services from "../components/sections/Services";
import Team from "../components/sections/Team";
import Tools from "../components/sections/Tools";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:items-start justify-between py-24 gap-12">
    <Services/>
    <Team/>
    <AboutServices/>
    <Tools/>
    <Clients/>
    <Portfolio/>
    <HowWeWork/>
    <ContactUs/>
    </main>
  );
}
