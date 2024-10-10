import axios from "axios";

const fetchManga = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/mangas`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des mangas", error);
    throw error;
  }
};

export default fetchManga;
