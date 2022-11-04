import React from "react";
import { Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const ProductsMapDestacados = ({product}) =>{
    const urlPc1 = "https://www.amazon.com/-/es/Business-Computadora-escritorio-i3-10100-n%C3%BAcleos/dp/B0B9HMFNQG/ref=sr_1_5?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1BXBIKH3TCDD5&keywords=NSX+gaming&qid=1662129001&sprefix=nex+gaming%2Caps%2C93&sr=8-5"; /* PCI38GB250-2 */
    const urlPc2 = "https://www.amazon.com/-/es/Business-Computadora-escritorio-i3-10100-n%C3%BAcleos/dp/B0B9CGC1GN/ref=sr_1_7?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1BXBIKH3TCDD5&keywords=NSX+gaming&qid=1662129001&sprefix=nex+gaming%2Caps%2C93&sr=8-7";
    const urlPc3 = "https://www.amazon.com/dp/B0B9CZLHHN?ref=myi_title_dp";
    const urlPc4 = "https://www.amazon.com/dp/B0B88QLFCP?ref=myi_title_dp";
    const urlPc5 = "https://www.amazon.com/dp/B0B89YH1TC?ref=myi_title_dp";
    const urlPc6 = "https://www.amazon.com/dp/B0B8B74R86?ref=myi_title_dp";
    const aPcDescuento = ["PCI38GB250-1", "PCI38GB250-2", "PCR58GB250-1"] /* PCS QUE TIENEN DESCUENTOS */


    return(
        <Container className='mt-5 t'>
            <h2 className="titleProduct2">PRODUCTOS DESTACADOS</h2>
            <div className='cp2'>
                
                {product.map( (article) =>(
                    <div key={article.id} >
                    <Card className="cardListProduct mt-5 mb-5">
                        <Card.Img variant="top" src={article.img} className="imagenListProduct" alt="img Product" />
                        <Card.Body className="cardBodyProduct">
                          
                        <div>
                            {aPcDescuento.indexOf(article.id) !== -1 &&
                                <Card.Title className="tituloListProduct text-danger my-0">10% OFF</Card.Title> /* BUSCO EN EL ARRAY Y AGREGO CARTEL DE DESCUENTO */
                            }
                            <Card.Title className="tituloListProduct my-0">{article.Model}</Card.Title>
                        </div>
                        <div className="contenedorButtonListProduct">
                            <Link to={ `/productsDetails/${article.id}` }>
                                <Button variant="primary" className="mr-5 buttonMoreInfo">Mas info</Button>
                            </Link>
                            {/* <Link to="/contact"> */}
                            <a href={
                                article.id === "PCI38GB250-2" ? urlPc1
                                : article.id === "PCI38GB250-1" ? urlPc2
                                : article.id === "PCR58GB250-1" ? urlPc3
                                : article.id === "PGI5VNS4W-03" ? urlPc4
                                : article.id === "PGI5VNS4W-05" ? urlPc5
                                : article.id === "PGR7VNS4W-02" ? urlPc6
                                : "/contact"}>
                                <Button variant="success" className="buttonBuyItNow">Comprar ahora</Button>
                            </a>
                        </div>

                      </Card.Body>
                    </Card>
                </div>
                    )
                )
            }
            </div>
        </Container>

    )
}

