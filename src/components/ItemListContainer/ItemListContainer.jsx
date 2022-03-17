import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function ItemListContainer({greeting}) {
  return (
    <Container>
       {greeting} 
    </Container>
  )
}

export default ItemListContainer