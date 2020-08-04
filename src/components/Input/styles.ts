import styled from 'styled-components';

const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }

    /* Aplica a partir do segundo elemento input dentro do form*/
    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export default Container;
