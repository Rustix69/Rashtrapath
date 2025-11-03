"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const blogPosts = [
  {
    id: 1,
    title: "Breaking the Silence",
    description: "From street food to fine dining, uncover the diverse and delectable world of culinary delights.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Truth",
    date: "24 Jan 2024",
    readTime: "10 mins read",
    author: "Nathaniel Reginald",
  },
  {
    id: 2,
    title: "Path to Transparency",
    description: "Wander through ancient streets, visit iconic landmarks, and immerse yourself in the tales that shaped nations.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Reform",
    date: "20 Jan 2024",
    readTime: "8 mins read",
    author: "Percival Thaddeus",
  },
  {
    id: 3,
    title: "Democracy in Action",
    description: "Join us on a sustainable culinary voyage, exploring destinations that prioritize farm-to-table experiences.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Justice",
    date: "18 Jan 2024",
    readTime: "6 mins read",
    author: "Sebastian Montgomery",
  },
  {
    id: 4,
    title: "Navigating the Traveler's Lifestyle",
    description: "Dive into the world of balancing a vibrant travel lifestyle from managing work on the road to finding community.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lifestyle",
    date: "17 Jan 2024",
    readTime: "5 mins read",
    author: "Arabella Serenity",
  },
  {
    id: 5,
    title: "Essential Packing Hacks",
    description: "Uncover the secrets to efficient packing that will revolutionize your travel experience.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Tips & Hacks",
    date: "12 Jan 2024",
    readTime: "8 mins read",
    author: "Benjamin Augustus",
  },
  {
    id: 6,
    title: "Adrenaline-Pumping Adventures",
    description: "Join us on an exploration where heart-pounding activities await at every turn.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Adventure",
    date: "10 Jan 2024",
    readTime: "10 mins read",
    author: "Calista Gwendolyn",
  },
  {
    id: 7,
    title: "Justice for All",
    description: "Examining the pillars of a fair society and the pathways to meaningful reform.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Opinion",
    date: "8 Jan 2024",
    readTime: "7 mins read",
    author: "Marcus Hollington",
  },
  {
    id: 8,
    title: "Reform and Renewal",
    description: "A deep dive into systemic change initiatives and their impact on communities.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Analysis",
    date: "5 Jan 2024",
    readTime: "9 mins read",
    author: "Victoria Pembroke",
  },
  {
    id: 9,
    title: "Truth Unveiled",
    description: "Stories that make accountability a citizen's right and democracy stronger.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Investigation",
    date: "2 Jan 2024",
    readTime: "12 mins read",
    author: "Theodore Ashford",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Voices of the Nation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Stories that inspire, actions that matter.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-4 md:gap-y-4">
          {blogPosts.map((post) => (
            <CardContainer key={post.id} className="inter-var">
              <CardBody className="bg-white relative group/card hover:shadow-2xl dark:bg-black dark:border-white/20 border-black/10 w-full h-auto rounded-2xl overflow-hidden border">
                {/* Image with Category Badge */}
                <CardItem translateZ="100" className="w-full relative">
                  <Image
                    src={post.image}
                    height={1000}
                    width={1000}
                    className="h-56 w-full object-cover"
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </CardItem>

                {/* Content */}
                <div className="p-6">
                  {/* Date and Read Time */}
                  <CardItem translateZ="50" className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2"
                  >
                    {post.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ="50"
                    className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
                  >
                    {post.description}
                  </CardItem>

                  {/* Author */}
                  <CardItem translateZ="40" className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

