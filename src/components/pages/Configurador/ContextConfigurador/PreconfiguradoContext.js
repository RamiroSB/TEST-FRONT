import React, { useEffect, useState, createContext } from "react";
export const PreconfiguradoContext = createContext();
export const PreconfiguradoProvider = ({ children }) => {

	const [preconfigurados, setPreconfigurados] = useState([]);
	const [detallePreconfig, setDetallePreconfig] = useState([]);
	const [price, setPrice] = useState(0);
	const url = process.env.REACT_APP_ENDPOINT_ENABLED_COMPONENTS + '/getPreConfigurados/6683';

	useEffect(() => {
		obtenerDatos()
			.then((res) => {
				res.map((item, index) => {
					// if(item.Precio === 0){ /* SI EL PRECONFIGURADO VIENE CON PRECIO 0 NO LO MUESTRO */
					// 	res.splice(index, 1)
					// }
					return item;
				})  
				setPreconfigurados(res)
			})
			.catch((e) => {
				console.log(e)
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const obtenerDatos = async () => {
		const datos = await fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json'
			},
		})
		const dataPreconfigurado = await datos.json()
		return dataPreconfigurado
	}
	const initialData = () => {
		setDetallePreconfig([]);
		setPrice(0)
	}

	const sumaPrecios = (precio, listadoPaso) => {
		let mapListado = '';
		mapListado = listadoPaso.map((item, index) => {
			return item.Precio
		})
		if (price !== 0) {
			if(listadoPaso.length === 0){
				setPrice(price + precio)
			}else{
				setPrice((price - mapListado[0]) + precio)

			}
		}
	}

	const restaPrecios = (precio) => {
		setPrice(price - precio)
	}

	const infoDetallePrecioPreconfigurado = (param) => {
		if (param !== "ArmarDeCero") {
			preconfigurados.map((element) => {
				if (element.Alias === param) {
					setDetallePreconfig(element.Comp)
					if (price === 0) {
						setPrice(element.Precio)
					}
				}
				return detallePreconfig
			})
		}
	}

	const ocultarCategoria = (item, param) => {
		if (param !== "ArmarDeCero") {
			if (detallePreconfig?.find(componente => componente.Tipo === item)) {
				return "disabledCategory";
			} else {
				return "";
			}
		}
	}
	const data = {
		preconfigurados,
		setPreconfigurados,
		infoDetallePrecioPreconfigurado,
		detallePreconfig,
		setDetallePreconfig,
		ocultarCategoria,
		price,
		setPrice,
		initialData,
		sumaPrecios,
		restaPrecios
	}
	return (
		<PreconfiguradoContext.Provider value={data}>
			{children}
		</PreconfiguradoContext.Provider>
	)

}
