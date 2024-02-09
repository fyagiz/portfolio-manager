import moment from "moment";
import { DATE_FORMAT } from "../constants";

const getToday = () => {
  return moment().format(DATE_FORMAT);
};

export default getToday;
