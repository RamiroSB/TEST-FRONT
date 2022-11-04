import React from 'react'
import './EnvioRetira.css';

const EnvioRetira = ({envio, setEnvio}) => {

    const handleClick = (parameter) => {
        setEnvio(parameter);
        // console.log(typeof(envio));
    }

  return (
    <div className='row'>
        <button className="col-12 border form-control envioRetira" onClick={()=>handleClick("envio")}>
            <img src="https://img.icons8.com/small/32/000000/truck.png" alt='mionca'/>
            <p className='mb-0 ml-3'>ENVÍO</p>
        </button>
        <button className="col-12 border form-control envioRetira" onClick={()=>handleClick("retira")}>
            <img src="https://img.icons8.com/small/32/000000/shop.png" alt='casita'/>
            <p className='mb-0 ml-3'>RETIRA</p>
        </button>
    </div> 
  ) 
}

export default EnvioRetira