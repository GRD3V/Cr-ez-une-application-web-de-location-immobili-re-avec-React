import "../styles/pages/product.scss";

import { useParams } from "react-router";
import { fetchProductById } from "../api/productApi";
import ErrorNotFound from "./ErrorNotFound";
import Carousel from "../components/Carousel";
import Tag from "../components/Tags";
import HostPerson from "../components/HostPerson";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

export default function Product() {
  const params = useParams();
  if (!params.productId) {
    return <ErrorNotFound />;
  }
  const product = fetchProductById(params.productId);
  if (!product) {
    return <ErrorNotFound />;
  }
  return (
    <div className="product-container">
      <div className="product-content">
        <Carousel imageList={product.pictures} />
        <div className="product-info">
          <div className="product-info-text">
            <div className="product-info-title">{product.title}</div>
            <div className="product-info-paragraph">{product.location}</div>
            <div className="product-info-text-tags">
              {product.tags.map((tag) => (
                <Tag key={tag} title={tag} />
              ))}
            </div>
          </div>
          <div className="product-info-person-rating">
            <HostPerson host={product.host} />
            <Rating rating={product.rating} />
          </div>
        </div>
        <div className="product-collapse">
          <div>
            <Collapse
              title="Description"
              textContent={product.description}
              initialState={true}
            />
          </div>
          <div>
            <Collapse
              title="Équipements"
              textContent={product.equipments}
              initialState={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
