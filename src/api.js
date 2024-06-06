import axios from "axios";

export const fetchBreeds = async () => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    return Object.keys(response.data.message);
  } catch (error) {
    console.error("Error fetching breeds:", error);
    return [];
  }
};

export const fetchBreedImages = async (breed) => {
  try {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images`
    );
    return response.data.message;
  } catch (error) {
    console.error(`Error fetching images for breed ${breed}:`, error);
    return [];
  }
};
