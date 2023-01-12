import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('America/Edmonton');

// eslint-disable-next-line unicorn/prefer-export-from
export default dayjs;
