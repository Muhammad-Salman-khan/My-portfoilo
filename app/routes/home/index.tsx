import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome to my portfoilo" },
    { name: "description", content: "We Create best for you" },
  ];
}
export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
