import Image from "next/image";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:items-start justify-between py-24 gap-10">
   <Services/>
    </main>
  );
}
