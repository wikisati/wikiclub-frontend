import Wrapper from '@/components/layout/Wrapper';
import HeroSection from '@/components/sections/HeroSection';
import EventsSection from '@/components/sections/EventsSection';
import AboutSection from '@/components/sections/AboutSection';
import CarouselSection from '@/components/sections/CarouselSection';
import FeedbackSection from '@/components/sections/FeedbackSection';
import FaqSection from '@/components/sections/FaqSection';

export default function HomePage() {
  return (
    <Wrapper>
      <HeroSection />
      <EventsSection />
      <AboutSection />
      <CarouselSection />
      <FeedbackSection />
      <FaqSection />
    </Wrapper>
  );
}
