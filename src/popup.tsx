import "./global.scss";
import "./popup.scss";

import React, { FC, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { getPeriod, PeriodStatus } from "./backend";

const Popup: FC = () => {
  const [time, setTime] = useState(new Date());

  const day = time.getDay();
  const currentPeriod = getPeriod();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="popup">
      <h1>Current Time: {time.toLocaleString()}</h1>
      {currentPeriod.status == PeriodStatus.IN_PERIOD ? (
        <>
          <h1>
            Current Period: {currentPeriod.period} ({currentPeriod.info!.time})
          </h1>
          <h1>Subject: {currentPeriod.info!.name}</h1>
          <h1>Teacher: {currentPeriod.info!.teacher}</h1>
          {currentPeriod.nextPeriod ? (
            <h1>Next Period: {currentPeriod.nextPeriod.name}</h1>
          ) : (
            <h1>Today's class is about to end! YES</h1>
          )}
        </>
      ) : currentPeriod.status == PeriodStatus.IN_BREAK ? (
        <>
          <h1>Break</h1>
          <h1>
            Next Period: {currentPeriod.nextPeriod!.name} (
            {currentPeriod.nextPeriod!.time})
          </h1>
        </>
      ) : (
        <h1>Ended</h1>
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
