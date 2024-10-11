import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/allmanga.css";

export default function AllMangas() {
  const { result: mangas } = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredMangas, setFilteredMangas] = useState(mangas);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredMangas(mangas);
    } else {
      setFilteredMangas(
        mangas.filter(
          (manga) => manga.genre_id === parseInt(selectedCategory, 10)
        )
      );
    }
  }, [selectedCategory, mangas]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="All-mangas">
      <h1>Trier par catégorie :</h1>
      <div className="Filter">
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">Toutes</option>
          <option value="1">Shonen</option>
          <option value="2">Seinen</option>
          <option value="3">Isekai</option>
        </select>
      </div>

      <div className="Mangas-list">
        {filteredMangas.length > 0 ? (
          filteredMangas.map((manga) => (
            <div key={manga.manga_id} className="Mangas">
              <img
                src={`${import.meta.env.VITE_API_URL}/${manga.cover_image}`}
                alt={manga.title}
              />
              <p>
                {manga.title}
                <br />
                Vol. 1
              </p>
            </div>
          ))
        ) : (
          <p>Aucun manga trouvé dans cette catégorie.</p>
        )}
      </div>
    </div>
  );
}
