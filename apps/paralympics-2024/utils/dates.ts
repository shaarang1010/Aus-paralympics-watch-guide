export const getEventDates = () => {
  return [
    '2024-08-28',
    '2024-08-29',
    '2024-08-30',
    '2024-08-31',
    '2024-09-01',
    '2024-09-02',
    '2024-09-03',
    '2024-09-04',
    '2024-09-05',
    '2024-09-06',
    '2024-09-07',
  ].map((d) => ({
    label: `${d.split('-').at(2)} ${
      d.split('-').at(1) === '08' ? 'August' : 'September'
    }`,
    value: d,
  }));
};
