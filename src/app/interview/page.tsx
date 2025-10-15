'use client';
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { interviewTypes, InterviewType } from "@/app/data/interviewTypes";

export default function InterviewSelection() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Filter interview types based on search input
  const filteredTypes: InterviewType[] = interviewTypes.filter((type) =>
    type.name.toLowerCase().includes(search.toLowerCase())
  );

  // Popular types (shown when no search input)
  const popularTypes = [
    "Software Engineering",
    "Marketing",
    "Product Management",
    "Data Science",
    "Design",
    "Finance",
    "Agriculture"
  ];

  const displayTypes: InterviewType[] =
    search.trim() === ""
      ? interviewTypes.filter((t) => popularTypes.includes(t.name))
      : filteredTypes;

  const handleSelectType = (typeName: string) => {
    // Encode the type name to make it safe for URLs
    const encodedType = encodeURIComponent(typeName);
    router.push(`/record?type=${encodedType}`);
  };

  return (
    <main className="min-h-screen bg-white py-12 px-6 mt-[5%]">
      <h2 className="text-xl sm:text-3xl font-bold text-center mb-5 sm:mb-10 text-blue-700">
        Select Your Interview Type
      </h2>

      {/* Search Input */}
      <div className="max-w-lg mx-auto mb-2">
        <input
          type="text"
          placeholder="Enter your job role..."
          value={search}
          onChange={handleSearchChange}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Small Note */}
      {search.trim() === "" && (
        <p className="text-center text-sm sm:text-base mb-2 sm:mb-4 text-gray-500">
          Showing popular interview types. Search to explore more.
        </p>
      )}

      {/* Interview Type Cards */}
      <div className="grid sm:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
        {displayTypes.length > 0 ? (
          displayTypes.map((type) => (
            <div
              key={type.name}
              onClick={() => handleSelectType(type.name)}
              className="cursor-pointer bg-blue-50 border border-blue-200 rounded-xl p-6 shadow hover:bg-blue-100 transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
                {type.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{type.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No interview types found.
          </p>
        )}
      </div>
    </main>
  );
}
