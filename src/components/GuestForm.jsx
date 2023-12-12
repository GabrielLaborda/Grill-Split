import React, { useState } from 'react';
import "./guestForm.css"

const GuestForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [beer, setBeer] = useState("");
  const [whisky, setWhisky] = useState("");
  const [wine, setWine] = useState("");
  const [fernet, setFernet] = useState("");
  const [dessert, setDessert] = useState("");
  const [soda, setSoda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name!==""){
    onSubmit({ name, food, beer, whisky, wine, fernet, dessert, soda });

    // Limpiar los inputs del formulario
    setName("");
    setFood("");
    setBeer("");
    setWhisky("");
    setWine("");
    setFernet("");
    setDessert("");
    setSoda("");
  }
  };

  return (
    <div className="col">
        <h3>Ingrese al participante</h3>
      <form className="form-floating text-dark" onSubmit={handleSubmit}>
        <div className="form-floating mb-2">
          <input type="text" className="form-control w-75" id="nombre" placeholder="Nombre" onChange={e => setName(e.target.value)} value={name}></input>
          <label htmlFor="nombre">Nombre</label>
        </div>

        <div className="form-floating mb-2">
          <input type="number" className="form-control w-75" id="comida" placeholder="Comida" onChange={e => setFood(e.target.value)} value={food}></input>
          <label htmlFor="comida">Comida</label>
        </div>

        <div className="form-floating mb-2">
          <input type="number" className="form-control w-75" id="Cerveza" placeholder="Cerveza" onChange={e => setBeer(e.target.value)} value={beer}></input>
          <label htmlFor="Cerveza">Cerveza</label>
        </div>

        <div className="form-floating mb-2">
          <input type="number" className="form-control w-75" id="Whisky" placeholder="Whisky" onChange={e => setWhisky(e.target.value)} value={whisky}></input>
          <label htmlFor="Whisky">Whisky</label>
        </div>

        <div className="form-floating mb-2">
          <input type="number" className="form-control w-75" id="Vino" placeholder="Vino" onChange={e => setWine(e.target.value)} value={wine}></input>
          <label htmlFor="Vino">Vino</label>
        </div>

        <div className="form-floating mb-2">
          <input type="number" className="form-control w-75" id="Fernet" placeholder="Fernet" onChange={e => setFernet(e.target.value)} value={fernet}></input>
          <label htmlFor="Fernet">Fernet</label>
        </div>

        <div className="form-floating mb-2">
          <input type="number" className="form-control w-75" id="Postre" placeholder="Postre" onChange={e => setDessert(e.target.value)} value={dessert}></input>
          <label htmlFor="Postre">Postre</label>
        </div>

        <div className="form-floating mb-2">
          <input type="number" className="form-control w-75" id="Refresco" placeholder="Resfresco" onChange={e => setSoda(e.target.value)} value={soda}></input>
          <label htmlFor="Refresco">Resfresco</label>
        </div>

        <button type="submit" className=" buttonForm my-3">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default GuestForm;
