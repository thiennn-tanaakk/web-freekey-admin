import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";

/** https://day.js.org/docs/en/plugin/utc */
dayjs.extend(utc);
/** https://day.js.org/docs/en/plugin/weekday */
dayjs.extend(weekday);

dayjs.locale("ja");
