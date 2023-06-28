import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc);
dayjs.extend(timezone);

type DateTimeProps = {
  datetime: string;
};

const DateTime = ({ datetime }: DateTimeProps) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const formatDate = dayjs.utc(datetime).tz("Asia/Tokyo").format("YYYY-MM-DD");

  return <time dateTime={formatDate}>{formatDate}</time>;
};

export default DateTime;
