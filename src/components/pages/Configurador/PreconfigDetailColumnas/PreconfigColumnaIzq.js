import React, { useContext, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { PreconfiguradoContext } from '../ContextConfigurador/PreconfiguradoContext';
import { MarcaProcesadorContext } from '../ContextConfigurador/MarcaProcesadorContext';
import "./ConfiguradorColumnasStyle.css";

export default function PreconfigColumnaIzq({show, setShow}) {
	const { infoDetallePrecioPreconfigurado, ocultarCategoria, detallePreconfig } = useContext(PreconfiguradoContext);
	const { infoDidMount } = useContext(MarcaProcesadorContext);
	const { param } = useParams();
	const imagenCategoria = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/";

	const handeClick = (url, component) => {
		setShow(!show)
		infoDidMount(url, component);
	}

	useEffect(() => {
		infoDetallePrecioPreconfigurado(param);
		if (param !== "ArmarDeCero" && detallePreconfig !== []) {
			let imagenAReemplazar;
			let rutaImg;
			let ulCategorias;

			detallePreconfig?.map((itemPreconfig) => {

				/* COOLER */
				imagenAReemplazar = document?.querySelector(`.coolerImg`); //IMAGEN QUE QUIERO REEMPLAZAR
				imagenAReemplazar?.removeAttribute('src');
				rutaImg = imagenCategoria + "elegidos/coolerElegido.png"; //RUTA DE LA IMAGEN NUEVA
				imagenAReemplazar?.setAttribute('src', rutaImg);

				ulCategorias = document?.querySelector(`#paso_cooler`);
				ulCategorias.innerHTML = `<li>Incluido con el microprocesador</li>`;

				document.querySelector('#cooler').classList.add("disabledCategory")
				/* COOLER */

				if (itemPreconfig.alias === "100-90005KIT") {
					/* MOTHERBOARD */
					imagenAReemplazar = document?.querySelector(`.motherboardImg`); //IMAGEN QUE QUIERO REEMPLAZAR
					imagenAReemplazar?.removeAttribute('src');
					rutaImg = imagenCategoria + "elegidos/motherboardElegido.png"; //RUTA DE LA IMAGEN NUEVA
					imagenAReemplazar?.setAttribute('src', rutaImg);

					ulCategorias = document?.querySelector(`#paso_motherboard`);
					ulCategorias.innerHTML = `<li>Motherboard incluida con el microprocesador</li>`;
					document.querySelector('#motherboard').classList.add("disabledCategory")
					/* MOTHERBOARD */

					/* RAM */
					imagenAReemplazar = document?.querySelector(`.ramImg`); //IMAGEN QUE QUIERO REEMPLAZAR
					imagenAReemplazar?.removeAttribute('src');
					rutaImg = imagenCategoria + "elegidos/ramElegido.png"; //RUTA DE LA IMAGEN NUEVA
					imagenAReemplazar?.setAttribute('src', rutaImg);

					ulCategorias = document?.querySelector(`#paso_ram`);
					ulCategorias.innerHTML = `<li>Ram incluida con el microprocesador</li>`;
					document.querySelector('#ram').classList.add("disabledCategory")
					/* RAM */
				}
				if (itemPreconfig.Alias === "QB230S1XF" || itemPreconfig.Descripcion.includes("BRONCE", "bronce")) {
					/* FUENTE */
					imagenAReemplazar = document?.querySelector(`.fuenteImg`); //IMAGEN QUE QUIERO REEMPLAZAR
					imagenAReemplazar?.removeAttribute('src');
					rutaImg = imagenCategoria + "elegidos/fuenteElegido.png"; //RUTA DE LA IMAGEN NUEVA
					imagenAReemplazar?.setAttribute('src', rutaImg);

					ulCategorias = document?.querySelector(`#paso_fuente`);
					ulCategorias.innerHTML = `<li>Incluida con el gabinete</li>`;

					document.querySelector('#fuente').classList.add("disabledCategory")
					/* FUENTE */

				}
				/* LAS 4 LINEAS DE ABAJO CAMBIAN LA IMAGEN SI VIENE EN PRECONFIGURADO */
				imagenAReemplazar = document?.querySelector(`.${itemPreconfig.Tipo}Img`); //IMAGEN QUE QUIERO REEMPLAZAR
				imagenAReemplazar?.removeAttribute('src');
				rutaImg = imagenCategoria + "elegidos/" + itemPreconfig.Tipo + "Elegido.png"; //RUTA DE LA IMAGEN NUEVA
				imagenAReemplazar?.setAttribute('src', rutaImg);

				/* LAS LINEAS DE ABAJO AGREGAN LA DESCRIPCION EN PRECONFIGURADO */
				ulCategorias = document?.querySelector(`#paso_${itemPreconfig.Tipo}`);
				if (ulCategorias !== null && ulCategorias !== undefined) {
					ulCategorias.innerHTML = `<li>${itemPreconfig.Descripcion}</li>`;
				}
				return imagenAReemplazar;
			})
		}
	}, [infoDetallePrecioPreconfigurado, param, detallePreconfig, imagenCategoria])

	return (
		<section className="armaTuPc mt-5" id="componentesAElegir"> 
			<Row className="row__categorias">
				<div className="col-12 text-center col__categorias">
					<h6>ADICIONALES PARA TU PC</h6>
				</div>
				<Col md={10} lg={5} sm={6} xs={6}
					className={`traigo-datos my-0 mx-0 my-lg-1 border ${param !== "ArmarDeCero" ? ocultarCategoria("microprocesador", param) : ""}`}
					id="microprocesador" onClick={() => handeClick("getProcesadores", "microprocesador")}>
					<img className="imgPaso d-xl-block microprocesadorImg" src={`${imagenCategoria}microprocesador.png`} alt="" />

					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Procesador</p>
						<ul id="paso_microprocesador"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6}
					className={`traigo-datos my-0 mx-0 my-lg-1 border ${param !== "ArmarDeCero" ? ocultarCategoria("motherboard", param) : ""}`}
					id="motherboard" onClick={() => handeClick("getMotherboard", "motherboard")}>
					<img className="imgPaso d-xl-block motherboardImg" src={`${imagenCategoria}motherboard.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Motherboard</p>
						<ul id="paso_motherboard"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6}
					className={`traigo-datos my-0 mx-0 my-lg-1 border ${param !== "ArmarDeCero" ? ocultarCategoria("ram", param) : ""}`}
					id="ram" onClick={() => handeClick("getMemory", "ram")}>
					<img className="imgPaso d-xl-block  ramImg" src={`${imagenCategoria}ram.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Ram</p>
						<ul id="paso_ram"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6}
					className={`traigo-datos my-0 mx-0 my-lg-1 border ${param !== "ArmarDeCero" ? ocultarCategoria("disco", param) : ""}`}
					id="disco" onClick={() => handeClick("getStorage", "disco")}>
					<img className="imgPaso d-xl-block  discoImg" src={`${imagenCategoria}disco.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Almacenamiento</p>
						<ul id="paso_disco"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("fuente", param)}`}
					id="fuente" onClick={() => handeClick("getPowerSupply", "fuente")}>
					<img className="imgPaso d-xl-block  fuenteImg" src={`${imagenCategoria}fuente.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Fuente</p>
						<ul id="paso_fuente"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("gabinete", param)}`}
					id="gabinete" onClick={() => handeClick("getCase", "gabinete")}>
					<img className="imgPaso d-xl-block  gabineteImg" src={`${imagenCategoria}gabinete.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Gabinete</p>
						<ul id="paso_gabinete"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("video", param)}`}
					id="video" onClick={() => handeClick("getVideoCard", "video")}>
					<img className="imgPaso d-xl-block videoImg" src={`${imagenCategoria}video.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Placa de video</p>
						<ul id="paso_video"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("cooler", param)}`}
					id="cooler" onClick={() => handeClick("getProcessorCooling", "cooler")}>
					<img className="imgPaso d-xl-block  coolerImg" src={`${imagenCategoria}cooler.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Cooler</p>
						<ul id="paso_cooler"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("licencia", param)}`}
					id="licencia" onClick={() => handeClick("getLicenses", "licencia")}>
					<img className="imgPaso d-xl-block  licenciaImg" src={`${imagenCategoria}licencia.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Sistema Operativo</p>
						<ul id="paso_licencia"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("monitor", param)}`}
					id="monitor"
					onClick={() => handeClick("getMonitor", "monitor")}>
					<img className="imgPaso d-xl-block  monitorImg" src={`${imagenCategoria}monitor.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Monitor</p>
						<ul id="paso_monitor"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("teclado", param)}`}
					id="teclado" onClick={() => handeClick("getKeyboard", "teclado")}>
					<img className="imgPaso d-xl-block  tecladoImg" src={`${imagenCategoria}teclado.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Teclado</p>
						<ul id="paso_teclado"></ul>
					</Col>
				</Col>

				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("mouse", param)}`}
					id="mouse" onClick={() => handeClick("getMouse", "mouse")}>
					<img className="imgPaso d-xl-block  mouseImg" src={`${imagenCategoria}mouses.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Mouse</p>
						<ul id="paso_mouse"></ul>
					</Col>
				</Col>
				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("auricular", param)}`}
					id="auricular" onClick={() => handeClick("getHeadset", "auricular")}>
					<img className="imgPaso d-xl-block auricularImg" src={`${imagenCategoria}auricular.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Auriculares</p>
						<ul id="paso_auricular"></ul>
					</Col>
				</Col>
				<Col md={10} lg={5} sm={6} xs={6} className={`traigo-datos my-0 mx-0 my-lg-1 border ${ocultarCategoria("silla", param)}`}
					id="silla" onClick={() => handeClick("getSillas", "silla")}>
					<img className="imgPaso d-xl-block sillaImg" src={`${imagenCategoria}silla.png`} alt=""
					/>
					<Col xl={11} lg={8} className="pl-0 pl-sm-3 col-md-8 col-sm-8 col-3 descripcionProductoElegido px-3" align="left">
						<p className="mb-1">Silla Gamer</p>
						<ul id="paso_silla"></ul>
					</Col>
				</Col>

				<a href="/#" className="mt-3 img-intel-category">
					<img alt=""
						style={{ width: "100%" }} src={`${imagenCategoria}/banners/banner_intel.jpg`}
					/>
				</a>
			</Row>
		</section>
	)
}
