export interface IBanner {
  images: Image[];
  subtitle: string;
  title: string;
}

interface Image {
  url: string;
}