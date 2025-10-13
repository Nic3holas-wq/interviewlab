import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Smart Question Generator",
    description:
      "Get role-specific, behavioral, and technical questions powered by AI.",
    image: "/assets/illustrations/ai-questions.svg",
  },
  {
    title: "Delivery & Communication Analytics",
    description:
      "Get feedback on tone, filler words, pace, and enthusiasm.",
    image: "/assets/illustrations/communication.svg",
  },
  {
    title: "Realistic Interview Environment",
    description:
      "Simulate real interviews with multiple interviewer formats.",
    image: "/assets/illustrations/interview-environment.svg",
  },
  {
    title: "Body Language Insights",
    description:
      "Analyze your posture, eye contact, and facial expressions.",
    image: "/assets/illustrations/body-language.svg",
  },
  {
    title: "Instant Performance Reports",
    description:
      "View your progress, personalized improvement plans, and scores.",
    image: "/assets/illustrations/performance-report.svg",
  },
  {
    title: "Personalized Improvement Plan",   // <-- added
    description:
      "Receive a tailored plan with targeted exercises for your weakest areas and a clear path to improvement.",
    image: "/assets/illustrations/improvement-plan.svg",
  },
];

const Features = () => {
  return (
    <main className="py-8 sm:py-16 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-xl sm:text-5xl font-bold text-[#7C3AED] mb-4">
          Powerful Features, Simple to Use
        </h2>
        <p className="text-gray-600 text-sm sm:text-lg mb-12">
          Practice smarter, improve faster, and gain confidence with every session.
        </p>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition text-center"
            >
              <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Features;
