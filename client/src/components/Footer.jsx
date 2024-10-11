import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="newsletter">
        <h2>Abonnez-vous aux newsletters</h2>
        <input type="email" placeholder="Votre E-mail *" />
        <button type="button">S'abonner</button>
      </div>
      <div className="Help-about">
        <div className="Help">
          <h3>Besoin d'aide ?</h3>
          <hr />
          <p>Nous contacter</p>
          <p>Voir ou suivre vos commandes</p>
          <p>Aide pour vendre</p>
        </div>
        <div className="About">
          <h3>Pour mieux nous connaître :</h3>
          <p>Mentions légales</p>
          <p>Qui sommes nous ?</p>
          <p>Notre boutique</p>
        </div>
        <hr />
      </div>
      <div className="social-icons">
        <Link to="https://www.wildcodeschool.com/fr-fr/">
          <img src={facebook} alt="Icone de l'application facebook" />
        </Link>
        <Link to="https://www.wildcodeschool.com/fr-fr/">
          <img src={twitter} alt="Icone de l'application twitter" />
        </Link>
        <Link to="https://www.wildcodeschool.com/fr-fr/">
          <img src={instagram} alt="Icone de l'application instagram" />
        </Link>
      </div>
    </div>
  );
}
