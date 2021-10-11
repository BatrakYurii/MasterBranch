import React from "react";


/*const initCar = (mark, model, color) => ({
    mark: mark,
    model: model,
    color: color,
  });*/

  const carOptions = () => ["Mark", "Model", "Color"];

  let initCar = function (mark,model,color) {
    this.mark = mark;
    this.model = model;
    this.color = color;
}

  const cars = [
    new initCar("mitsubisi", "outlander", "ed"),
    new initCar("volkswagen", "youareg", "black"),
    new initCar("renault", "duster", "gold"),
    new initCar("mercedes-benz", "cls 63 amg", "wrey"),
    new initCar("audi", "q7", "white"),
    new initCar("porsche", "cayenne", "white"),
    new initCar("fiat", "124", "blue"),
    new initCar("lada", "2101", "green"),
    new initCar("nissan", "primera", "black")
  ];



export class Car extends React.Component{
constructor(props){
  super(props);

  this.carSearching = this.carSearching.bind(this);
  }

  carSearching() {
    let propetry = this.props.match.params.searchingParam;
    let filtredCars = [];

    if(typeof (propetry) == 'undefined'){
      filtredCars = cars.concat(filtredCars);
    }  
    else {    
      for (let i = 0; i < cars.length; i++) {
        if(cars[i].mark.indexOf(propetry) == 0 || cars[i].model.indexOf(propetry) == 0) {
          filtredCars.push(new initCar(cars[i].mark, cars[i].model, cars[i].color));
        }      
      }

      if(filtredCars.length == 0){
        return <h2>Car was not found</h2>
      }
    }    

    return <>
      <thead>
        <tr>
          {carOptions().map((v) => (
            <th>{v}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {filtredCars.map((car) => {
            return <tr>
            <td>{car.mark}</td>
            <td>{car.model}</td>
            <td>{car.color}</td>
          </tr>
        })}
      </tbody> 
      </>

  } 
  
  


    render(){
    return<>
        <table border="1" width="100%">
          {this.carSearching()}
        </table>
      </>
    }
}


export default Car;

