import { FC } from "react";

const Weekend: FC = () => {
  return (
    <div className="content">
      <h1>RELAX! Today is Weekend!</h1>
    </div>
  );
};

export default Weekend;

export function isWeekend(day: number) {
  return day < 1 || day > 5;
}
