import { useLoaderData, Link } from "react-router-dom";
import "../styles/homepage.css";

export default function Homepage() {
  const { result: mangas } = useLoaderData();

  const randomIndex = Math.floor(Math.random() * mangas.length);
  const randomManga = mangas[randomIndex];

  return (
    <div>
      <div className="reception">
        <div className="reception-content">
          <h1>{randomManga?.title}</h1>
          {randomManga?.cover_image && (
            <img
              src={`${import.meta.env.VITE_API_URL}/${randomManga.cover_image}`}
              alt={randomManga.title}
            />
          )}
          <p>{randomManga?.summary}</p>
          <Link to={`/manga-description/${randomManga.manga_id}`}>
            <button type="button">Voir plus</button>
          </Link>
        </div>
      </div>
      <div className="latest-releases">
        <h2>Dernière sortie</h2>
        <div className="manga-list">
          {mangas.slice(0, 5).map((manga) => (
            <div className="manga" key={manga.manga_id}>
              <Link to={`/manga-description/${manga.manga_id}`}>
                <img
                  src={`${import.meta.env.VITE_API_URL}/${manga.cover_image}`}
                  alt={manga.title}
                />
              </Link>
              <p>
                {manga.title}
                <br />
                Vol.{manga.volume_number}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
