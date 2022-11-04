import React, { useContext, useState } from 'react'
import { ListadoContext } from './ContextConfigurador/ListadoContext';
import { MapeoOrder } from './MapeoOrder';
import { FormOrder } from './FormOrder';
import EnvioRetira from './EnvioRetira';
import './OrderStyle.css'

export default function Order() {
	const { listado, typeDetalle } = useContext(ListadoContext);
	// const [ envioRetira, setEnvioRetira ] = useState(true)
	const [envio, setEnvio] = useState('')

	let aComponentesAgregados = [];
	let listadoResumen = []
	typeDetalle.forEach(element => {
		if (listado[element].length !== 0) {//SI ESTA EN EL LISTADO LO SUMO AL ARRAY DE COMPONENTES AGREGADOS
			aComponentesAgregados.push(listado[element]);
		}
	});
	aComponentesAgregados.forEach(element => {
		element.forEach(item => {
			listadoResumen.push(item);
		})
	});

	// console.log(listadoResumen);

	return (
		<div className="container-fluid">
			<div className="row" style={{ justifyContent: "space-evenly" }}>
				<div className="col-md-5 p-3" style={{ display: "block" }}>
					<div className="col-12">
						<h2>DETALLE DE TU PC NSX</h2>
					</div>
					<div className="col-12" id="resumenCompra">
						<MapeoOrder listadoResumen={listadoResumen}/>
					</div>
				</div>
				<div className="col-md-6">
					<h2 className='mt-3'>INGRESE SUS DATOS</h2>
					<div className="col-12 mt-4 mb-5" id='formulario'>

						{envio === '' 
							? <EnvioRetira envio={envio} setEnvio={setEnvio}/>
							: <FormOrder listadoResumen={listadoResumen} envio={envio} className=''/>
						}
					</div>
				</div>
			</div>
		</div>
	)
}