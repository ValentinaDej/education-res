export interface Contact {
  type: string;
  value: string;
  icon: string;
  link?: string;
}

export interface Education {
  year: string;
  course: string;
  institution: string;
}

export interface Link {
  name: string;
  url: string;
}

export interface Skill {
  value: string;
  color: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface About {
  name: string;
  position: string;
  description: string;
}

export interface Profile {
  name: string;
  position: string;
  description: string;
  contact: Contact[];
  skills: Skill[];
  education: Education[];
  links: Link[];
  languages: Language[];
}
