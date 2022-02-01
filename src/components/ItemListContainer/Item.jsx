import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
// mport IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import accounting from "accounting";
import './ItemListContainer.css'

const Item = ({ prod }) => {

    // EXPAND 
    //const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };


    return (
        //     <div className="producto" key={prod.id} id={prod.id}>
        //         <img src={prod.foto} alt="imgproduct" className="imgProductos"/>
        //         <h4> {prod.name} </h4>
        //         <p className="descripcionProducto"> {prod.descripcion} </p>
        //         <p> ${prod.precio }</p>
        //         <Link to={`/item/${prod.id}`}>
        //             <button> Ver mas </button>
        //         </Link>
        //    </div>
        <>
            <Card sx={{ maxWidth: 300 }} className="item-producto" key={prod.id}>

                <CardHeader
                    title={<Typography fontSize={18}> {prod.name} </Typography>}
                    subheader={"Stock:" + prod.stock}
                />
                
                <CardMedia
                    component="img"
                    height="220"
                    image={prod.foto}
                    alt="Paella dish"
                />
                
                {/* <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {" "}
                        {prod.name}{" "}
                    </Typography>
                </CardContent> */}
                
                <CardActions disableSpacing id="card-bottom">
                    <Typography
                        className="precioCarta"
                        variant="h6"
                        color="textSecondary"
                    >
                        {accounting.formatMoney(prod.precio, "$")}

                        <span> /100g </span>
                    </Typography>
                    
                    {/* <IconButton aria-label="Add to Cart">
                        <AddShoppingCartIcon />
                    </IconButton> */}
                     
                     {/* <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>  */}

                    <Link to={`/item/${prod.id}`}>
                         <button className="item-producto-btn"> Ver mas </button>
                    </Link>
          
                    </CardActions>
                
                    {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph> {prod.descripcion} </Typography>
                        </CardContent>
                    </Collapse>  */}
        
            </Card>
        </>
    );
};

export default Item;

