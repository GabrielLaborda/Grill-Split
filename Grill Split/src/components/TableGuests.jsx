import React from 'react';
import "./tableGuests.css"
import { useState } from 'react';

const TableGuests = ({ guests,calculateResults, setGuests, onDelete, reloadPage}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showResetToast, setShowResetToast] = useState(false);
  const [deletingId, setdeletingId] = useState(null);
  const [showRecalculateToast, setShowRecalculateToast] = useState(false);

  const handleShowConfirmation = (id) => {
    setdeletingId(id);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setShowConfirmation(false);
    onDelete(deletingId);
    setShowRecalculateToast(true);
    
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleResetApp = () => {
    setShowResetToast(true);
  };

  let indexTable = 1;

  return (
  <div className="container mt-5">
    <h3>Participantes</h3>
    <div className='table-responsive'>
      <table className="table table-sm table-borderless table-dark ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className='sticky-column'>Nombre</th>
            <th scope="col">Aporte</th>
            <th scope="col">Pagar</th>
            <th scope="col">Cobrar</th>
            <th scope="col">Comida</th>
            <th scope="col">Cerveza</th>
            <th scope="col">Whisky</th>
            <th scope="col">Vino</th>
            <th scope="col">Fernet</th>
            <th scope="col">Postre</th>
            <th scope="col">Refresco</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        {guests.map((guest) => (
        <tbody key={guest.id}>
          <tr>
            <th scope="row">{(indexTable ++)}</th>
            <td className='tdStart sticky-column'>{guest && guest.name}</td>
            <td className='px-4 tdEnd'>{guest.totalContribution>0? guest && guest.totalContribution:0}</td>
            <td className='tdEnd'>
              {guest.toPay >0?"":-(guest.toPay)}
            </td>
            <td className='tdEnd'>
            {guest.toPay <0?"":guest.toPay}
            </td>
            <td className='tdCenter'>
              <div>
                <input
                  className="form-check-input border-black border-opacity-50"
                  type="checkbox"
                  id={`checkboxFood-${guest.id}`}
                  checked={guest && guest.checkboxFood}
                  onChange={() => {
                    const updatedguests = guests.map((p) => {
                      if (p.id === guest.id) {
                        return {
                          ...p,
                          checkboxFood: !p.checkboxFood,
                        };
                      }
                      return p;
                    });
                    setGuests(updatedguests);
                  }} >
                </input>
              </div>
            </td>
            <td className='tdCenter'>
              <div>
                <input
                  className="form-check-input border-black border-opacity-50"
                  type="checkbox"
                  id={`checkboxBeer-${guest.id}`}
                  checked={guest && guest.checkboxBeer}
                  onChange={() => {
                    const updatedguests = guests.map((p) => {
                      if (p.id === guest.id) {
                        return {
                          ...p,
                          checkboxBeer: !p.checkboxBeer,
                        };
                      }
                      return p;
                    });
                    setGuests(updatedguests);
                  }} >
                </input>
              </div>
            </td>
            <td className='tdCenter'>
              <div>
                <input
                  className="form-check-input border-black border-opacity-50"
                  type="checkbox"
                  id={`checkboxWhisky-${guest.id}`}
                  checked={guest && guest.checkboxWhisky}
                  onChange={() => {
                    const updatedguests = guests.map((p) => {
                      if (p.id === guest.id) {
                        return {
                          ...p,
                          checkboxWhisky: !p.checkboxWhisky,
                        };
                      }
                      return p;
                    });
                    setGuests(updatedguests);
                  }} >
                </input>
              </div>
            </td>
            <td className='tdCenter'>
              <div>
                <input
                  className="form-check-input border-black border-opacity-50"
                  type="checkbox"
                  id={`checkboxWine-${guest.id}`}
                  checked={guest && guest.checkboxWine}
                  onChange={() => {
                    const updatedguests = guests.map((p) => {
                      if (p.id === guest.id) {
                        return {
                          ...p,
                          checkboxWine: !p.checkboxWine,
                        };
                      }
                      return p;
                    });
                    setGuests(updatedguests);
                  }} >
                </input>
              </div>
            </td>
            <td className='tdCenter'>
              <div>
                <input
                  className="form-check-input border-black border-opacity-50"
                  type="checkbox"
                  id={`checkboxFernet-${guest.id}`}
                  checked={guest && guest.checkboxFernet}
                  onChange={() => {
                    const updatedguests = guests.map((p) => {
                      if (p.id === guest.id) {
                        return {
                          ...p,
                          checkboxFernet: !p.checkboxFernet,
                        };
                      }
                      return p;
                    });
                    setGuests(updatedguests);
                  }} >
                </input>
              </div>
            </td>
            <td className='tdCenter'>
              <div>
                <input
                  className="form-check-input border-black border-opacity-50"
                  type="checkbox"
                  id={`checkboxDessert-${guest.id}`}
                  checked={guest && guest.checkboxDessert}
                  onChange={() => {
                    const updatedguests = guests.map((p) => {
                      if (p.id === guest.id) {
                        return {
                          ...p,
                          checkboxDessert: !p.checkboxDessert,
                        };
                      }
                      return p;
                    });
                    setGuests(updatedguests);
                  }} >
                </input>
              </div>
            </td>
            <td className='tdCenter'>
              <div>
                <input
                  className="form-check-input border-black border-opacity-50"
                  type="checkbox"
                  id={`checkboxSoda-${guest.id}`}
                  checked={guest && guest.checkboxSoda}
                  onChange={() => {
                    const updatedguests = guests.map((p) => {
                      if (p.id === guest.id) {
                        return {
                          ...p,
                          checkboxSoda: !p.checkboxSoda,
                        };
                      }
                      return p;
                    });
                    setGuests(updatedguests);
                  }} >
                </input>
              </div>
            </td>
            <td className='tdCenter'>
              <button className='btnEliminar'onClick={()=>handleShowConfirmation(guest.id)}>X</button>
            </td>
          </tr>
        </tbody>
        ))}
      </table>
      <div className='d-flex justify-content-between '>
        <button 
          className="buttonTable mt-3 mb-5" onClick={calculateResults}>Calcular Resultados
        </button>
        <button 
          className='btnReloadPage mt-3 mb-5' onClick={handleResetApp}>Resetear App
        </button>
      </div>
       {/* Toast para confirmación */}
      <div className={`toast ${showConfirmation ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-body toastPosition bg-white text-black rounded-2">
          ¿Estás seguro de que deseas eliminar este participante?
          <div className="mt-2 ms-3 pt-2 bg-white d-flex justify-content-center">
            <button type="button" className=" btnConfirmarTostify btn-sm" onClick={handleConfirmDelete}>
              Confirmar
            </button>
            <button type="button" className=" btnCancelTostify btn-sm ms-5" onClick={handleCancelDelete}>
              Cancelar
            </button>
          </div>
        </div>
      </div>

      {/* Toast de recálculo */}
      <div className={`toast ${showRecalculateToast ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex toastPosition bg-white text-black rounded-2 fs-7">
          <div className="toast-body d-flex flex-column align-items-center">
            Por favor, vuelva a calcular los resultados.
            <button type="button" className="btnCancelTostify mt-3 w-50" onClick={() => setShowRecalculateToast(false)} aria-label="Close">Cerrar</button>
          </div>
        </div>
      </div>

      {/*Toast reload app */}
      <div className={`toast ${showResetToast ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-body toastPosition bg-white text-black rounded-2">
          Esta seguro que quiere resetear la App, perdera todos los datos ingresados.
            <div className="mt-2 ms-3 pt-2 bg-white d-flex justify-content-center">
              <button type="button" className="btnConfirmarTostify btn-sm" onClick={reloadPage}>
                Resetear
              </button>
              <button type="button" className="btnCancelTostify btn-sm ms-5" onClick={() => setShowResetToast(false)}>
                Cancelar
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TableGuests;
