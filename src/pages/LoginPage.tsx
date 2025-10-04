import React, { useState } from 'react';
import { IconGithub } from '../components/IconGithub';

export function LoginPage(): JSX.Element {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="h1">
          Welcome Back to the <span className="accent">Fastest Growing</span> Online
          Community
        </h1>

        <div className="sso">
          <button className="sso-btn" type="button" onClick={() => alert('GitHub SSO clicked')}
            aria-label="Sign in with GitHub">
            <IconGithub />
            <span>Sign in with GitHub</span>
          </button>
        </div>

        <div className="hr">or</div>

        <form onSubmit={onSubmit} noValidate>
          <label className="label" htmlFor="email">Email Address</label>
          <div className="input-wrap">
            <input
              id="email"
              type="email"
              className="input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label className="label" htmlFor="password">Password</label>
          <div className="input-wrap">
            <input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              className="input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <span
              className="eye"
              role="button"
              aria-label={passwordVisible ? 'Hide password' : 'Show password'}
              onClick={() => setPasswordVisible((v) => !v)}
            >
              {passwordVisible ? '🙈' : '👁️'}
            </span>
          </div>

          <button className="signin" type="submit">Sign In</button>
        </form>

        <div className="helper">
          <a className="link" href="#" onClick={(e) => { e.preventDefault(); alert('Reset flow'); }}>Forgot your password?</a>
        </div>

        <div className="footer">
          Don’t have an account? <a className="link" href="#" onClick={(e) => { e.preventDefault(); alert('Sign Up'); }}>Sign Up</a>
        </div>
      </div>
    </div>
  );
}
