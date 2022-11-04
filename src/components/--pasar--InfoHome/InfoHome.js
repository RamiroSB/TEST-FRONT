import React from 'react'
import "./InfoHomeStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const InfoHome = () => {
  return (
    <>
    
    <section id="caracteristicas" className="caracteristicas"><div className="width_wrap">
        
    <div className="titulo">El respaldo de la infraestructura más poderosa</div>
    
    <AnimationOnScroll animateIn="animate__fadeInRight">
    <div className="fila-carac">
        <div className="imagen"><img src="https://assets.hostinger.com/images/cloud-hosting-2022/simplicity-meeets-performance-img-1-dd04b857fb.svg" className="exclusivo" alt=""/>
        </div>

        <div className="texto">
        <h3 className="subtitulo">Pensado para tu proyecto</h3>
        <p className="parrafo">Con nuestro plan, obtendrás un servidor dedicado sólo para tu proyecto. No compartirás hardware con nadie más, por lo que podemos garantizar una conexión optima para tu empresa.</p>
        </div>
    </div>
    </AnimationOnScroll>


    <AnimationOnScroll animateIn="animate__fadeInLeft">

    <div className="fila-carac column-reverse">
        <div className="texto">
            <h3 className="subtitulo">Actualización y seguridad</h3>
            <p className="parrafo">El servicio incluye la actualización y aplicación de parches sobre el software pre-instalado en tu servidor, brindándole toda la seguridad y performance que tu negocio online necesita.
            </p>
        </div>
        <div className="imagen"><img src="https://assets.hostinger.com/images/cloud-hosting-2022/simplicity-meeets-performance-img-2-d7705627d0.svg" className="escudo" alt=""/>
        </div>
    </div>
    </AnimationOnScroll>


    {/* <AnimationOnScroll animateIn="animate__fadeInRight">
    <div className="fila-carac">
        <div className="imagen">
            <img src="https://images.donweb.com/img/servidores-dedicados/dedicados-maxima-disponibilidad.png" className="disponibilidad" alt=""/>
        </div>
    <div className="texto">
    <h3 className="subtitulo">Máxima disponibilidad</h3>
    <p className="parrafo">Nuestros datacenters, equipados con marcas de primer nivel, garantizan su optimo funcionamiento 24/7 y tu negocio estara siempre en linea.</p>
    </div>
    </div>
    </AnimationOnScroll> */}

    </div>
    </section>
    </>
  )
}
