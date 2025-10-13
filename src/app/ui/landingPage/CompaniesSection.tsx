import React from "react";
import Image from "next/image";

const companies = [
  { name: "Microsoft", logo: "/assets/companies/microsoft.png" },
  { name: "Google", logo: "/assets/companies/google.png" },
  { name: "Safaricom PLC", logo: "/assets/companies/safaricom.png" },
  { name: "EABL", logo: "/assets/companies/eabl.png" },
  { name: "KICO", logo: "/assets/companies/kico.png" },
  { name: "Equity Bank", logo: "/assets/companies/equity.png" },
  { name: "KCB Bank", logo: "/assets/companies/kcb.png" },
  { name: "Kenya Airways", logo: "/assets/companies/kenya_airways.png" },
];

const CompaniesSection = () => {
  return (
    <section className="bg-white w-full py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-10">
          Follow in the footsteps of successful candidates from
        </h2>

        {/* Logos + Names Together */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-6 items-center justify-items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={company.logo}
                alt={`${company.name} Logo`}
                width={100}
                height={60}
                className="object-contain w-10 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12"
              />
              <span className="mt-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
