import moment from 'moment'
export const formatStamp = (timestamp, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (timestamp) {
    try {
      return moment(timestamp, 'YYYYMMDD').format(format);
    } catch (e) {
      console.log(e);
    }
  }
  return timestamp || '-';
}