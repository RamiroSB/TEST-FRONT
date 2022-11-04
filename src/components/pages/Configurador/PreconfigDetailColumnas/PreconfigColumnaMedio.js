import React,{useContext} from 'react'
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import '../ConfiguradorStyle.css'
import MapeoComponentes from './MapeoComponentes';
import { MarcaProcesadorContext } from '../ContextConfigurador/MarcaProcesadorContext';


export function PreconfigColumnaMedio() {
	const { param } = useParams();
    const { componentes } = useContext(MarcaProcesadorContext);

	// console.log(componentes);
	const imagen = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/preconfigurados/" + param + ".png";
	return (
		<>
			{!componentes
				? <div className="justify-content-center" id="faltaDeProductos">
					<Row className="d-none">
						<h3>NO HAY PRODUCTOS DISPONIBLES.</h3>
					</Row>
					<img className='img__columnaMedio' src={`${imagen}`} alt="" />
				</div>
				: <MapeoComponentes />
			}
		</>
	)
}
