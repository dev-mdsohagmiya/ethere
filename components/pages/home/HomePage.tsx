import { BlogsSection, HeroSection } from "./sections";

function HomePage() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <BlogsSection />
      </div>
    </div>
  );
}

export default HomePage;
