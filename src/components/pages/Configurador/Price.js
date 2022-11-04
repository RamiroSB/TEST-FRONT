import React, { useContext } from 'react'
import './Price.css'
import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';


export default function Price() {
	const { price } = useContext(PreconfiguradoContext);

	return (
		<>
			<span className="totalGastado" id="totalGastado" style={{fontSize: '25a2px'}}>
				PRECIO TOTAL $ {price.toFixed(2)}
			</span><br />
		</>
	)
}
