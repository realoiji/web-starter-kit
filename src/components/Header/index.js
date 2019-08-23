import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/authenticated';

const Header = () => {
  console.log('Render Header');
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <Styled>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/home/AboutScreen">About</NavLink>
      <NavLink to="/EnquiryScreen">Enquiry</NavLink>
      <NavLink to="/login">Login</NavLink>
      {user && <button onClick={() => handleLogout()}>Log out</button>}
    </Styled>
  );
};

export default Header;

const Styled = styled.div`
  label: header;
`;
