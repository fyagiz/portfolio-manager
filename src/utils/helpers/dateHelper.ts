import moment from "moment";
import { DATE_FORMAT } from "../constants";

export const getTodayString = () => {
  return moment().format(DATE_FORMAT);
};

export const getToday = () => {
  return new Date();
};

export const getBeforeDateByDay = (date: Date, day: number) => {
  return moment(date).subtract(day, "days").toDate();
};

export const getDateString = (date: Date) => {
  return moment(date).format(DATE_FORMAT);
};
