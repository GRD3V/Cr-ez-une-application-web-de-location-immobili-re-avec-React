import "../styles/components/hostPerson.scss";
import { Host } from "../types/entity/Host";
export default function HostPerson(props: { readonly host: Host }) {
  const name = props.host.name.split(" ");
  return (
    <div className="host-container">
      <div className="host-content">
        <div className="host-name">
          <p>{name[0]}</p>
          <p>{name[1]}</p>
        </div>
        <img src={props.host.picture} alt={props.host.name} />
      </div>
    </div>
  );
}
