import axios from "axios";

const fetchMangaAuthor = async (mangaId) => {
  try {
    const mangaResponse = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/mangas/${mangaId}`
    );

    const authorId = mangaResponse.data.author_id;

    const authorResponse = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/authors/${authorId}`
    );

    return {
      manga: mangaResponse.data,
      author: authorResponse.data,
    };
  } catch (error) {
    console.error("Error fetching manga and author:", error);
    throw error;
  }
};

export default fetchMangaAuthor;
