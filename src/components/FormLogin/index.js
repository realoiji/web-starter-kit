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
        <h2>Hello !</h2>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="Password"
            value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
          />
        </div>
        <div className="action-button">
          <a href="/forget-password">Forgot Password ?</a>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
        
      </form>
    </Styled>
  );
};

export default FormLogin;

const Styled = styled.div`
  label: FormLogin;
  .input-container {
    display: flex;
    flex-direction: column;
  }
  .action-button {
    display: flex;
    justify-content: space-between;
  }
`;
