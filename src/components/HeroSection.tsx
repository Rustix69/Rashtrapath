'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    id: 1,
    image: "/hero/img01.png",
    category: "Truth",
    title: "Breaking the Silence: Stories That Need to Be Heard",
    description: "An investigation into civic injustice. This report unveils the truths that make accountability a citizen's right.",
  },
  {
    id: 2,
    image: "/hero/img02.png",
    category: "Reform",
    title: "The Path to Transparency: Challenging Corruption",
    description: "A deep dive into systemic issues. Understanding how reform can transform governance and empower communities.",
  },
  {
    id: 3,
    image: "/hero/img03.png",
    category: "Justice",
    title: "Voices from the Ground: Democracy in Action",
    description: "Real stories from citizens across the nation. Exploring how grassroots movements are shaping the future.",
  },
  {
    id: 4,
    image: "/hero/img04.png",
    category: "Opinion",
    title: "The Power of Public Discourse",
    description: "Examining how informed debate shapes policy and strengthens democratic institutions.",
  },
  {
    id: 5,
    image: "/hero/img05.png",
    category: "Analysis",
    title: "Data-Driven Democracy: Numbers Tell Stories",
    description: "Using evidence and research to understand the complexities of modern governance.",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Transitions */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        
         {/* Gradient Overlays */}
         <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
         <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content (perfectly centered) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto text-center px-6">

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {heroSlides[currentSlide].title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>
        </div>
      </div>



      {/* Bottom-centered Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center justify-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-transparent border-2 border-white/60 hover:border-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}