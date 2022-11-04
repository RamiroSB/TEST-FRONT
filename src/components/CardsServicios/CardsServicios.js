import React from 'react'
import "./CardsServiciosStyle.css"
import { Card, Button, Container} from 'react-bootstrap'

export const CardsServicios = () => {
  return (
    <>
    <Container className='contenedorServicios'>

        <Card className="cardServicios">
          <Card.Img style={{ marginTop: '5px' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" />
          <Card.Body>
            <Card.Title>Card Title asd</Card.Title>
            <Button className='botonServicios'>Mas info!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" />
          <Card.Body>
            <Card.Title>Card Title asd</Card.Title>
            <Button variant="primary">Mas info!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" />
          <Card.Body>
            <Card.Title>Card Title asd</Card.Title>
            <Button variant="primary">Mas info!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" />
          <Card.Body>
            <Card.Title>Card Title asd</Card.Title>
            <Button variant="primary">Mas info!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" />
          <Card.Body>
            <Card.Title>Card Title asd</Card.Title>
            <Button variant="primary">Mas info!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q4w_jIZtB6_y8aSuIjU49XfbfgXlg6ufpYCdKxm1&s" />
          <Card.Body>
            <Card.Title>Card Title asd</Card.Title>
            <Button variant="primary">Mas info!</Button>
          </Card.Body>
        </Card>

        
    </Container>
    </>
  )
}
