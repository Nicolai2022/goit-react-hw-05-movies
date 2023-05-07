import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.section``;

export const Title = styled.h2`
  font-size: 30px;
  margin: 10px 0;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 400px;
  height: 32px;
  font: inherit;
  font-size: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Btn = styled.button`
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.2;
  font-style: normal;
  font-weight: 400;
  background-color: #452852;
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const LinkItem = styled(Link)`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #587524;
    text-decoration: underline;
  }
`;
