export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  isDeployed: boolean;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl: string;
  inProgress: boolean;
}

export interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}
