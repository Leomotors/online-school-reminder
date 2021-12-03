import { FC } from "react";

import { ThaiFlag } from "./utils";

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

export default ROTC;
