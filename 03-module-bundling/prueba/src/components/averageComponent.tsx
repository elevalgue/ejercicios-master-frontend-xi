import React from "react";
import { getAvg } from "../averageService";
import classes from "./averageComponentStyles.scss"; 

export const AverageComponent: React.FC = () => {
  const [average, setAverage] = React.useState<number>(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div className={classes.resultBackground}>
      <span>
        Students average: {average}
      </span>
    </div>
  );
};