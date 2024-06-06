// src/App.js
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  MenuItem,
  TextField,
} from "@mui/material";
import { fetchBreeds, fetchBreedImages } from "./api";
import ItemList from "./components/ItemList";
import "./App.css";

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBreeds = async () => {
      setLoading(true);
      const breedList = await fetchBreeds();
      setBreeds(breedList);
      setLoading(false);
    };
    getBreeds();
  }, []);

  useEffect(() => {
    const getImages = async () => {
      if (selectedBreed) {
        setLoading(true);
        const breedImages = await fetchBreedImages(selectedBreed);
        setImages(breedImages);
        setLoading(false);
      }
    };
    getImages();
  }, [selectedBreed]);

  return (
    <Box className="Container">
      <Typography variant="h4" gutterBottom>
        GoBananas Assignment
      </Typography>
      <TextField
        select
        label="Select Breed"
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
        variant="outlined"
        fullWidth
        style={{ marginBottom: "20px" }}
      >
        {breeds.map((breed) => (
          <MenuItem key={breed} value={breed}>
            {breed}
          </MenuItem>
        ))}
      </TextField>
      {loading ? <CircularProgress /> : <ItemList items={images} />}
    </Box>
  );
};

export default App;
