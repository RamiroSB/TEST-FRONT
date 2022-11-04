import React from "react";
import { Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../products/ProductStyle.css'

export const ProductsMapOffice = ({product}) =>{
   
    return(
        <Container className='my-5 t'>
            <h1 className="titleProduct">NUESTROS PRODUCTOS</h1>
            <div className='cp'>
                
                {product.map( (article) =>(
                    <div key={article.id}>
                        <Card className="cardListProduct mt-5 mb-5">
                            <Card.Img variant="top" src={article.img} className="imagenListProduct" alt="img Product" />
                            <Card.Body className="cardBodyProduct">
                                
                                <div>
                                    <Card.Title className="tituloListProduct my-0">{article.id}</Card.Title>
                                </div>


                                <div className="contenedorButtonListProduct">
                                    <a href={article.url}>
                                        <Button className="buttonBuyItNow mt-3">Comprar ahora</Button>
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
            </div>
        </Container>

    )
}

