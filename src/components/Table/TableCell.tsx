import styled from 'styled-components';

interface TdProps {
  noBorder?: true;
}

const TableCell = styled.td`
  padding: 10px 20px;
  border-bottom: ${(props: TdProps) => {
    return props.noBorder ? 'none' : '2px solid #ddd';
  }};
`;

export default TableCell;
