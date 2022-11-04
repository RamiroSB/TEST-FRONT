import React, { useContext } from 'react'
import "./ConfiguradorColumnasStyle.css";
import { ListadoContext } from '../ContextConfigurador/ListadoContext';
import Price from '../Price';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


export function PreconfigColumnaDer() {
	const imagenCategoria = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/";
	const { param } = useParams();
	const { listado, typeDetalle } = useContext(ListadoContext);

	let aComponentesAgregados = [];
	typeDetalle.forEach(element => {
		if(listado[element].length !== 0){
			aComponentesAgregados.push(listado[element]);
		}
	});
	let listadoPreconfigurado = []
	aComponentesAgregados.forEach(element => {
		element.forEach(item => {
			listadoPreconfigurado.push(item);
		})
	});

	return (
		<>
			<section className="armaTuPc mt-5 mr-2" id="armarTuPc__columnaDer">
				<div className="m-3 pl-3">
					<h6>Configuracion elegida</h6>
					<ul className="pl-0 border-bottom" id="listado-compra">
						{listadoPreconfigurado.length > 0 && listadoPreconfigurado.map((elemento) => (
							<li key={"preconfig_" + elemento.Alias}
								id={`compra_${elemento.Alias}`}>
								<p className="acomodoAltura">
									{elemento.Descripcion}
								</p>
							</li>
						))}
					</ul>
					<Price />
					<div className="d-grid gap-2 mt-2">
						<span className="d-inline-block tooltip-compra d-grid gap-2 mt-2" tabIndex="0" data-bs-placement="bottom" data-bs-toggle="tooltip"
							title="Se debe seleccionar mínimo: procesador, mother, ram, disco, fuente y gabinete">
							<Link to={`/Order/${param}`} type="button"  className="btn btn-outline-primary" id="comprar">Comprar</Link>
						</span>
					</div>
				</div>
				<div className="foto-publicidad">
					<img className='img__columna3' alt="" src={`${imagenCategoria}/banners/banner_chico_intel.jpg`} />
				</div>
			</section>
		</>
	)
};
