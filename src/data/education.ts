export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  boardOrUniversity?: string;
}

export const educationList: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "B.Tech — Computer Science and Engineering",
    institution: "SRMS Engineering College",
    location: "Bareilly, Uttar Pradesh, India",
    period: "2022 — 2026",
  },
  {
    id: "senior-secondary",
    degree: "Senior Secondary",
    institution: "Police Modern School",
    location: "Bareilly, Uttar Pradesh, India",
    period: "2020",
    boardOrUniversity: "CBSE",
  },
];
