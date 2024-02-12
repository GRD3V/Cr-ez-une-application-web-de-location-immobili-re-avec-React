import "../styles/components/articleList.scss";
import { ArticleEntity } from "../types/entity/ArticleEntity";
import Article from "./Article";
export default function ArticleList(props: {
  readonly articleList: ArticleEntity[];
}) {
  return (
    <div className="article-list-container">
      <div className="article-list-content">
        <div className="article-grid-content">
          {props.articleList.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
