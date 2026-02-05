import React from 'react';

const Header = () => {
  const [loginStatus, setLoginStatus] = React.useState('Login');

  const handelLogout = () => {
    if (loginStatus === 'Login') {
      setLoginStatus('Logout');
    } else {
      setLoginStatus('Login');
    }
  };
  return (
    <div className="header-container">
      <div className="logo-wrap">
        <img
          src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700"
          alt="logo"
          className="logo"
        />
      </div>
      <nav className="nav-wrap">
        <li href="/">Home</li>
        <li href="/about">About</li>
        <li href="/contact">Contact</li>
        <li href="/logout" onClick={handelLogout}>
          {loginStatus}
        </li>
      </nav>
    </div>
  );
};

export default Header;
