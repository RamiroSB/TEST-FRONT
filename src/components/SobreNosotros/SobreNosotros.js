import React from 'react'
import "./SobreNosotrosStyle.css"

export const SobreNosotros = () => {
  return (
    <>
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <span class="title">Sobre Nosotros!</span>
                  <h2>
                    Somos lideres <br />
                    en la industria, desde el año 1999
                  </h2>
                </div>
                <div class="text">
                  <p>
                    La propuesta de DVG reúne los servicios de consultoría e implementación en virtualización de servidores y Hosting para Email y Sitios Web.
                  </p>

                  <p>
                  Ayudamos a empresas en crecimiento con la necesidad de contar con la infraestructura suficiente para soportar el aumento de información, asegurar la continuidad operativa y, al mismo tiempo, facilitar la administración de los sistemas informáticos.
                  </p>

                  <p>
                  Una propuesta de servicio flexible y seguro, que permite adaptarse a los requerimientos de cada compañía; con equipamiento de última generación para sostener la dinámica del negocio y contribuir al uso eficiente de los recursos
                  </p>

                  <p>
                  Experiencia en la implementación y mantenimiento de tecnologías líderes. Servicio soportado por servidores y equipamiento de alta disponibilidad.
                  </p>
                </div>
                <h5><b>Nuestros servicios</b></h5>
                <ul class="list-style-one">
                  <li>Consultoría</li>
                  <li>Hosting</li>
                  <li>Servidores dedicados</li>
                  <li>Soporte corporativo</li>
                  <li>Virtualizacion de servidores</li>
                </ul>

                <div class="btn-box">
                  <a href="/contacto" class="theme-btn btn-style-one">
                    Contacto!
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft">
                <figure class="image-1">
                  <a href="/" class="lightbox-image" data-fancybox="images">
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/Proyecto%20nuevo.png"
                      alt=""
                    />
                  </a>
                </figure>
                <figure class="image-2">
                  <a href="/" class="lightbox-image" data-fancybox="images">
                    <img
                      src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/corporativos1.png"
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
