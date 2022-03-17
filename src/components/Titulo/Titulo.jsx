
import Container from 'react-bootstrap/Container'
let titulo = 'Soy un titulo'

function Titulo({tituloProps}) {
  return (
      <>
        {/* Titulo () equivalente a <Titulo/>*/}
        {/* Titulo ( {titulo: ''}) equivalente a <Titulo/>*/}
        <Container>
            <h1>{tituloProps}</h1>
        </Container>
        {/*arriba -> Titulo estamos tomando el valor de  let titulo = 'Soy un titulo'*/}
      </>
  )
}

export default Titulo