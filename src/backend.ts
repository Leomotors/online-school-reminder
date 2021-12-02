import { time, period } from "./data/schedule.json";

export enum PeriodStatus {
  IN_PERIOD = 0,
  IN_BREAK = 1,
  ENDED = 2,
}

export interface PeriodInfo {
  name: string;
  teacher: string;
  time: string;
}

export interface Period {
  status: PeriodStatus;
  // * If IN_PERIOD, then this is current period
  // * If IN_BREAK, then this is next period
  // * If ENDED, then this is undefined
  period?: number;
  info?: PeriodInfo;
  nextPeriod?: PeriodInfo;
}

export function getPeriod() {
  const dtnow = new Date();
  const now = `${dtnow.getHours()}:${dtnow.getMinutes()}`;

  let periodIndex = 1;
  while (true) {
    // @ts-ignore
    if (!period[`${dtnow.getDay()}:${periodIndex}`]) {
      return {
        status: PeriodStatus.ENDED,
      };
    }

    // @ts-ignore
    const [start, end] = time[periodIndex].split("-");
    if (cmpTime(end, now) <= 0) {
      periodIndex++;
      continue;
    }

    if (withinPeriod(periodIndex, dtnow)) {
      return {
        status: PeriodStatus.IN_PERIOD,
        period: periodIndex,
        info: getPeriodInfo(periodIndex),
        // @ts-ignore
        nextPeriod: period[`${dtnow.getDay()}:${periodIndex + 1}`]
          ? getPeriodInfo(periodIndex + 1)
          : undefined,
      };
    } else {
      return {
        status: PeriodStatus.IN_BREAK,
        period: periodIndex,
        nextPeriod: getPeriodInfo(periodIndex),
      };
    }
  }
}

export function getPeriodInfo(p: number) {
  const day = new Date().getDay();
  // @ts-ignore
  const pinfo = period[`${day}:${p}`];

  return {
    name: pinfo.name,
    teacher: pinfo.teacher,
    // @ts-ignore
    time: time[p],
  };
}

export function withinPeriod(p: number, dtnow: Date): boolean {
  const now = `${dtnow.getHours()}:${dtnow.getMinutes()}`;

  // @ts-ignore
  if (!time[p]) {
    return false;
  }

  // @ts-ignore
  const [start, end] = time[p].split("-");

  return cmpTime(now, start) >= 0 && cmpTime(now, end) < 0;
}

// * By GitHub Copilot
export function cmpTime(a: string, b: string): number {
  const [ah, am] = a.split(":");
  const [bh, bm] = b.split(":");

  if (+ah > +bh) {
    return 1;
  } else if (+ah < +bh) {
    return -1;
  } else {
    if (+am > +bm) {
      return 1;
    } else if (+am < +bm) {
      return -1;
    } else {
      return 0;
    }
  }
}
