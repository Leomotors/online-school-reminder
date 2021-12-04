import "./popup.scss";
import "twind/shim";

import React, { FC, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { getPeriod, PeriodStatus, ROTCDay, room, branch } from "./backend";

import DuringPeriod from "./components/DuringPeriod";
import DuringBreak from "./components/DuringBreak";
import ClassEnded from "./components/ClassEnded";
import ROTC from "./components/ROTC";
import Weekend, { isWeekend } from "./components/Weekend";
import FooterBar from "./components/FooterBar";

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
    <div className="popup bg-blue-200 flex flex-col justify-center items-center p-6">
      <h2>
        {room}・{branch}・{time.toLocaleString()}
      </h2>
      <hr />
      {day == ROTCDay ? (
        <ROTC />
      ) : isWeekend(day) ? (
        <Weekend />
      ) : currentPeriod.status == PeriodStatus.IN_PERIOD ? (
        <DuringPeriod period={currentPeriod} />
      ) : currentPeriod.status == PeriodStatus.IN_BREAK ? (
        <DuringBreak period={currentPeriod} />
      ) : (
        <ClassEnded period={currentPeriod} />
      )}
      <FooterBar />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
