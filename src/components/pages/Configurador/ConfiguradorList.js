import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Loader } from "../../Loader/Loader";
// import ArmarDeCero from './ArmarDeCero'
import { Row } from 'react-bootstrap'
import { MapeoPreconfigurados } from './MapeoPreconfigurados'
import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';
import './ConfiguradorStyle.css';

export function Configurador() {
    const [loading, setLoading] = useState(false);
    const { preconfigurados } = useContext(PreconfiguradoContext);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

     
    return (
        <>
            {loading
                ? <Loader />
                : <Container fluid>
                    <div className="text-center gamingpc_section_title__NTPKC">
                        {/* <div>PCs gamers armadas y testeadas por expertos</div> */}
                        <div>En construccion!</div>
                        <img src='https://static9.depositphotos.com/1228953/1153/i/600/depositphotos_11530836-stock-photo-under-construction.jpg' alt='construccion'/>
                        <hr/>

                    
                    </div>
                    <Row className="row justify-content-center" id="configurador">
                        {preconfigurados.map((preconfigurado) => {
                            return (
                                <MapeoPreconfigurados key={preconfigurado.Alias} elemento={preconfigurado} />
                            )
                        })}
                    </Row>
                </Container>
            }
        </>
    )
};