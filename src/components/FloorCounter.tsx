import React from "react";

interface FloorCounterProps {
  children: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | null;
}

export const FloorCounter: React.FC<FloorCounterProps> = ({ children }) => {
  const [count, setCount] = React.useState(0);

  return <div>{children(count, setCount)}</div>;
};
