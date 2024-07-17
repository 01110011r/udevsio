import AboutServices from "../components/sections/AboutServices";
import Services from "../components/sections/Services";
import Team from "../components/sections/Team";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:items-start justify-between py-24 gap-12">
    <Services/>
    <Team/>
    <AboutServices/>
    </main>
  );
}
