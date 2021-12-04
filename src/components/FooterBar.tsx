import { FC } from "react";

import { openWarp } from "./utils";
import { Version, BuildTime } from "../config";

function dateLabel() {
  const BuildDate = Date.parse(BuildTime);
  // * Calculate how far it is from BuildDate
  const now = Date.now();
  const diff = now - BuildDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const nnago =
    days > 0
      ? `${days} days ago`
      : hours > 0
      ? `${hours} hours ago`
      : minutes > 0
      ? `${minutes} minutes ago`
      : `${seconds} seconds ago`;
  return `Last Updated: ${nnago}`;
}

const FooterBar: FC = () => {
  return (
    <p className="bg-pink-200 rounded-lg p-1.5">
      <span
        className="text-blue-500 hover:text-blue-600 cursor-pointer"
        onClick={openWarp(
          "https://github.com/Leomotors/online-school-reminder"
        )}
      >
        GitHub
      </span>
      ・<span>{Version}</span>・
      <span title={`Built at ${BuildTime}`}>{dateLabel()}</span>
    </p>
  );
};

export default FooterBar;
