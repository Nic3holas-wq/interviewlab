// src/app/data/interviewTypes.js
export interface InterviewType {
  name: string;
  description: string;
}

export const interviewTypes: InterviewType[] = [
  // 👨‍💻 Tech & Engineering
  { name: "Software Engineering", description: "Coding, algorithms, and system design questions" },
  { name: "Data Science", description: "Statistics, machine learning, and data interpretation" },
  { name: "Cybersecurity", description: "Network defense, threat analysis, and ethical hacking" },
  { name: "IT Support", description: "Technical troubleshooting and customer assistance" },
  { name: "Civil Engineering", description: "Structural analysis and project planning" },
  { name: "Mechanical Engineering", description: "Design principles, thermodynamics, and materials" },
  { name: "Electrical Engineering", description: "Circuit design, control systems, and signal processing" },

  // 💼 Business & Management
  { name: "Product Management", description: "Product vision, roadmaps, and leadership" },
  { name: "Project Management", description: "Scheduling, risk management, and coordination" },
  { name: "Human Resources", description: "Recruitment, communication, and HR policy" },
  { name: "Operations Management", description: "Process optimization and resource planning" },
  { name: "Business Analysis", description: "Requirements gathering, documentation, and process improvement" },

  // 📈 Marketing & Sales
  { name: "Marketing", description: "Creative campaigns, market strategy, and analytics" },
  { name: "Sales", description: "Negotiation, customer engagement, and closing deals" },
  { name: "Digital Marketing", description: "SEO, social media, and content marketing" },
  { name: "Public Relations", description: "Media relations, communication, and brand image" },

  // 💰 Finance & Accounting
  { name: "Finance", description: "Investment, budgeting, and financial analysis" },
  { name: "Accounting", description: "Bookkeeping, auditing, and tax compliance" },
  { name: "Banking", description: "Customer service, credit analysis, and loans" },
  { name: "Insurance", description: "Policy evaluation, risk management, and claims handling" },

  // 🧑‍🏫 Education & Training
  { name: "Teaching", description: "Classroom management and pedagogy" },
  { name: "Training & Development", description: "Employee skill development and e-learning" },
  { name: "Education Administration", description: "Leadership and curriculum planning" },

  // 🏥 Healthcare & Life Sciences
  { name: "Nursing", description: "Patient care, medical ethics, and clinical knowledge" },
  { name: "Medicine", description: "Diagnosis, treatment, and communication skills" },
  { name: "Pharmacy", description: "Pharmacology, drug interactions, and prescriptions" },
  { name: "Public Health", description: "Community health and policy management" },
  { name: "Biotechnology", description: "Research, lab safety, and molecular techniques" },

  // 🎨 Creative & Media
  { name: "Graphic Design", description: "Visual creativity and software proficiency" },
  { name: "UI/UX Design", description: "User research, wireframes, and interaction design" },
  { name: "Journalism", description: "Storytelling, interviewing, and fact-checking" },
  { name: "Video Production", description: "Editing, cinematography, and storytelling" },
  { name: "Photography", description: "Composition, lighting, and camera techniques" },

  // ⚖️ Law & Government
  { name: "Law", description: "Legal reasoning, research, and advocacy" },
  { name: "Public Administration", description: "Policy, governance, and leadership" },
  { name: "Law Enforcement", description: "Ethics, investigation, and situational judgment" },

  // 🌱 Environment & Agriculture
  { name: "Environmental Science", description: "Sustainability and resource management" },
  { name: "Agriculture", description: "Crop science, livestock, and agribusiness" },
  { name: "Forestry", description: "Conservation and ecosystem management" },

  // ✈️ Tourism, Hospitality & Service
  { name: "Hospitality Management", description: "Customer service and hotel operations" },
  { name: "Tourism", description: "Travel planning and destination management" },
  { name: "Customer Service", description: "Communication and problem-solving skills" },
  { name: "Aviation", description: "Flight operations, safety, and customer care" },

  // 🧰 Skilled Trades & Others
  { name: "Construction", description: "Site safety, planning, and teamwork" },
  { name: "Automotive", description: "Diagnostics, maintenance, and repair" },
  { name: "Fashion Design", description: "Trends, creativity, and material knowledge" },
  { name: "Culinary Arts", description: "Cooking skills, creativity, and time management" },
];

export default interviewTypes;
