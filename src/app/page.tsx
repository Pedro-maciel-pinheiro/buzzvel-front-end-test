import HomePage from "@/app/home/page";
import MaxWidth from "@/components/max-width";
import SwiperSlider from "@/components/swiper-slider";
import { CommunityShowcaseSection } from "@/app/home/components/mid-section";
import { BottomSection } from "@/app/home/components/bottom-section";



export default function Home() {
  // Home page components
  return (
    <MaxWidth className="">
      <HomePage />
      <SwiperSlider />
      <CommunityShowcaseSection />
      <BottomSection/>
    </MaxWidth>
  );
}
