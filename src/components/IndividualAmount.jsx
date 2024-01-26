import React from 'react'
import "./IndividualAmount.css"

function individualAmount({foodPerGuest, beerPerGuest, whiskyPerGuest, winePerGuest, fernetPerGuest , dessertPerGuest, sodaPerGuest}) {
  return (
    <>
        <div className="col ms-3 d-inline-flex flex-column">
        <h4 className='mb-3 h3-height'>Precio por Persona </h4>
            <h6>Comida: {foodPerGuest}</h6>
            <h6> Refresco: {sodaPerGuest}</h6>
            <h6> Cerveza: {beerPerGuest}</h6>
            <h6> Whisky: {whiskyPerGuest}</h6>
            <h6> Vino: {winePerGuest}</h6>
            <h6> Fernet: {fernetPerGuest}</h6>
            <h6> Postre: {dessertPerGuest}</h6>
        </div>
    </>
  )
}

export default individualAmount