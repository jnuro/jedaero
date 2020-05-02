function dateToString(date: Date) {
  const year: string = date.getFullYear().toString();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();

  return `${year}-${appendZeroIfLowerThanTen(month)}-${appendZeroIfLowerThanTen(
    day
  )}`;
}

function appendZeroIfLowerThanTen(value: number): string {
  return value < 10 ? "0" + value : value.toString();
}

export default dateToString;
