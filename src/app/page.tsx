import Image from "next/image";
import { LandingPage } from "./ui/landingPage/LandingPage";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <LandingPage/>
      </main>

    </div>
  );
}
