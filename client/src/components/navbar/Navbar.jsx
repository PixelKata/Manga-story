import { Link } from "react-router-dom";
import loupe from "../../assets/images/loupe.png";
import "../../styles/navbar.css";
import MenuBurger from "./MenuBurger";

export default function Navbar() {
  return (
    <nav>
      <section>
        <Link to="/">Accueil</Link>
        <Link to="/">Manga</Link>
      </section>
      <MenuBurger />
      <div className="search_box">
        <img src={loupe} alt="loupe" />
        <input type="text" placeholder="manga, titre ..." />
      </div>
      <section>
        {/* <button type="button" className="logout-button">
          Déconnexion
        </button> */}
        <Link to="/">Inscription</Link>
        <button type="button">Connexion</button>
      </section>
    </nav>
  );
}
