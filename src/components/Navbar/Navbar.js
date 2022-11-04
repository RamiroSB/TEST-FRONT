import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'

let handleRefresh = () => {
  window.location.replace('/configurador');
}

export default class Barra1 extends Component {



  render() {
    return <div>
      <Navbar expand="lg" className='barra'>
            
        <Container fluid>
          <Navbar.Brand href="/"> <Link to="/"><img src={"https://raw.githubusercontent.com/RamiroSB/imagenes/main/nsxgamer/LogoNegroNsxGaming3.png"} alt="Logo de la pagina" className='setLogo'></img></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='colt'>
            <Nav className="me-auto my-2 my-lg-0" style={{ height: '100%' }}>

                
                <Link to="/pcGamer" className='linkeado'>PCS GAMER</Link>
                <Link to="/pcOffice" className='linkeado'>PCS OFICINA</Link>
                <Link to="/notebooks" className='linkeado'>NOTEBOOKS</Link>

                <NavDropdown title="ACCESORIOS" id="navbarScrollingDropdown" className='servicios'>
                  <NavDropdown.Item> <Link to="/mouse" className='dropdown-item mod'>Mouse</Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to="/teclados" className='dropdown-item mod'>Teclados</Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to="/auriculares" className='dropdown-item mod'>Auriculares</Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to="/sillas" className='dropdown-item mod'>Sillas</Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to="/discos" className='dropdown-item mod'>Discos</Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to="/monitores" className='dropdown-item mod'>Monitores Gamer</Link></NavDropdown.Item>
               </NavDropdown>
               
                <Link to="/configurador" className='linkeado' onClick={handleRefresh}>ARMA TU PC</Link>


              <NavDropdown title="SERVICIOS" id="navbarScrollingDropdown" className='servicios'>
                <NavDropdown.Item> <Link to="/afterSale" className='dropdown-item mod'>Servicio Post-Venta</Link></NavDropdown.Item>
                <NavDropdown.Item href='http://skins.ineva.com.ar/skins/Suscriptor.aspx?id=615&returl=https://www.nsx.com.ar/' className='dropdown-item mod' target='_blank' rel="noreferrer"> <span style={{ visibility: 'hidden' }}> . . </span>Suscribite al newsletter</NavDropdown.Item>
                <NavDropdown.Item> <Link to="/Drivers_equipos" className='dropdown-item mod'>Drivers</Link></NavDropdown.Item>
              </NavDropdown>

                <Link to="/contact" className='linkeado'>CONTACTO</Link>

            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
      
    </div>;
  }
}


