import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';
import { ListadoContext } from './ContextConfigurador/ListadoContext';

export const MapeoOrder = ({ listadoResumen }) => {
    const { detallePreconfig, restaPrecios } = useContext(PreconfiguradoContext);
	const { listado, listadoResumenCompra } = useContext(ListadoContext);


    const cambiarNombreImagen = (Imagen) => {
        let nombre_imagen;
        if (Imagen && Imagen !== 0) {
            // Separo la extensión del archivo y agreo _th al final
            let nombre_img_split = (Imagen.substr(-4));
            // console.log(nombre_img_split);
            if(Imagen.includes("_th")){
                if (nombre_img_split.substr(0, 1) === '.') {
                    nombre_imagen = Imagen.substr(0, Imagen.length - 4);
                    nombre_imagen += '';
                    nombre_imagen += Imagen.substr(-4);
                } else {
                    nombre_imagen = Imagen.substr(0, Imagen.length - 5);
                    nombre_imagen += '';
                    nombre_imagen += Imagen.substr(-5);
                }
            }else{
                if (nombre_img_split.substr(0, 1) === '.') {
                    nombre_imagen = Imagen.substr(0, Imagen.length - 4);
                    nombre_imagen += '_th';
                    nombre_imagen += Imagen.substr(-4);
                } else {
                    nombre_imagen = Imagen.substr(0, Imagen.length - 5);
                    nombre_imagen += '_th';
                    nombre_imagen += Imagen.substr(-5);
                }
            }
            let imagenCambiada = 'https://www.solutionbox.com.ar/images/thumbs/articulos/' + nombre_imagen

            return imagenCambiada
        } else {
            let imgDefault = `${process.env.PUBLIC_URL}/imagenes/imagenes-configurador/imgdefault_th.jpg`;

            return imgDefault;
        }
    }

    const handleClick = (skuEliminarItem, precio, type) => {
        listadoResumen.forEach((element, index) => {
            if (element.Alias === skuEliminarItem) {
                restaPrecios(precio)
                listadoResumen.splice(index, 1)
                listado[type].splice(0,1)
                if(listadoResumenCompra[type]){
                    listadoResumenCompra[type].splice(0,1)
                }
                // document.getElementById('order__'+skuEliminarItem).classList.add("d-none");
            }
        })
        console.log(listadoResumenCompra);
        console.log(listado);
    }

    return (
        <>
            {listadoResumen.map((item) => (
                <div className={`row border `} style={{ borderRadius: "5px" }} key={item.Alias} id={`order__${item.Alias}`}>
                    <div className="col-sm-3 col-4 col-lg-3 col-md-2">
                        <Link id="" to='#' style={{ height: "144px", display: "flex", aliginItems: "center" }}>
                            <img src={`${cambiarNombreImagen(item.Imagen)}`} className="imagenProductoCompra img-fluid" style={{ margin: "auto" }} alt="" border="1" />
                        </Link>
                    </div>
                    <div className="col-sm-6 col-5 col-lg-7 col-md-7" style={{ display: "flex", alignItems: "center" }}>
                        <p>
                            <span id={`resumenCantidad_${item.Alias}`}>{item.Cantidad ? item.Cantidad : "1"} x </span>
                            {item.Descripcion} <br /> <span style={{ color: "red", fontWeight: 700 }}>{item.Moneda && item.Moneda} {item.Precio && item.Precio}</span>
                        </p>
                    </div>
                    {!detallePreconfig.find(art => art.Alias === item.Alias) &&
                        <div className='col-2' style={{ display: "flex",  }}>
                            
                            <i className="fa-solid fa-trash-can descliquearComponente" style={{ cursor: "pointer", display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: 'column' }} aria-hidden="true"
                                sku={`${item.Precio && item.Precio}`} onClick={() => handleClick(item.Alias, item.Precio && item.Precio, item.Tipo && item.Tipo)}>
                                <p className='mt-2' style={{fontSize: '14px', fontWeight: '100'}}>ELIMINAR</p>
                            </i>
                        </div>
                    }
                </div>
            ))}
        </>
    )
}
