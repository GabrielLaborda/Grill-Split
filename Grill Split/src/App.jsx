import { useState } from 'react';
import GuestForm from './components/GuestForm';
import TotalsAmounts from './components/TotalsAmounts';
import TableGuests from './components/TableGuests';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import IndividualAmount from './components/IndividualAmount';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [totalFood, setTotalFood] = useState(0);
  const [totalBeer, setTotalBeer] = useState(0);
  const [totalWhisky, setTotalWhisky] = useState(0);
  const [totalWine, setTotalWine] = useState(0);
  const [totalFernet, setTotalFernet] = useState(0);
  const [totalDessert, setTotalDessert]=useState(0);
  const [totalSoda, setTotalSoda] = useState(0);
  const [guests, setGuests] = useState([]);
  const [foodPerGuest, setFoodPerGuest] = useState(0);
  const [beerPerGuest, setBeerPerGuest] = useState(0);
  const [whiskyPerGuest, setWhiskyPerGuest] = useState(0);
  const [winePerGuest, setWinePerGuest] = useState(0);
  const [fernetPerGuest, setFernetPerGuest] = useState(0);
  const [dessertPerGuest, setDessertPerGuest] = useState(0);
  const [sodaPerGuest, setSodaPerGuest] = useState(0);


  const calculateResults = () => {
   // Calcular los checkbox que estan marcados.
    let countFood = 0;
    let countBeer = 0;
    let countWhisky = 0;
    let countWine = 0;
    let countFernet = 0;
    let countDessert = 0;
    let countSoda = 0;

    guests.forEach((guest) => {
      countFood += guest.checkboxFood ? 1 : 0;
      countBeer += guest.checkboxBeer ? 1 : 0;
      countWhisky += guest.checkboxWhisky ? 1 : 0;
      countWine += guest.checkboxWine ? 1 : 0;
      countFernet += guest.checkboxFernet ? 1 : 0;
      countDessert += guest.checkboxDessert ? 1 : 0;
      countSoda += guest.checkboxSoda ? 1 : 0;
    });

      //Actualizar el estado de Costo individuales
      setFoodPerGuest(countFood!==0?(totalFood / countFood).toFixed(0):0);
      setBeerPerGuest(countBeer!==0?(totalBeer / countBeer).toFixed(0):0);
      setWhiskyPerGuest(countWhisky!==0?(totalWhisky / countWhisky).toFixed(0):0);
      setWinePerGuest(countWine!==0?(totalWine / countWine).toFixed(0):0);
      setFernetPerGuest(countFernet!==0?(totalFernet / countFernet).toFixed(0):0);
      setDessertPerGuest(countDessert!==0?(totalDessert / countDessert).toFixed(0):0);
      setSodaPerGuest(countSoda!==0?(totalSoda / countSoda).toFixed(0):0);

    // Calcular el total a pagar para cada participante
      const guestsUpdate = guests.map((guest) => {
      const totalFoodPerGuest = guest.checkboxFood ? totalFood / countFood : 0;
      const totalBeerPerGuest = guest.checkboxBeer ? totalBeer / countBeer : 0;
      const totalWhiskyPerGuest = guest.checkboxWhisky ? totalWhisky / countWhisky : 0;
      const totalWinePerGuest = guest.checkboxWine ? totalWine / countWine : 0;
      const totalFernetPerGuest = guest.checkboxFernet ? totalFernet / countFernet : 0;
      const totalDessertPerGuest = guest.checkboxDessert ? totalDessert / countDessert : 0
      const totalSodaPerGuest = guest.checkboxSoda ? totalSoda / countSoda : 0;
      const toPayPerGuest = guest.totalContribution - (totalFoodPerGuest + totalBeerPerGuest + totalWhiskyPerGuest + totalWinePerGuest + totalFernetPerGuest + totalDessertPerGuest + totalSodaPerGuest).toFixed(0);
      return {
          ...guest,
          toPay: toPayPerGuest,
        };
    });
    setGuests(guestsUpdate);
    console.log(guests)
  };

  const handleSubmit = (guestData) => {
    const foodGuest = guestData.food !== "" ? Number(guestData.food) : 0;
    const beerGuest = guestData.beer !== "" ? Number(guestData.beer) : 0;
    const whiskyGuest = guestData.whisky !== "" ? Number(guestData.whisky) : 0;
    const wineGuest = guestData.wine !== "" ? Number(guestData.wine) : 0;
    const fernetGuest = guestData.fernet !== "" ? Number(guestData.fernet) : 0;
    const dessertGuest = guestData.dessert !== "" ? Number(guestData.dessert) : 0;
    const sodaGuest = guestData.soda !== "" ? Number(guestData.soda) : 0;

    // Calcular los nuevos totales
    const newTotalFood = totalFood + foodGuest;
    const newTotalBeer = totalBeer + beerGuest;
    const newTotalWhisky = totalWhisky + whiskyGuest;
    const newTotalWine = totalWine + wineGuest;
    const newTotalFernet = totalFernet + fernetGuest;
    const newTotalDessert = totalDessert + dessertGuest;
    const newTotalSoda = totalSoda + sodaGuest;
    
    // Actualizar el estado de los totales
    setTotalFood(newTotalFood);
    setTotalBeer(newTotalBeer);
    setTotalWhisky(newTotalWhisky);
    setTotalWine(newTotalWine);
    setTotalFernet(newTotalFernet);
    setTotalDessert(newTotalDessert);
    setTotalSoda(newTotalSoda);

    // Creamos un objeto con los datos del participante
    const guest = {
      id: uuidv4(),
      name: guestData.name,
      food: foodGuest,
      beer: beerGuest,
      whisky: whiskyGuest,
      wine: wineGuest,
      fernet: fernetGuest,
      dessert: dessertGuest,
      soda: sodaGuest,
      totalContribution: foodGuest + beerGuest + whiskyGuest + wineGuest + fernetGuest + dessertGuest + sodaGuest,
      toPay:0,
      checkboxFood: true, 
      checkboxBeer: false,
      checkboxWhisky: false,
      checkboxWine:false,
      checkboxFernet:false,
      checkboxDessert:false,
      checkboxSoda: false,
    };
    // Actualizar el estado de los participantes
    setGuests([...guests, guest]);
    console.log(guests)
  };

  const handleDelete = (id) => {
    let foodUpdate = totalFood;
    let beerUpdate = totalBeer;
    let whiskyUpdate = totalWhisky;
    let wineUpdate = totalWine;
    let fernetUpdate = totalFernet;
    let dessertUpdate = totalDessert;
    let sodaUpdate = totalSoda;
  
   // Copia del array actual de participantes
  const updatedGuests = guests.filter((guest) => guest.id !== id);

  // Restamos lo que aportó el participante eliminado de los totales.
  const deletedGuest = guests.find((guest) => guest.id === id);
  if (deletedGuest) {
    foodUpdate -= deletedGuest.food;
    beerUpdate -= deletedGuest.beer;
    whiskyUpdate -= deletedGuest.whisky;
    wineUpdate -= deletedGuest.wine;
    fernetUpdate -= deletedGuest.fernet,
    dessertUpdate -= deletedGuest.dessert,
    sodaUpdate -= deletedGuest.soda;
  }

  // Actualizamos los totales
  setTotalFood(foodUpdate);
  setTotalBeer(beerUpdate);
  setTotalWhisky(whiskyUpdate);
  setTotalWine(wineUpdate);
  setTotalFernet(fernetUpdate);
  setTotalDessert(dessertUpdate);
  setTotalSoda(sodaUpdate);

  // Actualizar el estado
  setGuests(updatedGuests);
};

  //Boton para reiniciar el navegador.
  const reloadPage = ()=>{
    location.reload(true);
  }

  return (
    <>
    <NavBar />
    <div className='bg-dark text-white pt-3'>
      <div className="container">
        <div className="row">
          <GuestForm onSubmit={handleSubmit}/>
          <div className="col">
            <div className="row">
              <TotalsAmounts
              totalFood ={totalFood}
              totalBeer ={totalBeer}
              totalWhisky ={totalWhisky}
              totalWine ={totalWine}
              totalFernet ={totalFernet}
              totalDessert ={totalDessert}
              totalSoda ={totalSoda}
              />
            </div>
            <div className="row">
              <IndividualAmount
              foodPerGuest ={foodPerGuest}
              beerPerGuest ={beerPerGuest}
              whiskyPerGuest ={whiskyPerGuest}
              winePerGuest ={winePerGuest}
              fernetPerGuest ={fernetPerGuest}
              dessertPerGuest ={dessertPerGuest}
              sodaPerGuest ={sodaPerGuest}
              />
            </div>
          </div>
        </div>
        <div>
          <TableGuests
          guests={guests}
          calculateResults={calculateResults}
          setGuests={setGuests}
          onDelete={handleDelete}
          reloadPage={reloadPage}
        />
      
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default App;


