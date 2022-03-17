import NavBar from '../NavBar/NavBar';
import Titulo from '../Titulo/Titulo';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function RoutesApp() {
  return (
    <>
      <NavBar/>
      <Titulo 
        tituloProps="Soy un titulo"
      />
      {/*Esta es la Card*/}
      <ItemListContainer greeting="Hola soy ItemListContainer"/>
    </>
  )
}

export default RoutesApp