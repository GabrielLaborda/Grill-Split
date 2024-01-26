const TotalsAmounts = ({ totalFood, totalBeer, totalWhisky, totalWine, totalFernet, totalDessert,totalSoda }) => {
    return (
      <>
        <div className="col ms-3 d-inline-flex flex-column">
        <h3 className='mb-3 h3-height'>Total  Evento </h3>
              <h6>Comida: {totalFood}</h6>
              <h6>Refresco: {totalSoda}</h6>
              <h6>Cerveza: {totalBeer}</h6>
              <h6>Whisky: {totalWhisky}</h6>
              <h6>Vino: {totalWine}</h6>
              <h6>Fernet: {totalFernet}</h6>
              <h6 className='pb-2'>Postre: {totalDessert}</h6>
              <h5 className='mb-5'> <span className='border-top border-white'>Total: {totalFood + totalBeer + totalWhisky + totalWine + totalFernet + totalDessert + totalSoda}</span></h5>
        </div>
      </>
    );
  };
  
  export default TotalsAmounts;