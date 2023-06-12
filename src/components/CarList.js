import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();
  const {cars, name} = useSelector(({form, cars: {data, searchTerm}}) => {
    //gonna write search filtering logic right in this one

    const filteredCars = data.filter((car) => 
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name
    };
    //get the state
      //access the cars reducer in the store
        //then acesss the data array in the carsreducer
  });//get the list of cars, and assign it to cars
  //why cars.cars
  
  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    //decide if the car should be bold
    //need to know what state.form.name is, we get this from useSelector
    //if name is defined
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());


    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button 
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">
    {renderedCars}
    <hr />
  </div>;
}

export default CarList;