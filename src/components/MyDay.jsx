const MyDay = () => {
  const date = new Date();

  const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;

  return (
    <MyDayWrapper>
      <Title>Mi día</Title>
      <DateText>{formattedDate}</DateText>
    </MyDayWrapper>
  );
};

export default MyDay;
