import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const NavItem = styled.li`
  margin-right: 25px;
`;

const LinkStyled = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  font-size: 24px;
  color: #ff6b08;
  &.active {
    color: Green;
  }
`;

export { NavigationStyled, NavList, NavItem, LinkStyled };
