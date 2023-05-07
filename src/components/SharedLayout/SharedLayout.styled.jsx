import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 20px;
  padding: 20px 0;
  border-bottom: 2px solid #000;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  color: #000;
  text-decoration: none;

  &.active {
    color: #00f;
    text-decoration: underline;
  }
`;
