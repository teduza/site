export interface StoryBlock {
  id: string;
  imageSrc: string | null;
  imageCaption: string;
  text: string;
  placeholderText: string;
}

export interface SiteData {
  title: string;
  intro: string;
  blocks: StoryBlock[];
  email: string;
}
