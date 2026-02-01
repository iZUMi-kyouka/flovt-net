export const SITE_TITLE = "Flo's";
export const SITE_DESCRIPTION =
  `Florian's portfolio website to showcase my experience and skills.`.trim();

export const KNOWN_TECH =
  `Java,Go,TypeScript,React,Docker`.split(
    ",",
  );
export const NAME = "Florian Viorel Tanely";
export const ABOUT_ME =
  `Hello! I'm a computer science student at National University of Singapore (NUS) passionate about crafting solutions to solve real-world challenges.`.trim();
export const GITHUB_USERNAME = "iZUMi-kyouka";
export const QUOTE = "Software Engineer and Problem Solver";
export const NAV_LINKS: Array<{ title: string; href?: string }> = [
  {
    title: "Blog",
  },
];
export const EXPERIENCES = [
  {
    title: "Software Engineering",
    company: "Computing for Voluntary Welfare Organisations (CVWO)",
    type: "Internship",
    date: "May 2025 - August 2025",
    url: "https://www.comp.nus.edu.sg/~vwo/projects/2025-cms.html",
    description: [
      "Maintained CVWO's Case Management System (CMS) to accommodate evolving business needs",
      "Enhanced the system with new features and improvements to boost volunteer productivity",
      "Migrated and integrated the CMS into the modern, flexible Cornerstone platform to streamline user experience across beneficiaries",
      "Onboarded Haven Counselling Centre (HCC) to the system",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "National University of Singapore (NUS)",
    type: "Part-time",
    date: "August 2025 - November 2025",
    description: [
      "Taught a tutorial class of 6 students for the \"CS1101S Programming Methodology I\" course",
      "Prepared weekly tutorial slides and hold consultations with students",
      "Grade and provide feedback on their programming assignments",
    ],
  }
];