import moment from "moment";
import { DATE_FORMAT } from "../constants";

export const getToday = () => {
  return moment().format(DATE_FORMAT);
};

export const getDateString = (date: Date) => {
  return moment(date).format(DATE_FORMAT);
};
