// types.ts

export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumelink: {
    url: string;
  };
  linkedinlink: string;
  profilesummary: string;
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate: Date;
  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  timelineType: 'work' | 'education';
  name: string;
  title: string;
  techStack: string;
  summary: string;
  dateRange: string;
}

export interface Project {
  title: string;
  description: string;
  techstack: string;
  image: {
    url: string;
  };
}


export interface Certification {
  title: string;
  issuer: string;
  issueddate: string;
  link: string;
  iconname: string;
}

export interface ContactMe {
  profilePicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}
export interface Photo {
  url: string;
  alt?: string;
}

export interface Photography {
  id: string;
  photos: Photo;
}