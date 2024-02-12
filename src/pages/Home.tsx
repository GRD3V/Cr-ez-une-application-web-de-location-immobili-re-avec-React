import "../styles/App.css";
import Hero from "../components/Hero";
import heroBgSrc from "../assets/img/sea-landspace.jpeg";
import ArticleList from "../components/ArticleList";
import { fetchAllProduct } from "../api/productApi";

function Home() {
  return (
    <>
      <Hero
        text="Chez vous, partout et ailleurs"
        srcImg={heroBgSrc}
        altImg=""
      />
      <ArticleList articleList={fetchAllProduct()} />
    </>
  );
}

export default Home;
