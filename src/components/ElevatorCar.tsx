import React from "react";
import "./ElevatorCar.scss";
import { FloorCounter } from "./FloorCounter";

interface ElevatorCarProps {
  name: string;
  currentCar: boolean;
  updateParent: React.Dispatch<React.SetStateAction<number>>;
}

export const ElevatorCar: React.FC<ElevatorCarProps> = (props) => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    props.updateParent(count);
  };
  
  return (
    <>
      <FloorCounter>
        {(count, setCount) => (
          <div className="elevator-car">
            <h2>{count}</h2>
            <div className="elevator-btns">
              <i
                className="fas fa-caret-up fa-2x"
                onClick={() => setCount(count + 1)}
              ></i>
              <i
                className="fas fa-caret-down fa-2x"
                onClick={() => setCount(count - 1)}
              ></i>
            </div>
            <div className="car">{props.name}</div>
          </div>
        )}
      </FloorCounter>
    </>
  );
};
