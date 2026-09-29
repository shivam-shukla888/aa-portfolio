export interface ExtracurricularItem {
  id: string;
  role: string;
  organizationOrEvent: string;
}

export const extracurricularList: ExtracurricularItem[] = [
  {
    id: "verve-secretary",
    role: "Secretary",
    organizationOrEvent: "Verve — Cultural Club of SRMS CET&R",
  },
  {
    id: "spandan-organizer",
    role: "Organizer",
    organizationOrEvent: "Spandan Cultural & Tech Fest",
  },
];
