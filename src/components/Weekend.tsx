import { FC } from "react";

const Weekend: FC = () => {
  return (
    <div className="content">
      <h1>RELAX! Today is Weekend!</h1>
      <img
        className="my-4 rounded-md"
        src="https://c.tenor.com/XUD0K8qLJYsAAAAC/how-linux-users-install-a-web-browser-linux.gif"
      />
    </div>
  );
};

export default Weekend;

export function isWeekend(day: number) {
  return day < 1 || day > 5;
}
