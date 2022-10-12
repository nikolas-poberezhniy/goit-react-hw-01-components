import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  text-align: center;
  box-shadow: 0px 0px 15px grey;
  border-radius: 10px;
  margin-top: 40px;
`;

export const StatisticsTitle = styled.h2`
  padding-bottom: 20px;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

const randomColor = () => '#' + (((1 << 24) * Math.random()) | 0).toString(16);

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60px;
  height: 60px;
  background-color: ${randomColor};
  color: white;
`;

export const ItemLabel = styled.span``;

export const ItemPercentage = styled.span``;
