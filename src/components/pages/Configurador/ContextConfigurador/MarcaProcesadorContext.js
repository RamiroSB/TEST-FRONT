import React, { createContext, useState } from 'react'

export const MarcaProcesadorContext = createContext();

export const MarcaProcesadorProvider = ({children}) => {
    
    /* *********** EMPIEZA LOGICA DE MODAL Y ELECCION DE MARCA */
    const [marca, setMarca] = useState('')
    const [componentes, setComponentes] = useState('')
	// eslint-disable-next-line no-unused-vars
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
    const handleClickMarca = (e) => {
        handleShow();
		setMarca(e.target.value);
	}
    const initialDataMarca = () => {
		setMarca('');
        setComponentes('');
	}
    /* *********** TERMINA LOGICA DE MODAL Y ELECCION DE MARCA */

    /* ********** OBTENGO LOS DATOS DE LOS COMPONENTES */
    const [paso, setPaso] = useState('')
    const infoDidMount = (endpoint, componente) => {
        setPaso('')
        handleClickTraigoComponentes(endpoint);
        setPaso(componente)
    }
    
    const handleClickTraigoComponentes = async (endpoint) => {
        const url = `${process.env.REACT_APP_ENDPOINT_ENABLED_COMPONENTS}/${endpoint}?idCliente=23105&marca=${marca !== '' && marca}`;
        // const url = `${process.env.REACT_APP_ENDPOINT_ENABLED_COMPONENTS_LOCAL}/${endpoint}?idCliente=23105&marca=${marca !== '' && marca}`;
        const datos = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        })
        const obtengoDatos = await datos.json();
        setComponentes(obtengoDatos)
		return componentes; 
    }
    /* *********************************************** */

    const data = {
        marca,
        setMarca,
        handleClickMarca,
        initialDataMarca,
        infoDidMount,
        componentes,
        setShow,
        paso,
        setPaso
    }
    return(
        <MarcaProcesadorContext.Provider value={data}>
            {children}
        </MarcaProcesadorContext.Provider>
    )
}