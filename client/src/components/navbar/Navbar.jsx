import { Link, useNavigate } from "react-router-dom";
import loupe from "../../assets/images/loupe.png";
import "../../styles/navbar.css";
import MenuBurger from "./MenuBurger";
import { useAuth } from "../../context/authContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <nav>
      <section>
        <Link to="/">Accueil</Link>
        <Link to="/all-mangas">Manga</Link>
      </section>
      <MenuBurger />
      <div className="search_box">
        <img src={loupe} alt="loupe" />
        <input type="text" placeholder="manga, titre ..." />
      </div>
      <section>
        {user ? (
          <>
            <button
              onClick={handleLogout}
              type="button"
              className="logout-button"
            >
              Déconnexion
            </button>
            <Link to="/">
              <img
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.username}`}
                alt={user.username}
                className="user-avatar"
              />
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">Inscription</Link>
            <button onClick={handleLogin} type="button">
              Connexion
            </button>
          </>
        )}
      </section>
    </nav>
  );
}
