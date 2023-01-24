import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const value = props.dataPoints.map(function (dataPoint) {
    return dataPoint.value;
  });
  const max = Math.max(...value);
  console.log(value);

  return (
    <div className="chart">
      {props.dataPoints.map(function (dataPoint) {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={max}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}
export default Chart;
