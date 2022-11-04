import React from 'react'
import "./BannerBodyStyle.css"

export const BannerBody = () => {
  return (
    /* <div className='mb-5 mt-3 contenedorBanner'>
      <a id='catalogo' href={process.env.PUBLIC_URL+`catalogo/catalogo_nsx.pdf`} download='catalogo_nsx.pdf'><img src={"https://www.nsx.com.ar/archivos/banners/es/bannerWebNSX1200x200.jpg"} alt="Imagen banner"></img></a>
    </div> */

    <div>
      <h1 className="titulo">BIENVENIDOS A ...</h1> <br/>
      <div className='mb-5 mt-3 contenedorBanner'>
        <img src={"https://odoocdn.com/openerp_website/static/src/img/2018/documents/documents_3.jpg"} alt="Imagen banner"></img>
      </div>
    </div>

    
  )
}
