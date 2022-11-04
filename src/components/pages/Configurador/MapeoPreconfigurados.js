import React from 'react'
import { Link } from 'react-router-dom'


export const MapeoPreconfigurados = ({ elemento }) => {
	let imagenPreconfigurado = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/preconfigurados/";

	return (
		<div key={"key"} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-8 col-10 d-flex borde m-3 preconfigurado" id={`${elemento.Alias}`}>
			<div className="row">
				<Link type='button'
					to={`/Detail/${elemento.Alias}`}
					className="btn-armarPc d-flex justify-content-center p-0">
					<img className='preconfigurado-img' data-alias={`${elemento.Alias}`} src={`${imagenPreconfigurado}/${elemento.Alias}.png`} alt='' />
				</Link>
			</div>
			<div className="showmodel_info__3X-AL d-flex align-items-baseline justify-content-between my-3">
				<div className="text-center">
					<div className="d-flex">
						<div className="ibp_stars">
							<div className="stars5">
								<img className='img-detalleRojo' src={`${process.env.PUBLIC_URL}/imagenes/imagenes-configurador/detalle_conf.png`} alt="stars5_new" aria-label="stars5_new"></img>
							</div>
						</div>
					</div>
				</div>
				<div className="showmodel_price_area__R4OSE precioTypo">
					<p className="showmodel_price__7wG1J preconfigurado-precio"><span>{elemento.Moneda} </span>{elemento.Precio}</p>
				</div>
			</div>
			<div className="row d-flex">
				<h6 className="arialFuente margenC">{elemento.Descripcion}</h6>
			</div>
			<div className="showmodel_specs__20gX_ arialFuente3">
				<div id={`${elemento.Comp[1].Alias}`}>{elemento.Comp[1] ? elemento.Comp[1].Descripcion : ""}</div>
				<div id={`${elemento.Comp[3].Alias}`}>{elemento.Comp[3] ? elemento.Comp[3].Descripcion : ""}</div>
				<div id={`${elemento.Comp[0].Alias}`}>{elemento.Comp[0] ? elemento.Comp[0].Descripcion : ""}</div>
				<div id={`${elemento.Comp[2].Alias}`}>{elemento.Comp[2] ? elemento.Comp[2].Descripcion : ""}</div>
				<div id={`${elemento.Comp[5].Alias}`}>{elemento.Comp[5] ? elemento.Comp[5].Descripcion : ""}</div>
				<div id={`${elemento.Comp[4].Alias}`}>{elemento.Comp[4] ? elemento.Comp[4].Descripcion : ""}</div>
			</div>
			<div className="row text-center d-grid gap-2 p-2 arialFuente">
				<Link
					type="button"
					to={`/Detail/${elemento.Alias}`}
					id="comenzar"
					data-alias={`${elemento.Alias}`}
					className="btn-armarPc btn btn-outline-dark">
					Lo quiero!
				</Link>
			</div>
		</div>
	)
}
