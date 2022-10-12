import styled from 'styled-components';

export const TransactionTable = styled.table`
  padding-bottom: 50px;
`;

export const TransactionHead = styled.thead`
  background-color: aqua;
`;

export const TransactionHeadCell = styled.th`
  color: white;
  padding: 10px 20px;
  box-shadow: 0px 0px 5px grey;
  text-transform: uppercase;
`;

export const TransactionBodyCell = styled.td`
  padding: 10px 20px;
  box-shadow: 0px 0px 5px grey;
  :not(:first-child) {
    text-align: center;
  }
  text-transform: capitalize;
`;

export const TransactionBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: bisque;
  }
`;
