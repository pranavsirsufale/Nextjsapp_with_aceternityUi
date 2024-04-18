import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instrocturs from "@/components/Instrocturs";
import MusicSchooltestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ' >
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchooltestimonials/>
      <UpcomingWebinars/>
      <Instrocturs/>
    </main>
  );
}
