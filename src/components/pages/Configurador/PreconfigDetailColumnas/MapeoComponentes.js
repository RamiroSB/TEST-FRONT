/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import { MarcaProcesadorContext } from '../ContextConfigurador/MarcaProcesadorContext';
import { ListadoContext } from '../ContextConfigurador/ListadoContext';
import { PreconfiguradoContext } from '../ContextConfigurador/PreconfiguradoContext'
import { useParams } from 'react-router-dom';
import './ConfiguradorColumnasStyle.css';

const MapeoComponentes = () => {
	const { componentes, paso } = useContext(MarcaProcesadorContext);
	const { addComponentList, listado, addListadoPreconfigurado } = useContext(ListadoContext);
	const { sumaPrecios, price } = useContext(PreconfiguradoContext);
	const { param } = useParams();

	const cambiarNombreImagen = (imagen) => {
		let nombre_imagen;
		if (imagen && imagen !== 0) {
			// Separo la extensión del archivo y agreo _th al final
			let nombre_img_split = (imagen.substr(-4));
			// console.log(nombre_img_split);
			if (nombre_img_split.substr(0, 1) === '.') {
				nombre_imagen = imagen.substr(0, imagen.length - 4);
				nombre_imagen += '';
				nombre_imagen += imagen.substr(-4);
			} else {
				nombre_imagen = imagen.substr(0, imagen.length - 5);
				nombre_imagen += '';
				nombre_imagen += imagen.substr(-5);
			}
			let imagenCambiada = 'https://www.solutionbox.com.ar/images/thumbs/articulos/' + nombre_imagen

			return imagenCambiada
		} else {
			let imgDefault = `${process.env.PUBLIC_URL}/imagenes/imagenes-configurador/imgdefault_th.jpg`;

			return imgDefault;
		}
	}

	const handleClick = (paso, item, precio, param, price) => {
		sumaPrecios(precio, listado[paso])
		addComponentList(paso, item, param)
		addListadoPreconfigurado(param, price, paso, item)
	}

	return (
		<>
			{componentes && componentes.map((item) => (
				<div key={"componentes__" + item.Alias} className={`m-2 shadow componentesMedio p-3 bg-white fade-in rounded selected_${item.Alias}`}>
					<div className="row componentesMedioRow">
						<div className="col-xl-4 col-lg-12 px-0 componentesMedioColImagen">
							<div className="btn-verMas" onClick={() => handleClick(paso, item, item.Precio, param, price)} style={{ cursor: "pointer" }}>
								<img src={`${cambiarNombreImagen(item.Imagen)}`} alt="" className="btn-verMas" border="1"/>
							</div>
						</div>
						<div className="col-xl-8 col-lg-12 pl-0 pr-lg-0 componentesMedioColDesAliasPrecio">
							<div style={{ display: "flex", flexDirection: "row"}}>
								<div className="col-12">
									<p onClick={() => handleClick(paso, item, item.Precio, param, price)} className='componente__decripcion'>
										{`${item.Descripcion}`}
									</p>
									<br />
								</div>
							</div>
							<div className="row">
								<div className="col-12 componente__aliasPrecio">
									<p className="mb-0" style={{ fontSize: "15" }}>{`${item.Alias}`}</p>
									<span style={{ fontSize: "16", color: "#5a5a5a", fontWeight: "500" }}>
										{`${item.Moneda}`} {`${parseFloat(item.Precio).toFixed(2)}`}<br />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default MapeoComponentes