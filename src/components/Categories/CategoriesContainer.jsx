import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CategoriesCard from './CategoriesCard.jsx';
import './categories.css'


export default function CategoriesContainer() {
  return (
    <Box sx={{ flexGrow: 1 }} id="containerCategories">

      <h1 className='category-title'> Categorias </h1>
      
      <Grid container spacing={2} id="div-categories">
            <CategoriesCard/>
      </Grid>

    </Box>
  );
}
