import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useReactRouter from 'use-react-router';
import { useAuth } from 'context/authenticated';

const FormLogin = (props) => {
  console.log('Render FormLogin', props);
  const { className } = props;
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, authByUserAndPass } = useAuth();
  const { history } = useReactRouter();
  useEffect(() => {
    console.log('Render useEffect user', user);
    if (user) history.push('/EnquiryScreen');
    // return () => {
    //   cleanup
    // };
  }, [user, history]);

  const checkAuthentication = () => {
    setTimeout(() => {
      const authPass = authByUserAndPass(username, userPassword);
      console.log('authPass', authPass);
      if (authPass) {
        history.push('/EnquiryScreen');
        // redirect to previous link or admin home page
      } else {
        setLoading(false);
        // show alert filter
      }
    }, 2000);
  };

  return (
    <Styled className={className}>
      <form
        onSubmit={e => {
          e.preventDefault();
          setLoading(true);
          checkAuthentication();
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
    </Styled>
  );
};

export default FormLogin;

const Styled = styled.div`
  label: header;
`;
