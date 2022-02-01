import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './categories.css'
import { Link } from 'react-router-dom';


export default function CategoriesCard() {

    const dataCategories = [
        {
            id: 1,
            categoria: "Frutos Secos",
            imagen: "https://s1.eestatic.com/2021/04/09/ciencia/nutricion/572454716_177733004_1706x1280.jpg"
        },
        {
            id: 2,
            categoria: "Legumbres",
            imagen: "https://dam.cocinafacil.com.mx/wp-content/uploads/2021/03/legumbres.jpg"
        },
        {
            id: 3,
            categoria: "Pastas",
            imagen: "https://casadiromavlc.com/wp-content/uploads/2019/08/tipos-de-pastas-y-salsas-cover.jpg"
        },
        {
            id: 4,
            categoria: "Leches",
            imagen: "https://thefoodtech.com/wp-content/uploads/2021/08/Leche-Vegetal.jpg"
        },
        {
            id: 5,
            categoria: "Semillas",
            imagen: "https://t1.ev.ltmcdn.com/es/posts/7/9/4/semillas_que_son_y_tipos_2497_orig.jpg"
        },
        {
            id: 6,
            categoria: "Galletitas",
            imagen: "https://www.ohmybowl.eu/wp-content/uploads/2017/07/galletitas-de-coco-7-1024x683.jpg"
        },
        {
            id: 7,
            categoria: "Pastas de mani",
            imagen: "https://www.hola.com/imagenes/cocina/recetas/20200213160551/receta-peanut-butter/0-783-47/peanut-butter-adobe-m.jpg"
        },
        {
            id: 8,
            categoria: "Cereales",
            imagen: "https://images.ecestaticos.com/9qL-kxMGXfOP6mln3lMNtCUWsG8=/60x0:1999x1451/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F536%2F331%2Fa5b%2F536331a5b20a2457e79a2bcf3573e2b8.jpg"
        },
        {
            id: 9,
            categoria: "Miel",
            imagen: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/04/08/606eca2e20018.r_d.2880-1920-0.jpeg"
        },
        {
            id: 10,
            categoria: "Snacks",
            imagen: "https://cdni.rt.com/actualidad/public_images/2016.03/article/56e59b6bc36188f6568b45e5.jpg"
        }
    ]

  return (

        <>
            {/* CARD 1 */}
           
            <a href='/categoria/frutossecos'>
            <Card sx={{ maxWidth: 250 }} className="category-card">
                <CardMedia component="img" height="250" image= {dataCategories[0].imagen}/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" id="categories-card-title"> {dataCategories[0].categoria} </Typography>
                    </CardContent>
            </Card>  
            </a>
         

            {/* CARD 2 */}
            <a href='/categoria/legumbres'> 
            <Card sx={{ maxWidth: 250 }} className="category-card">
                    <CardMedia component="img" height="250" image= {dataCategories[1].imagen}/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" id="categories-card-title"> {dataCategories[1].categoria} </Typography>
                    </CardContent>
            </Card> 
            </a>

            {/* CARD 3 */}
            <a href='/categoria/pastas'>
            <Card sx={{ maxWidth: 250 }} className="category-card">
                    <CardMedia component="img" height="250" image= {dataCategories[2].imagen}/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" id="categories-card-title"> {dataCategories[2].categoria} </Typography>
                    </CardContent>
            </Card> 
            </a>

            {/* CARD 4 */}
            <Card sx={{ maxWidth: 250 }} className="category-card">
                    <CardMedia component="img" height="250" image= {dataCategories[3].imagen}/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" id="categories-card-title"> {dataCategories[3].categoria} </Typography>
                    </CardContent>
            </Card> 

            {/* CARD 5 */}
            <a href='/categoria/semillas'>
            <Card sx={{ maxWidth: 250 }} className="category-card">
                    <CardMedia component="img" height="250" image= {dataCategories[4].imagen}/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" id="categories-card-title"> {dataCategories[4].categoria} </Typography>
                    </CardContent>
            </Card> 
            </a>

            {/* CARD 6 */}
            <Card sx={{ maxWidth: 250 }} className="category-card">
                    <CardMedia component="img" height="250" image= {dataCategories[5].imagen}/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" id="categories-card-title"> {dataCategories[5].categoria} </Typography>
                    </CardContent>
            </Card> 
           
           {/* CARD 7 */}
           {/* <Card sx={{ maxWidth: 250 }} className="category-card">
                    <CardMedia component="img" height="250" image= {dataCategories[6].imagen}/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" id="categories-card-title"> {dataCategories[6].categoria} </Typography>
                    </CardContent>
            </Card>  */}

            {/* CARD 8 */}
            {/* <Card sx={{ maxWidth: 250 }} className="category-card">
                    <CardMedia component="img" height="250" image= {dataCategories[7].imagen}/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" id="categories-card-title"> {dataCategories[7].categoria} </Typography>
                    </CardContent>
            </Card>  */}
           
        </>
  );
}
