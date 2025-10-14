'use client'
import Button from '@/app/components/Button'
import Image from 'next/image';
import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const illustrations = [
  {
    src: '/assets/illustrations/interview-stress.svg',
    title: 'Nervous before interviews?',
    caption: 'Most candidates feel anxious and forget their answers.',
  },
  {
    src: '/assets/illustrations/ai-coach.svg',
    title: 'Meet your AI coach',
    caption: 'Practice in a safe, judgment-free environment.',
  },
  {
    src: '/assets/illustrations/confidence.svg',
    title: 'Build unstoppable confidence',
    caption: 'Perform naturally and fearlessly in any interview.',
  },
];

const TransformSection = () => {
  const { data: session } = useSession();
      const router = useRouter();
    
      const handleStartClick = () => {
        if (session) {
          router.push("/interview"); // Redirect if logged in
        } else {
          router.push("/signin"); // Otherwise go to sign in
        }
      };
  return (
    <main className="text-center px-6 pt-5 sm:pt-10">
      <h2 className="text-xl sm:text-4xl font-bold mb-4">
        Transform your interview experience
      </h2>
      <p className="text-gray-600 mb-10 sm:text-lg">
        From anxious to confident — in just a few practice sessions.
      </p>

      {/* Illustrations section */}
      <section className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12">
        {illustrations.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition transform hover:scale-105 w-64 sm:w-72 p-6 flex flex-col items-center"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={160}
              height={160}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.caption}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <div className="mt-8 block sm:hidden">
        <Link href={"/interview"}>
            <Button 
            variant="primary" size="small">
            Start Your Transformation
          </Button>
        </Link>
        
      </div>
      <div className="mt-8 hidden sm:block">
        <Link href={"/interview"}>
        <Button
          variant="primary" size="large">
            Start Your Transformation
        </Button>
        </Link>
        
      </div>
    </main>
  );
};

export default TransformSection;
