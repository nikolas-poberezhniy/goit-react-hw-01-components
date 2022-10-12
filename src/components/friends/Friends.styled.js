import styled from 'styled-components';

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  border: 1px grey solid;
  padding: 15px;
  border-radius: 5px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendsList = styled.ul`
  margin: 40px;
  padding: 20px;
  box-shadow: 0px 0px 5px grey;
  border-radius: 5px;
`;

export const Avatar = styled.img`
  padding: 0px 20px;
`;

export const Name = styled.p``;
