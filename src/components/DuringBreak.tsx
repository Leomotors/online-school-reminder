import { FC } from "react";
import { Period } from "../backend";

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

export default DuringBreak;
