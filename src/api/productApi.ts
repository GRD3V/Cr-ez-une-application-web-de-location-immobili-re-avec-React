import { ArticleEntity } from "../types/entity/ArticleEntity";
import JSONData from "../data.json";

export function fetchAllProduct(): ArticleEntity[] {
  return JSONData.map((product) => ({
    ...product,
    rating: parseInt(product.rating),
  }));
}

export function fetchProductById(id: string): ArticleEntity | undefined {
  return fetchAllProduct().find((product) => product.id === id);
}
