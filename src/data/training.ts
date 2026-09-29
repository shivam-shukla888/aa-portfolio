export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  type: string;
  skillsCovered: string[];
  description: string;
}

export const verifiedTraining: TrainingItem[] = [
  {
    id: "iitk-python-ds",
    title: "Python for Data Science",
    institution: "IIT Kanpur",
    year: "2025",
    type: "Summer Training",
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
      "Structured summer training in Python programming, algorithmic data structures, numerical analysis with NumPy, data frame operations with Pandas, and data visualization with Matplotlib.",
  },
];
