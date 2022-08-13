import { useState } from 'react'
import './App.css'
import Card from './componentes/Card'
import frase from "./json/frases.json"
import colores from "./colors/coloresfondos"

function App() {
  const elementoRandom = arr => {
    const random = Math.floor(Math.random() * arr.length)
    return arr[random]
  }
 const randonElemento= elementoRandom(frase)
 const randonColores = elementoRandom(colores)

 const [randonElentos, setrandonElentos] = useState(randonElemento)
 const [randonColors, setrandonColors] = useState(randonColores)
 const objetStyleFondo = {
  backgroundColor: randonColores

}

const butonCambio = ()=>{
  const randonElemento= elementoRandom(frase)
  const randonColores = elementoRandom(colores)
  setrandonElentos(randonElemento)
  setrandonColors(randonColores)


}
  return (
    <div className="App"  style={objetStyleFondo}>
      <Card cambio ={butonCambio}randonElentos={randonElentos} randonColores={randonColores}/>
    </div>
  )
}

export default App
