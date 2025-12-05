export interface NewsItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface StoryItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  location: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'report' | 'training' | 'video';
  category: string;
  downloadUrl?: string;
  viewUrl?: string;
}

export interface Stats {
  youthReached: string;
  familiesSupported: string;
  programsLaunched: string;
  communitiesServed: string;
}
