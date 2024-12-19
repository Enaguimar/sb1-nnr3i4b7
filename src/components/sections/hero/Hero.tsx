import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import Fireworks from './Fireworks';

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[100svh]">
        <HeroBackground />
        <Fireworks />
        <HeroContent />
      </div>
    </section>
  );
}