import Hero from "../components/Hero";
import heroBgSrc from "../assets/img/ice-landspace.jpeg";
import Collapse from "../components/Collapse";
import "../styles/pages/a-propos.scss";

export default function APropos() {
  return (
    <>
      <Hero srcImg={heroBgSrc} altImg="" />
      <div className="collapse-list-container">
        <div className="collapse-container">
          <Collapse
            title="Fiabilité"
            textContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
        </div>
        <div className="collapse-container">
          <Collapse
            title="Respect"
            textContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className="collapse-container">
          <Collapse
            title="Service"
            textContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.²"
          />
        </div>
        <div className="collapse-container">
          <Collapse
            title="Sécurité"
            textContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </>
  );
}
