import React from 'react'

const Card = ({ randonElentos, randonColores,cambio }) => {

  const objetStyle = {
    color: randonColores
  }
  const objetStyleFondo = {
    backgroundColor: randonColores

  }

  return (
    <div className='fondo-card'>
      <div className="card"  style={objetStyle}>
        <h3 > {randonElentos.quote} </h3>
        <h2> {randonElentos.author} </h2>
        <button onClick={cambio} style={objetStyleFondo} className="boton"> &#62;</button>
      </div>

    </div>
  )
}

export default Card