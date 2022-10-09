import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 50px;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px gray;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const Avatar = styled.img`
  height: 100px;
  border-radius: 100%;
  padding-bottom: 50px;
`;

export const Username = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const UserInformation = styled.p`
  color: gray;
  margin-top: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  background-color: gainsboro;
  margin-top: 10px;
  height: 65px;
`;

export const StatsItem = styled.li`
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  :not(:first-child) {
    border-left: 1px solid grey;
  }
`;

export const StatsText = styled.span`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;
