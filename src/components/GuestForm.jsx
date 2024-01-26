import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import "./guestForm.css"

const GuestForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    food: "",
    beer: "",
    whisky: "",
    wine: "",
    fernet: "",
    dessert: "",
    soda: "",
  }

  return (
    <div className="col ms-5">
        <h3>Ingrese al participante</h3>
        <Form
        onSubmit={(values, form) => {
          onSubmit(values);
          form.reset();
        }}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form className="form-floating text-dark" onSubmit={handleSubmit}>
            <Field name="name">
              {({ input }) => (
                <div className="form-floating mb-2">
                  <input type="text" className="form-control w-75" id="nombre" placeholder="Nombre" {...input} />
                  <label htmlFor="nombre">Nombre</label>
                </div>
              )}
            </Field>
            <Field name="food">
              {({ input }) => (
                <div className="form-floating mb-2">
                  <input type="number" className="form-control w-75" id="comida" placeholder="Comida" {...input} />
                  <label htmlFor="comida">Comida</label>
                </div>
              )}
            </Field>
            <Field name="soda">
              {({ input }) => (
                <div className="form-floating mb-2">
                  <input type="number" className="form-control w-75" id="refresco" placeholder="Refresco" {...input} />
                  <label htmlFor="refresco">Refresco</label>
                </div>
              )}
            </Field>
            <Field name="beer">
              {({ input }) => (
                <div className="form-floating mb-2">
                  <input type="number" className="form-control w-75" id="cerveza" placeholder="Cerveza" {...input} />
                  <label htmlFor="cerveza">Cerveza</label>
                </div>
              )}
            </Field>
            <Field name="whisky">
              {({ input }) => (
                <div className="form-floating mb-2">
                  <input type="number" className="form-control w-75" id="whisky" placeholder="Whisky" {...input} />
                  <label htmlFor="whisky">Whisky</label>
                </div>
              )}
            </Field>
            <Field name="wine">
              {({ input }) => (
                <div className="form-floating mb-2">
                  <input type="number" className="form-control w-75" id="vino" placeholder="Vino" {...input} />
                  <label htmlFor="vino">Vino</label>
                </div>
              )}
            </Field>
            <Field name="fernet">
              {({ input }) => (
                <div className="form-floating mb-2">
                  <input type="number" className="form-control w-75" id="fernet" placeholder="Fernet" {...input} />
                  <label htmlFor="fernet">Fernet</label>
                </div>
              )}
            </Field>
            <Field name="dessert">
              {({ input }) => (
                <div className="form-floating mb-2">
                  <input type="number" className="form-control w-75" id="postre" placeholder="Postre" {...input} />
                  <label htmlFor="postre">Postre</label>
                </div>
              )}
            </Field>

        <button type="submit" className=" buttonForm my-3">
          Agregar
        </button>
        </form>
        )}
      />
    </div>
  );
};

export default GuestForm;
