import React from 'react'
import "./individualAmount.css"

function individualAmount({foodPerGuest, beerPerGuest, whiskyPerGuest, winePerGuest, fernetPerGuest , dessertPerGuest, sodaPerGuest}) {
  return (
    <div className='ms-3'>
        <p className='m-0'>
            <button className="buttonCollapse" type="button" data-bs-toggle="collapse"      data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                Precio Individual
            </button>
        </p>
        <div className='collapseHeight'>
            <div className="collapse collapse-horizontal" id="collapseWidthExample">
                <div className="card card-body collapseWidth text-white bg-dark pt-2 ps-0">
                    <h6>Comida: {foodPerGuest}</h6>
                    <h6> Cerveza: {beerPerGuest}</h6>
                    <h6> Whisky: {whiskyPerGuest}</h6>
                    <h6> Vino: {winePerGuest}</h6>
                    <h6> Fernet: {fernetPerGuest}</h6>
                    <h6> Postre: {dessertPerGuest}</h6>
                    <h6> Refresco: {sodaPerGuest}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default individualAmount