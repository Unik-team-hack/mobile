const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const formatDate = (d: string) => {
  const date = new Date(d);
  const m = months[date.getMonth()];
  const day = date.getDate();
  const y = date.getFullYear();
  return `${m} ${day}, ${y}`;
};
