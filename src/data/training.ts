export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  type: string;
  skillsCovered: string[];
  description: string;
  credentialUrl?: string; // Real link if proof exists, otherwise undefined
}

export const technicalTraining: TrainingItem[] = [
  {
    id: "iitk-python-ds",
    title: "Python for Data Science",
    institution: "IIT Kanpur",
    year: "2025",
    type: "Summer Training Program",
    skillsCovered: [
      "Python programming",
      "OOP",
      "Data structures",
      "Exception handling",
      "Problem-solving",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Data analysis",
      "Data visualization",
    ],
    description:
      "Intensive institutional training program covering Python software fundamentals, algorithmic data structures, numerical analysis with NumPy, structured data processing with Pandas, and exploratory data visualization with Matplotlib.",
  },
];
