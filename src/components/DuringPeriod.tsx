import { FC } from "react";
import { Period } from "../backend";

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

export default DuringPeriod;
