import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Price from './Price';
import { ListadoContext } from './ContextConfigurador/ListadoContext';
import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';
import { useParams } from 'react-router-dom';
import './FormOrder.css'

export const FormOrder = ({listadoResumen, envio}) => {
	const { listado, listadoResumenCompra, /* agregados */ } = useContext(ListadoContext);
	const { price } = useContext(PreconfiguradoContext);
	const { param } = useParams();
	const [datosForm, setDatosForm] = useState(
		envio === 'envio' ?
		{
			name: '',
			lastName: '',
			email: '',
			dni: '',
			telefono: '', 
			calle: '',
			numero: '',
			provincia: '',
			localidad: '',
			codigoPostal: '',
			listado: listadoResumenCompra,
			precioTotal:"ARS $ " + price,
			aliasPreconfig: param,
			auricular: 'auricular',
			licencia: 'licencia',
			monitor: 'monitor',
			mouse: 'mouse',
			silla: 'silla',
			teclado: 'teclado',
			preconfigurado: 'preconfigurado'
		}
		:
		{
			name: '',
			lastName: '',
			email: '',
			dni: '',
			telefono: 'RETIRA', 
			calle: 'RETIRA',
			numero: 'RETIRA',
			provincia: 'RETIRA',
			localidad: 'RETIRA',
			codigoPostal: 'RETIRA',
			listado: listadoResumenCompra,
			precioTotal:"ARS $ " + price,
			aliasPreconfig: param,
			auricular: 'auricular',
			licencia: 'licencia',
			monitor: 'monitor',
			mouse: 'mouse',
			silla: 'silla',
			teclado: 'teclado',
			preconfigurado: 'preconfigurado'
		})

	const handleInputChange = (event) => {
		console.log(event.target.name);
		setDatosForm({
			...datosForm,
			[event.target.name] : event.target.value,
		})
	}


	/*---AURICULAR---*/
	let auricular;
	if(listado.auricular[0]){
		let aliasAuricular = datosForm.listado.auricular[0].Alias
		let descripcionAuricular = datosForm.listado.auricular[0].Descripcion;
		let valorAuricular = datosForm.listado.auricular[0].Precio;
		auricular =  `SKU ${aliasAuricular},   Descripcion: ${descripcionAuricular},    Valor ARS $ ${valorAuricular}`
	}

	/*---LICENCIA---*/
	let licencia
	if(listado.licencia[0]){
		let aliasLicencia = datosForm.listado.licencia[0].Alias
		let descripcionLicencia = datosForm.listado.licencia[0].Descripcion;
		let valorLicencia = datosForm.listado.licencia[0].Precio;
		licencia =  `SKU ${aliasLicencia},   Descripcion: ${descripcionLicencia},    Valor ARS $ ${valorLicencia}`
	}

	/*---MONITOR---*/
	let monitor
	if(listado.monitor[0]){
		let aliasMonitor = datosForm.listado.monitor[0].Alias
		let descripcionMonitor = datosForm.listado.monitor[0].Descripcion;
		let valorMonitor = datosForm.listado.monitor[0].Precio;
		 monitor =  `SKU ${aliasMonitor},   Descripcion: ${descripcionMonitor},    Valor ARS $ ${valorMonitor}`
	}

	/*---MOUSE---*/
	let mouse
	if(listado.mouse[0]){
		let aliasMouse = datosForm.listado.mouse[0].Alias
		let descripcionMouse = datosForm.listado.mouse[0].Descripcion;
		let valorMouse = datosForm.listado.mouse[0].Precio;
		 mouse =  `SKU ${aliasMouse},   Descripcion: ${descripcionMouse},    Valor ARS $ ${valorMouse}`
	}

	/*---SILLA---*/
	let silla
	if(listado.silla[0]){
		let aliasSilla = datosForm.listado.silla[0].Alias
		let descripcionSilla = datosForm.listado.silla[0].Descripcion;
		let valorSilla = datosForm.listado.silla[0].Precio;
		 silla =  `SKU ${aliasSilla},   Descripcion: ${descripcionSilla},    Valor ARS $ ${valorSilla}`
	}

	/*---TECLADO---*/
	let teclado
	if(listado.teclado[0]){
		let aliasTeclado = datosForm.listado.teclado[0].Alias
		let descripcionTeclado = datosForm.listado.teclado[0].Descripcion;
		let valorTeclado = datosForm.listado.teclado[0].Precio;
		 teclado =  `SKU ${aliasTeclado},   Descripcion: ${descripcionTeclado},    Valor ARS $ ${valorTeclado}`
	}
	/*---PRECONFIGURADO---*/
	let preconfigurado
	if(listado.preconfigurado){
		let aliasPreconfigurado = datosForm.listado.skuPreconfigurado[0].Alias
		let valorPreconfigurado = datosForm.listado.skuPreconfigurado[0].Precio;
		preconfigurado =  `SKU ${aliasPreconfigurado},   Valor ARS $ ${valorPreconfigurado}`
	}


	console.log(datosForm);

	/* const handleComprar = (event) => {
		event.preventDefault();
		console.log(datosForm);

	} */

	/* let name = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=340365869-f62cb597-6a0e-4e7a-aabf-ceb80a4836e5" */

	/* let handleClick = (e) => {
        e.preventDefault();
          window.location.href=name;
      } */

	return (
		<>
			<Form action="http://10.0.10.47:1551/contact" method="POST" className='mt-2 row fade-in-fwd' /* onSubmit={handleComprar} */>
				<div className='col-6'>
					<Form.Group className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control type="text" name="name" onChange={handleInputChange} placeholder="" required/>
						<Form.Text className="text-muted">
							
						</Form.Text>
					</Form.Group>
				</div>
				<div className='col-6'>
					<Form.Group className="mb-3">
						<Form.Label>Apellido</Form.Label>
						<Form.Control type="text" name="lastName" onChange={handleInputChange} placeholder="" required/>
						<Form.Text className="text-muted">
							
						</Form.Text>
					</Form.Group>
				</div>
				<div className='col-6'>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" name='email' pattern='^[^@\s]+@[^@\s]+\.[^@\s]+$' onChange={handleInputChange} placeholder="Coloque su email" required/>
						<Form.Text className="text-muted">
						</Form.Text>
					</Form.Group>
				</div>
				<div className='col-6'>
					<Form.Group className="mb-3" controlId="formBasicDni">
						<Form.Label>DNI</Form.Label>
						<Form.Control type="number" name='dni' pattern='[0-9]{3}' onChange={handleInputChange} placeholder="Coloque su DNI sin puntos" required/>
					</Form.Group>
				</div>
				<div className='col-6'>
					<Form.Group className="mb-3" controlId="formBasicPhone">
						<Form.Label>Telefono</Form.Label>
						<Form.Control type="number" name='telefono' pattern='[0-9]{3}' onChange={handleInputChange} placeholder="Ingrese su telefono" required/>
					</Form.Group>
				</div>

				{envio === 'envio' && 
					<>
						<div className='col-6'>
							<Form.Group className="mb-3" controlId="formBasicStreet">
								<Form.Label>Calle</Form.Label>
								<Form.Control type="text" name='calle' onChange={handleInputChange} placeholder="Coloque su direccion" required/>
								<Form.Text className="text-muted">
								</Form.Text>
							</Form.Group>
						</div>
						<div className='col-6'>
							<Form.Group className="mb-3" controlId="formBasicAddress">
								<Form.Label>Numero</Form.Label>
								<Form.Control type="number" name='numero' min={0} onChange={handleInputChange} placeholder="Numero de casa/departamento" required/>
							</Form.Group>
						</div>
						<div className='col-6'>
							<div className="mb-3">
								<Form.Label>Provincia</Form.Label>
								<Form.Select name='provincia' onChange={handleInputChange} className="mb-3 form-control">
									{/* <Form.Control type="select" name='provincia' onChange={handleInputChange} placeholder="Coloque su localidad" required/> */}
									<option disabled>Coloque su provincia</option>
									<option value="SALTA">SALTA</option>
									<option value="BUENOS_AIRES">BUENOS_AIRES</option>
									<option value="CAPITAL_FEDERAL">CAPITAL_FEDERAL</option>
									<option value="LA_RIOJA">LA_RIOJA</option>
									<option value="ENTRE_RIOS">ENTRE_RIOS</option>
									<option value="FORMOSA">FORMOSA</option>
									<option value="SANTIAGO_DEL_ESTERO">SANTIAGO_DEL_ESTERO</option>
									<option value="CHCACO">CHCACO</option>
									<option value="SAN_JUAN">SAN_JUAN</option>
									<option value="CATAMARCA">CATAMARCA</option>
									<option value="LA_PAMPA">LA_PAMPA</option>
									<option value="MENDOZA">MENDOZA</option>
									<option value="MISIONES">MISIONES</option>
									<option value="SAN_LUIS">SAN_LUIS</option>
									<option value="NEUQUEN">NEUQUEN</option>
									<option value="RIO_NEGRO">RIO_NEGRO</option>
									<option value="SANTA_FE">SANTA_FE</option>
									<option value="TUCUMAN">TUCUMAN</option>
									<option value="CHUBUT">CHUBUT</option>
									<option value="TIERRA_DEL_FUEGO">TIERRA_DEL_FUEGO</option>
									<option value="CORRIENTES">CORRIENTES</option>
									<option value="CORDOBA">CORDOBA</option>
									<option value="JUJUY">JUJUY</option>
									<option value="SANTA_CRUZ">SANTA_CRUZ</option>
								</Form.Select>
							</div>
						</div>
						<div className='col-6'>
							<Form.Group className="mb-3" controlId="formBasicBarrio">
								<Form.Label>Localidad</Form.Label>
								<Form.Control type="text" name='localidad' onChange={handleInputChange} placeholder="Coloque su localidad" required/>
								<Form.Text className="text-muted">
								</Form.Text>
							</Form.Group>
						</div>
						<div className='col-6'>
							<Form.Group className="mb-3" controlId="formBasicPostalCode">
								<Form.Label>Codigo Postal</Form.Label>
								<Form.Control type="number" name='codigoPostal' onChange={handleInputChange} placeholder="CP" required/>
							</Form.Group>
						</div>
					</>
				}


				{/* FORMULARIO OCULTO PARA ENVIAR INFORMACION CON NODEMAILER */}

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Control type="hidden" name='listado' value={listado && listado} onChange={handleInputChange}/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='precioTotal' value={price && price} onChange={handleInputChange}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='auricular' value={auricular && auricular} onChange={handleInputChange}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='licencia' value={licencia && licencia} onChange={handleInputChange}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='monitor' value={monitor && monitor} onChange={handleInputChange}/>
				</Form.Group>
				
				<Form.Group className="mb-3" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='mouse' value={mouse && mouse} onChange={handleInputChange}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='silla' value={silla && silla} onChange={handleInputChange}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='teclado' value={teclado && teclado} onChange={handleInputChange}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='preconfigurado' value={preconfigurado && preconfigurado} onChange={handleInputChange}/>
				</Form.Group> 


				<div className='container'>
					<span className="totalGastado" style={{ color: "#414042", fontWeight: "600" }} id="precioTotal">
						<Price />
					</span>
					<Button variant="outline-primary btn-block" type='submit' /* onClick={handleComprar} */>
						FINALIZAR COMPRA
					</Button>
				</div>
			</Form>

			<div className='mt-3 row'>
				<div className='col-6'>
					<Button href={`http://localhost:3000/Detail/${param}`} className='btn-block' id='reiniciarConfig' variant="danger" >REINICIAR CONFIGURACION</Button>
				</div>
				<div className='col-6'>
					<Button href={`http://localhost:3000/configurador`} className='btn-block' id='volverAEmpezar' variant="secondary">VOLVER A EMPEZAR</Button>
				</div>
			</div>
		</>
	)
}
