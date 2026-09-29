export interface AchievementItem {
  id: string;
  title: string;
  link?: string;
  linkText?: string;
}

export const achievements: AchievementItem[] = [
  {
    id: "leetcode-150",
    title: "Solved 150+ Data Structures and Algorithms Problems on LeetCode",
    link: "https://leetcode.com/u/Syyeda-Aamna/",
    linkText: "leetcode.com/u/Syyeda-Aamna",
  },
];
