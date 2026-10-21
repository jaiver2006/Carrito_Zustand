import Encabezado from './Components/Encabezado'
import ListaProductos from './Components/ListaProductos'
import Carrito from './Components/Carrito'

export default function App() {
  return (
    <div className="app">
      <Encabezado />
      <main className="contenido">
        <ListaProductos />
        <Carrito />
      </main>
    </div>
  )
}