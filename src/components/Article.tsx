import "../styles/components/article.scss";
import { ArticleEntity } from "../types/entity/ArticleEntity";
import { Link } from "react-router-dom";
export default function Article(props: { readonly article: ArticleEntity }) {
  return (
    <article className="article-container">
      <img src={props.article.cover} alt={props.article.title} />

      <Link
        className="article-content"
        to={`/product/${props.article.id}/${getIndexName(props.article.title)}`}
      >
        <p>{props.article.title}</p>
      </Link>
    </article>
  );
}

function getIndexName(name: string): string {
  return name.toLowerCase().replaceAll(" ", "-");
}
