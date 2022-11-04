import React from 'react'
import "./Contactostyle.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const Contacto = () => {

    const handleSubmit = () => {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado con exito!',
            text: 'Muchas gracias por su mensaje, nos contactaremos a la brevedad!',
          }).then(function() {
            window.location = "/";
        });
    }
    

return (
    <div className="content">

        <h1 className='logo'>Contactanos!</h1>

        <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
                <h3>Contacto</h3>
                <form action={process.env.REACT_APP_MAILER_NSX + "mail"} method="POST" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre y Apellido</label>
                        <input type="text" name="nombre" required/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" required/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="tel" name="telefono" required/>
                    </p>
                    <p>
                        <label>Producto de interes</label>
                        <input type="text" name="interes" required/>
                    </p>
                    <p>
                        <label>Pais</label>
                        <input type="text" name="country" required/>
                    </p>
                    <p>
                        <label>Estado/Provincia</label>
                        <input type="text" name="state" required/>
                    </p>
                    <p className="block">
                        <label>Mensaje</label> 
                        <textarea name="mensaje" rows="1" required></textarea>
                    </p>

                    <button type="submit" className='enviaConsulta' id='botonSubmit'>Enviar consulta</button>

                </form>
            </div>
        </div>

    </div>

)
}
