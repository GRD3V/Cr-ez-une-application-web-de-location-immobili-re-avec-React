import { Host } from "./Host";

export type ArticleEntity = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: number;
  location: string;
  equipments: string[];
  tags: string[];
};
