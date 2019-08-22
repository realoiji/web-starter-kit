import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <Styled>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/home/AboutScreen">About</NavLink>
      <NavLink to="/EnquiryScreen">Enquiry</NavLink>
      <NavLink to="/login">Login</NavLink>
    </Styled>
  );
};

export default Header;

const Styled = styled.div`
  label: header;

`;