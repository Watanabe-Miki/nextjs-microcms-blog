import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  datetime: string;
};

const DateTime = ({ datetime }: Props) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const formatDate = dayjs.utc(datetime).tz("Asia/Tokyo").format("YYYY-MM-DD")

  return (
    <time dateTime={formatDate}>
      {formatDate}
    </time>
  );
};

export default DateTime;
