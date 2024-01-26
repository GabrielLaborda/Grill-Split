import React from 'react'

function Instruction() {
  return (
    <>
        <h1 className='mt-5'>Instrucciones para la Aplicación "GRILL SPLIT"</h1>
        <p className='mb-5'>¡Bienvenido a Grill Split, la aplicación perfecta para dividir los gastos de un asado o cualquier comida entre amigos de manera justa y sencilla! Aquí te explicamos cómo utilizar cada una de las tres pestañas de la aplicación</p>
      <div className='mb-5'>
        <h2 className='mb-3'>Pestaña 1: Formulario de Participantes y Aportes</h2>
        <ol>
          <li>
            <strong>Completa el Formulario:</strong> Completa el formulario ingresando los nombres de los participantes y el importe en $ que aportaron en  comida, bebidas, alcohol, postre, etc.
          </li>
          <li>
            <strong>Guardar Datos:</strong> Una vez que hayas ingresado toda la información, presiona el botón "Agregar" para registrar los datos de los participantes y sus aportes.
          </li>
        </ol>
      </div>

      {/* Pestaña 2: Listado de Participantes y Cálculo de Resultados */}
      <div className='mb-5'>
        <h2 className='mb-3'>Pestaña 2: Listado de Participantes y Cálculo de Resultados</h2>
        <ol>
          <li>
            <strong>Selección de Consumos:</strong> Dirígete a la segunda pestaña donde encontrarás la lista de participantes.
          </li>
          <li>
            <strong>Marca los Checkboxes:</strong> Marca los checkboxes según lo que cada participante haya consumido.
          </li>
          <li>
            <strong>Cálculo de Resultados:</strong> Después de marcar los checkboxes, presiona el botón "Calcular Resultados".
          </li>
        </ol>
      </div>

      {/* Pestaña 3: Totales del Evento y por Concepto */}
      <div className='mb-5'>
        <h2 className='mb-3'>Pestaña 3: Totales del Evento y por Concepto</h2>
        <ol>
          <li>
            <strong>Total Evento:</strong> Accede a la tercera pestaña para ver los totales del evento.
          </li>
          <li>
            <strong>Precio por Persona:</strong> La tabla te mostrará cuánto debe pagar cada participante por cada concepto que haya consumido.
          </li>
        </ol>
      </div>

      <p className='pb-5 m-0'>¡Listo! Con estas simples instrucciones, podrás utilizar GRILL SPLIT de manera efectiva y equitativa. ¡Disfruta de tus comidas compartidas!</p>
    </>
  )
}

export default Instruction