'use client';

import Button from "@/app/components/Button";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What if I'm interviewing for a niche role or industry?",
    answer:
      "Our AI adapts to any role or industry by analyzing common questions and providing tailored feedback to make your preparation highly relevant.",
  },
  {
    question: "How is this different from practicing with a friend or mentor?",
    answer:
      "Unlike friends or mentors, our AI provides objective, data-driven feedback on your delivery, body language, and content, giving insights that are hard to notice otherwise.",
  },
  {
    question: "How does the AI feedback actually work?",
    answer:
      "Our AI analyzes your answers for clarity, structure, filler words, tone, and body language, giving you a detailed performance score and actionable suggestions.",
  },
  {
    question: "Is my interview practice data private and secure?",
    answer:
      "Absolutely! All your recordings and feedback are securely stored and only accessible to you. We never share your personal data.",
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "All you need is a device with a camera and microphone. Our platform works on desktop and mobile browsers.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-xl sm:text-4xl font-bold text-center mb-10 sm:mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-gray-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-xl sm:text-4xl font-bold text-center pt-9 sm:pt-18">Start making interviews fearless</h2>
      <div className="hidden sm:block text-center pt-3 sm:pt-6">
        <Button variant="primary" size="large">Get Started Now!</Button>
      </div>
      <div className="block sm:hidden text-center pt-3 sm:pt-6">
        <Button variant="primary" size="small">Get Started Now!</Button>
      </div>
    </section>
  );
};

export default FAQSection;
