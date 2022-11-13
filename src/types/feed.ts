export interface Enclosure {
  url: string;
  width: string;
  height: string;
  medium: string;
}

export interface Thumbnail {
  url: string;
  medium: string;
  width: string;
  height: string;
}

export interface Media {
  thumbnail: Thumbnail;
}

export interface singleNews {
  title: string;
  description: string;
  link: string;
  author: string;
  published: number;
  created: number;
  category: string[];
  enclosures: Enclosure[];
  media: Media;
}
