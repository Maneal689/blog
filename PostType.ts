export interface Tag {
  tag: string;
}

export interface Data {
  title: string;
  hero: string;
  date: string;
  tags: Tag[];
  desc: string;
  slug: string;
  excerpt: string;
}

export interface PostType {
  data: Data;
  content: string;
}
