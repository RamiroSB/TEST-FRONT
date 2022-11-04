import React from 'react'
import "./BannerPrincipalStyle.css"
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const BannerPrincipal = () => {
	return (
		<div className='imgBannerPrincipal'>

			<Carousel fade className='noMostrarMobile'>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/testVi/bannerWebVi1.png"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/testVi/bannerWebVi2.png"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>
				
				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={"https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/testVi/bannerWebVi3.png"}
							alt="imagen slider"
						/>
					</Link>
				</Carousel.Item>

			</Carousel>
			<div style={{height:"30% !important"}}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#222" fill-opacity="1" d="M0,64L18.5,58.7C36.9,53,74,43,111,58.7C147.7,75,185,117,222,128C258.5,139,295,117,332,106.7C369.2,96,406,96,443,112C480,128,517,160,554,160C590.8,160,628,128,665,112C701.5,96,738,96,775,117.3C812.3,139,849,181,886,170.7C923.1,160,960,96,997,90.7C1033.8,85,1071,139,1108,186.7C1144.6,235,1182,277,1218,261.3C1255.4,245,1292,171,1329,128C1366.2,85,1403,75,1422,69.3L1440,64L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
			</div>
		</div>
	)

}
