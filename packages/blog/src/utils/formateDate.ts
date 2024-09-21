const padNumber = (number: number): string => {
  return String(number).padStart(2, '0');
};

const formatDateYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = padNumber(date.getMonth() + 1);
  const day = padNumber(date.getDate());

  return `${year}-${month}-${day}`;
};

export const formatDate = (date: string): string => {
  const dateObject = new Date(date);
  const formattedDate = formatDateYYYYMMDD(dateObject);
  const formattedNow = formatDateYYYYMMDD(new Date());

  if (formattedDate === formattedNow) {
    return `${padNumber(dateObject.getHours())}:${padNumber(
      dateObject.getMinutes()
    )}`;
  }

  return formattedDate;
};
