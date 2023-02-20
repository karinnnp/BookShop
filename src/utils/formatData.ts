import { format, getYear, set } from 'date-fns';
import th from 'date-fns/esm/locale/th/index.js';

export const formatNumber = (value: string) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const converTime = (date: Date) => format(new Date(date), 'HH:mm');

export const convertDateByHyphen = (date: Date) =>
  format(new Date(date), 'dd-MM-yyyy');

export const convertDateMinuteByBarAndSlash = (date: Date) =>
  format(new Date(date), 'dd/MM/yyyy | HH:mm');

export const convertDateMinuteByHyphen = (date: Date) =>
  format(new Date(date), 'dd-MM-yyyy HH:mm');

export const formatDateMonthYearTH = (date: Date) =>
  format(new Date(date), 'yyyy-MM-dd');

export const formatDateTH = (value: Date) =>
  format(convertToBuddhistYear(new Date(value)), 'dd-MM-yyyy | HH:mm', { locale: th,});

export const formatOnlyDateTH = (value: Date | string) =>
  format(convertToBuddhistYear(new Date(value)), 'dd MMM yy', { locale: th });

export const formatDateWithMonthTH = (value: Date) =>
  format(convertToBuddhistYear(new Date(value)), 'M', { locale: th });

export const formatDateWithYearTH = (value: Date) =>
  format(convertToBuddhistYear(new Date(value)), 'yyyy', { locale: th });

export const formatMonthYearTH = (value: Date) =>
  format(convertToBuddhistYear(new Date(value)), 'MM/yyyy', { locale: th });

export const convertToBuddhistYear = (date: Date) => {
  const christianYear = getYear(date);

  var buddhishYear = christianYear + 543;
  return set(new Date(date), { year: buddhishYear });
};

export const formatPrice = (value: any) => {
  return `฿ ${new Intl.NumberFormat('th-TH').format(value)}`;
};

export const formatMoneyAmount = (value: any) => {
  return `฿ ${new Intl.NumberFormat('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2, }).format(value)}`;
};
