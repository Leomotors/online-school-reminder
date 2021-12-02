import "./popup.scss";
import "twind/shim";

import React, { FC, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  getPeriod,
  PeriodStatus,
  Period,
  ROTCDay,
  room,
  branch,
} from "./backend";
import { Version, BuildTime } from "./config";

import { ThaiFlag } from "./utils";

function openWarp(url: string) {
  return () => {
    chrome.tabs.create({
      url,
    });
  };
}

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
      ) : currentPeriod.status == PeriodStatus.IN_PERIOD ? (
        <DuringPeriod period={currentPeriod} />
      ) : currentPeriod.status == PeriodStatus.IN_BREAK ? (
        <DuringBreak period={currentPeriod} />
      ) : (
        <ClassEnded period={currentPeriod} />
      )}
      <p className="bg-pink-200 rounded-lg p-1.5">
        <span
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
          onClick={openWarp(
            "https://github.com/Leomotors/online-school-reminder"
          )}
        >
          GitHub
        </span>
        ・{Version}・{BuildTime}
      </p>
    </div>
  );
};

const DuringPeriod: FC<{ period: Period }> = ({ period }) => {
  return (
    <div className="content">
      <h1>
        Current Period: {period.period} ({period.info!.time})
      </h1>
      <h1>Subject: {period.info!.name}</h1>
      <h1>Teacher: {period.info!.teacher}</h1>
      {period.nextPeriod ? (
        <h1>Next Period: {period.nextPeriod.name}</h1>
      ) : (
        <h1>Today's class is about to end! YES</h1>
      )}
    </div>
  );
};

const DuringBreak: FC<{ period: Period }> = ({ period }) => {
  return (
    <div className="content">
      <h1>Break</h1>
      <h1>
        Next Period: {period.nextPeriod!.name} ({period.nextPeriod!.time})
      </h1>
    </div>
  );
};

const ClassEnded: FC<{ period: Period }> = ({ period }) => {
  return (
    <div className="content">
      <h1>Relax! Today's classes have ended!</h1>
      <img
        className="cursor-pointer my-4 rounded-md"
        src="https://c.tenor.com/zLO1Ljcx1dEAAAAC/karlson-vibe-dani.gif"
        onClick={openWarp("https://www.youtube.com/watch?v=FtE6SV_1wu4")}
      />
    </div>
  );
};

const ROTC: FC = () => {
  return (
    <div className="content m-4">
      <div className="ROTC-title flex flex-row justify-center">
        <ThaiFlag size="50" />
        <h1>&nbsp;TODAY IS ROTC&nbsp;</h1>
        <ThaiFlag size="50" />
      </div>
      <img src="https://pbs.twimg.com/media/EymEfj7VgAcfFUc.jpg" />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
