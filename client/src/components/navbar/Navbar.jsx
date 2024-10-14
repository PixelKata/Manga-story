import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import loupe from "../../assets/images/loupe.png";
import "../../styles/navbar.css";
import MenuBurger from "./MenuBurger";
import { useAuth } from "../../context/authContext";
import fetchManga from "../../services/requestManga";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [mangas, setMangas] = useState([]);
  const [filteredMangas, setFilteredMangas] = useState([]);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  useEffect(() => {
    const getMangas = async () => {
      try {
        const response = await fetchManga();
        const allMangas = response.result;
        setMangas(Array.isArray(allMangas) ? allMangas : []);
      } catch (error) {
        console.error("Erreur lors de la récupération des mangas:", error);
      }
    };
    getMangas();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMangas([]);
    } else {
      setFilteredMangas(
        mangas.filter((manga) =>
          manga.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, mangas]);

  const handleResultClick = () => {
    setSearchQuery("");
    setFilteredMangas([]);
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
        <input
          type="text"
          placeholder="manga, titre ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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

      {filteredMangas.length > 0 && (
        <div className="search-results">
          {filteredMangas.map((manga) => (
            <Link
              key={manga.manga_id}
              to={`/manga-description/${manga.manga_id}`}
              onClick={handleResultClick}
            >
              {manga.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
