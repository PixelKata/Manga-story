import { useLoaderData } from "react-router-dom";

import "../styles/mangaDescription.css";

export default function MangaDescription() {
  const { manga, author } = useLoaderData();

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("fr-FR", options).format(
      new Date(dateString)
    );
  };

  return (
    <div className="description">
      <div className="cover_manga">
        <img
          src={`${import.meta.env.VITE_API_URL}/${manga.cover_image}`}
          alt={manga.title}
        />
      </div>
      <div className="description-content">
        <h1>
          {manga.title} vol.{manga.volume_number}
        </h1>
        <p>
          Auteur: {author.first_name} {author.last_name}
          <br />
          Née le: {formatDate(author.birth_date)}
        </p>
        <div className="summary">
          <h2>Résumé</h2>
          <p>{manga.description}</p>
        </div>
      </div>
    </div>
  );
}
