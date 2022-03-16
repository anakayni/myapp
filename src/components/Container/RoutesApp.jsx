import NavBar from '../NavBar/NavBar';
import Titulo from '../Titulo/Titulo';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function RoutesApp() {
  return (
    <>
      <NavBar/>
      <Titulo/>
      {/*Esta es la Card*/}
      <ItemListContainer/>
    </>
  )
}

export default RoutesApp