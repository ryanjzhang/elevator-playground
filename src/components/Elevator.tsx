import React from "react";
import "./Elevator.scss";
import { ElevatorCar } from "./ElevatorCar";
import { FloorCounter } from "./FloorCounter";

export const Elevator: React.FC = (props) => {
  const [floor, setFloor] = React.useState<number>(0);
  const carOrder: Array<number> = [];

  const divStyleActive = {
    color: "darkslategrey",
  };

  const divStyleInactive = {
    color: "red",
  };

  //TODO: Add datastructure for carOrder array with sorting
  function setCar(
    currentFloor: number,
    newFloor: number,
    divStyleActive: any,
    divStyleInactive: any
  ) {
    //Gebruiker drukt op verdieping, verdieping zelfde als gedrukte verdieping
    if (currentFloor === newFloor) {
      return "You are already on this floor!";
    }
    // Gebruiker drukt op verdieping, gaat naar gedrukte verdieping
    if (currentFloor !== newFloor) {
      //TEMP
      carOrder.pop();
      carOrder.push(newFloor);
      currentFloor = newFloor;
      if (currentFloor > newFloor) {
        //TODO: Add newfloor to array & do something with sorting
        //TODO: Change style of currentfloor and newfloor
      }
      if (currentFloor < newFloor) {
        //TODO: Add newfloor to array & do something with sorting
        //TODO: Change style of currentfloor and newfloor

      }
    }
    // Gebruiker drukt op meerdere verdiepingen, van sorteren van meest dichtbij naar meest verre verdieping
  }

  return (
    <>
      <div className="elevator">
        <h1>Elevator Playground</h1>
        {/* Set count to count from elevatorcar.tsx */}
        <FloorCounter>
          {(count, setCount) => (
            <div>
              <h2> You are currently on floor {floor}.</h2>
            </div>
          )}
        </FloorCounter>
        <ElevatorCar name="5" currentCar={false} updateParent={setFloor} />
        <ElevatorCar name="4" currentCar={false} updateParent={setFloor} />
        <ElevatorCar name="3" currentCar={false} updateParent={setFloor} />
        <ElevatorCar name="2" currentCar={false} updateParent={setFloor} />
        <ElevatorCar name="1" currentCar={false} updateParent={setFloor} />
        <ElevatorCar name="0" currentCar={true} updateParent={setFloor} />
      </div>
    </>
  );
};
