const moment = require("moment-timezone");
export const dateHelper = {
  convertUTCToLocalDateTime(
    UTCServer: string = "",
    timezoneOffset: number = 7
  ) {
    const date = moment(UTCServer);
    const offSet = date.utcOffset() / 60;
    const diff = timezoneOffset - offSet;
    date.add(diff, "hours");
    const newDate = moment();
    newDate.set({
      year: date.year(),
      month: date.month(),
      date: date.date(),
      hour: date.hour(),
      minute: date.minute(),
      second: date.second(),
      millisecond: date.millisecond(),
    });
    return newDate.toDate();
  },

  convertLocalTimeZoneToNewTimeZone(
    date: Date,
    isTimeSlot: boolean = false,
    timezone: string = "Asia/Phnom_Penh"
  ) {
    if (isNaN(date.getTime())) {
      return "";
    }
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = isTimeSlot ? date.getHours() : 0;
    const minute = isTimeSlot ? date.getMinutes() : 0;
    const second = isTimeSlot ? date.getSeconds() : 0;
    const millisecond = isTimeSlot ? date.getMilliseconds() : 0;

    const newTime = moment.tz(date, timezone);
    newTime.set({
      year: year,
      month: month,
      date: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
    });
    return moment.utc(newTime).format();
  },
};
