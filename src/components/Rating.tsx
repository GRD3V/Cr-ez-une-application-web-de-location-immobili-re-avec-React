import "../styles/components/rating.scss";
import starIcon from "../assets/img/icons/star.svg";
import starFillIcon from "../assets/img/icons/star-fill.svg";
export default function Rating(props: { readonly rating: number }) {
  return (
    <div className="rating-container">
      <div className="rating-content">
        <img src={props.rating > 0 ? starFillIcon : starIcon} alt="" />
        <img src={props.rating > 1 ? starFillIcon : starIcon} alt="" />
        <img src={props.rating > 2 ? starFillIcon : starIcon} alt="" />
        <img src={props.rating > 3 ? starFillIcon : starIcon} alt="" />
        <img src={props.rating > 4 ? starFillIcon : starIcon} alt="" />
      </div>
    </div>
  );
}
