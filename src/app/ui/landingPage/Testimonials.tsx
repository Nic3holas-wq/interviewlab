'use client'
import React from "react";
import Image from "next/image";

interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  role: string;
  photo: string; // New: path to user photo
}

const testimonials: Testimonial[] = [
  {
    rating: 4.5,
    quote:
      "I was trying to transition from marketing to product management and kept getting rejected. InterviewLab showed me exactly where I was going wrong - I was using too much marketing jargon and not enough data-driven language. After 4 practice sessions, I landed my first PM role at a tech startup.",
    name: "Priya M.",
    role: "Product Manager",
    photo: "/assets/testimonials/priya.jpg",
  },
  {
    rating: 4.0,
    quote:
      "I used to panic and speed through my answers in real interviews. The filler word counter and pace analysis helped me become aware of my nerves. Now I pause, breathe, and answer calmly. I went from 25 'ums' per session to just 2-3. Game changer.",
    name: "David L.",
    role: "Sales Director",
    photo: "/assets/testimonials/priya.jpg",
  },
  {
    rating: 4.5,
    quote:
      "As a developer, I could solve the coding challenges but kept bombing the behavioral questions. The AI feedback on my STAR method structure was brutal but honest. Finally understood why I wasn't passing the final rounds. Got an offer from Amazon after 2 weeks of practice.",
    name: "Sarah K.",
    role: "Senior Developer",
    photo: "/assets/testimonials/priya.jpg",
  },
  {
    rating: 4.5,
    quote:
      "Coming out of college with no interview experience, I was completely lost. InterviewLab gave me the confidence to actually articulate my projects and internships properly. The practice sessions felt so real that my actual interviews felt easier. 3 interviews, 2 offers!",
    name: "Marcus T.",
    role: "Business Analyst",
    photo: "/assets/testimonials/priya.jpg",
  },
];

interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => (
  <svg
    className="sm:w-5 sm:h-5 w-3 h-3 text-yellow-400 inline-block"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.431 8.21 1.192-5.939 5.788 1.402 8.172L12 18.896l-7.341 3.874 1.402-8.172L.122 9.21l8.21-1.192z" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl sm:text-5xl font-bold text-center text-purple-600 mb-12">
          What Our Users Say
        </h2>

        {/* Animated container */}
        <div className="relative overflow-hidden group">
          <div className="flex animate-scroll gap-4 sm:gap-8 group-hover:pause-animation">
            {testimonials.concat(testimonials).map((testimonial, index) => {
              const fullStars = Math.floor(testimonial.rating);
              const halfStar = testimonial.rating % 1 >= 0.5;
              const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

              return (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-2xl shadow hover:shadow-lg flex-shrink-0 w-72 sm:w-80 flex flex-col items-center"
                >
                  {/* User profile */}
                  <div className="flex justify-center gap-4 items-center mb-4">
                    <div className="sm:w-15 sm:h-15 w-10 h-10 relative">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-2">
                    {[...Array(fullStars)].map((_, i) => (
                      <Star key={`full-${i}`} filled />
                    ))}
                    {halfStar && <Star key="half" filled={false} />}
                    {[...Array(emptyStars)].map((_, i) => (
                      <Star key={`empty-${i}`} filled={false} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-sm sm:text-base mb-4 text-center">
                    <span>{testimonial.quote}</span>
                    
                  </p>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
