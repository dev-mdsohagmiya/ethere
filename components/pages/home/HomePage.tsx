import { BannerSection, BlogsSection, HeroSection } from "./sections";

function HomePage() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <BlogsSection />
      </div>

      <div>
        <BannerSection />
      </div>
    </div>
  );
}

export default HomePage;
