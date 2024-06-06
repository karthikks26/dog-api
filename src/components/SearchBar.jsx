import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
