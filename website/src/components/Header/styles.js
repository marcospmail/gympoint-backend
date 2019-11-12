import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    height: 32px;
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #eee;

    img {
      width: 110px;
    }
  }

  aside {
    justify-self: flex-end;
    display: flex;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.active === 'true' ? '#444444 !important' : '#999999 !important'};
  font-size: 15px;
  display: inline;
  font-weight: bold;
  padding-right: 20px;

  & + li {
    padding: 0 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  strong {
    color: #666666;
    font-weight: bold;
  }

  button {
    line-height: 16px;
    margin-top: 4px;
    font-size: 14px;
    color: #de3b3b;
    background: none;
    border: 0;
  }
`;