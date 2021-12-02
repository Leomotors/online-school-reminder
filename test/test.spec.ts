// @ts-check

import { cmpTime } from "../src/backend";

import { equal } from "assert";

describe("Test Utilities Function", () => {
  describe("cmpTime()", () => {
    it("8:30 vs 16:40", () => {
      equal(cmpTime("8:30", "16:40"), -1);
    });
    it("16:00 vs 15:59", () => {
      equal(cmpTime("16:00", "15:59"), 1);
    });
    it("4:20 vs 4:20", () => {
      equal(cmpTime("4:20", "4:20"), 0);
    });
  });
});
