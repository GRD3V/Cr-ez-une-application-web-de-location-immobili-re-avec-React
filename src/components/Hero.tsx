import "../styles/components/hero.scss";
export default function Hero(props: {
  readonly text?: string;
  readonly srcImg: string;
  readonly altImg: string;
}) {
  return (
    <div className="hero">
      <div className="hero-content">
        <img className="hero-bg" src={props.srcImg} alt={props.altImg} />
        <div className="hero-text">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
