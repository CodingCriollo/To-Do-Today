import styled from 'styled-components';

const MyDayWrapper = styled.div`
  background-color: #5c5470;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin: 1.5rem;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #ff9130;
  margin-bottom: 5px;
`;

const DateText = styled.p`
  color: #ff5b22;
  font-size: 1.5rem;
  margin-top: 5px;
`;

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
      <Title>
        Mi día
        <div>
          <img width="48px" height="48px" src="src/assets/imgs/sun.svg" alt="Sun"></img>
        </div>
      </Title>
      <DateText>{formattedDate}</DateText>
    </MyDayWrapper>
  );
};

export default MyDay;
