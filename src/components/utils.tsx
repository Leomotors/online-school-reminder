import { FC } from "react";

export const ThaiFlag: FC<{ size: string }> = ({ size }) => (
  <img
    src="https://flagicons.lipis.dev/flags/4x3/th.svg"
    width={size}
    height={size}
  />
);

export function openWarp(url: string) {
  return () => {
    chrome.tabs.create({
      url,
    });
  };
}
