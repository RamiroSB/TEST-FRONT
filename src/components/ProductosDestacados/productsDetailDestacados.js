import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailMapDestacados } from "./productsDetailMapDestacados";
import { RequestDestacados } from '../helpers/requestDataDestacados'
import './ProductStyle.css'


export function ProductsDetailDestacados (){
    const [ product, setProduct ] = useState([])
    const { param } = useParams()

/* Function to validate the product, matching the category property with the url  */
        useEffect( ()=>{
            RequestDestacados()
                .then( (res) =>{
                    if (!param) {
                        setProduct(res)
                    } else {
                        // eslint-disable-next-line
                        setProduct( res.filter( article => article.id == param))
                    }
        }) 
}, [param])


    return(
        <>
            {<ProductDetailMapDestacados product={product}/>}
        </>
    )
}