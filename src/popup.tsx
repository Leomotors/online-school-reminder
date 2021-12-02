import "./global.scss";
import "./popup.scss";

import React, { FC, useState } from "react";
import ReactDOM from "react-dom";

const Popup: FC = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div className="popup">
      <ul>
        <li>Current Time: {time.toLocaleString()}</li>
      </ul>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
