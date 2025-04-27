export interface Article {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  datePublished: string;
  content?: string;
  imageUrl?: string[];
}
