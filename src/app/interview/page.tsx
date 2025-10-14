'use client';
import React from "react";
import { useRouter } from "next/navigation";

const interviewTypes = [
  { name: "Software Engineering", description: "Coding & system design questions" },
  { name: "Marketing", description: "Creative and strategic problem-solving" },
  { name: "Product Management", description: "Product thinking and leadership" },
];

export default function InterviewSelection() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white py-12 px-6 mt-[5%]">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Select Your Interview Type
      </h2>
      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {interviewTypes.map((type) => (
          <div
            key={type.name}
            onClick={() => router.push("/record")}
            className="cursor-pointer bg-blue-50 border border-blue-200 rounded-xl p-6 shadow hover:bg-blue-100 transition"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{type.name}</h3>
            <p className="text-gray-600">{type.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
