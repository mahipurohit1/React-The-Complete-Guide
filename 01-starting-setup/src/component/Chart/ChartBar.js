import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  // console.log(props.maxValue);
  // console.log(props.maxValue);

  // console.log(props.value);
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  // console.log(barHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: barHeight,
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
