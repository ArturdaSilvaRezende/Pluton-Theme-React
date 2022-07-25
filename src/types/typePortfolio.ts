export type Portfolio = {
  id: number;
  title: string;
  client: string;
  skills: string;
  link: string;
  desc: string;
  category: string[];
  img: string;
  filtered?: boolean;
};
