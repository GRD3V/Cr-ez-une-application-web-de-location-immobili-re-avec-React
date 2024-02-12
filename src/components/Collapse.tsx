import { useState } from "react";
import "../styles/components/collapse.scss";
import arrowIcon from "../assets/img/icons/arrow-bottom.svg";
export default function Collapse(props: {
  readonly title: string;
  readonly textContent: string | string[];
  readonly initialState?: boolean;
}) {
  const [currentToggle, setCurrentToggle] = useState(
    props.initialState ?? false
  );
  function onToggle() {
    setCurrentToggle(!currentToggle);
  }

  return (
    <div className={`collapse${currentToggle ? " open" : ""}`}>
      <div className="collapse-content">
        <div className="collapse-header" onClick={onToggle}>
          <p className="collapse-title">{props.title}</p>
          <span className="collapse-arrow">
            <img src={arrowIcon} alt="" />
          </span>
        </div>
        <div className={`collapse-text`}>
          <p className="collapse-textContent">
            {typeof props.textContent === "string"
              ? props.textContent
              : props.textContent.map((line) => <span>{line}</span>)}
          </p>
        </div>
      </div>
    </div>
  );
}
