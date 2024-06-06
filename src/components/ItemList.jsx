// src/components/ItemList.js
import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";

const ItemList = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              image={item}
              alt={`Dog ${index}`}
              height="200"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
