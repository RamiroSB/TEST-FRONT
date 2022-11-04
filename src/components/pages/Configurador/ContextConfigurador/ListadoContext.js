import React, { createContext } from 'react'

export const ListadoContext = createContext();

export const ListadoProvider = ({children}) => {
	const imagenCategoria = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/";
    
    let listado = { // TODO: TIPOCOMPONENTE => MINUSCULA
        'motherboard': [],
        'microprocesador': [],
        'cooler': [],
        'ram': [],
        'video': [],
        'disco': [],
        'licencia': [],
        'gabinete': [],
        'mouse': [],
        'teclado': [],
        'auricular': [],
        'fuente': [],
        'monitor': [],
        'silla': [],
        // 'armado': []
    }

    let listadoResumenCompra = { // PASO ESTE OBJETO PARA GENERAR EL PEDIDO
        'mouse': [],
        'teclado': [],
        'auricular': [],
        'licencia': [],
        'monitor': [],
        'silla': [],
        'skuPreconfigurado': [],
    }

    let typeDetalle = ["microprocesador", "motherboard", "ram", "disco", "fuente", "gabinete", "licencia", "monitor", "cooler", "auricular", "mouse", "teclado", "video", "silla"]; //TOD0S LOS COMPONENTES
    let agregados = ["licencia", "monitor", "auricular", "mouse", "teclado", "silla"]; //TOD0S LOS COMPONENTES

    const addListadoPreconfigurado = (param, price, tipoComponente, componente) => {
        if(listadoResumenCompra['skuPreconfigurado'].length === 0){
            listadoResumenCompra['skuPreconfigurado'].push({
                Alias: param,
                Moneda: '$',
                Precio: price,
            })
        }
        if(listadoResumenCompra[tipoComponente].length === 0){ //SI ES EL PRIMERO QUE ELIJO
            if(listadoResumenCompra[tipoComponente].length < 0){
                listadoResumenCompra[tipoComponente].push(componente);
            }else{
                listadoResumenCompra[tipoComponente] = []
                listadoResumenCompra[tipoComponente].push(componente);
            }
        }
        console.log(listadoResumenCompra);
    }

    const addComponentList = (tipoComponente, componente, param) => {
        let imagenAReemplazar;
        let rutaImg;
        let ulCategorias;
        if(typeof listado[tipoComponente][0] === "undefined" || listado[tipoComponente].length < 0){ //SI ES EL PRIMERO QUE ELIJO
            listado[tipoComponente].push(componente);
        }else{
            listado[tipoComponente] = []
            listado[tipoComponente].push(componente);
        }
        // if(typeof listadoResumenCompra[tipoComponente][0] === "undefined" || listadoResumenCompra[tipoComponente].length < 0){ //SI ES EL PRIMERO QUE ELIJO
        //     listadoResumenCompra[tipoComponente].push(componente);
        // }else{
        //     listadoResumenCompra[tipoComponente] = []
        //     listadoResumenCompra[tipoComponente].push(componente);
        // }

        /* AGREGANDO A MANO LOS COMPONENTES */
        imagenAReemplazar = document?.querySelector(`.${tipoComponente}Img`); //IMAGEN QUE QUIERO REEMPLAZAR
        imagenAReemplazar?.removeAttribute('src');
        rutaImg = imagenCategoria + `elegidos/${tipoComponente}Elegido.png`; //RUTA DE LA IMAGEN NUEVA
        imagenAReemplazar?.setAttribute('src', rutaImg);


        ulCategorias = document?.querySelector(`#paso_${tipoComponente}`);
        if (ulCategorias !== null) {
            if(componente.descripcion){
                ulCategorias.innerHTML = `<li>${componente.descripcion}</li>`;
            }else if(componente.Descripcion){
                ulCategorias.innerHTML = `<li>${componente.Descripcion}</li>`;
            }
        }
        /* AGREGANDO A MANO LOS COMPONENTES */
    }

    const initialDataListado = () => {
		typeDetalle.forEach((element)=> {
            listado[element] = [];
            if(listadoResumenCompra[element]){
                listadoResumenCompra[element] = []
            } 
        })
	}

    const dataListado = {
        listado,
        addComponentList,
        typeDetalle,
        initialDataListado,
        addListadoPreconfigurado,
        listadoResumenCompra,
        agregados
    }

    return(
        <ListadoContext.Provider value={dataListado}>
            {children}
        </ListadoContext.Provider>
    )
    
}