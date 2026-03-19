import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GallerySection />
      <BlogSection />
    </div>
  );
}
