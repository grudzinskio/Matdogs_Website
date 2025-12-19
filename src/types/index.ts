export interface HomepageData {
  welcomeHeading: string;
  welcomeParagraph: string;
  registrationHeading: string;
  registrationText: string;
  ageGroups: AgeGroups;
  seasonInfo: string;
  season2026: Season2026;
  practiceInfo: string;
  sponsorHeading: string;
  sponsorText: string;
  sponsorLink: string;
  motto: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  author?: string;
  excerpt: string;
  category: string;
  image?: string;
  link?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
}

export interface AgeGroups {
  matpups: string;
  juniorMatdogs: string;
  seniorMatdogs: string;
}

export interface Season2026 {
  flyerLink: string;
  gearLink: string;
  registrationLink: string;
}
