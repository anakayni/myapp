let titulo = 'Soy un titulo'

function Titulo() {
  return (
      <>
        {/* Titulo () equivalente a <Titulo/>*/}
        {/* Titulo ( {titulo: ''}) equivalente a <Titulo/>*/}
        <Titulo tituloProps={ titulo }/>
        {/*arriba -> Titulo estamos tomando el valor de  let titulo = 'Soy un titulo'*/}
      </>
  )
}

export default Titulo