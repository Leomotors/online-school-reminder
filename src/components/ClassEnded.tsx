import { FC } from "react";
import { Period } from "../backend";

import { openWarp } from "./utils";

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

export default ClassEnded;
