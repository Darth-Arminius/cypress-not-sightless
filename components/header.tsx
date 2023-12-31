import Nav from './nav';
import Logo from './logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className='left'>
        <Link href='/' legacyBehavior>
          <a>
            <span className='logo'>
              <Logo />
            </span>
            <span className='title'>Hacker Next</span>
          </a>
        </Link>
        <div className='nav'>
          <Nav />
        </div>
      </div>
      <div className='right'>
        <Link href='/login' legacyBehavior>
          <a className='login' data-testid='header-login-link'>
            login
          </a>
        </Link>
      </div>

      <style jsx>{`
        header {
          background: #ffa52a;
          display: flex;
          font-size: 14px;
        }

        .logo {
          margin: 4px 5px 2px 4px;
          display: inline-block;
        }

        .left {
          flex: 9;
        }

        .right {
          flex: 1;
          text-align: right;
        }

        .title {
          font-weight: bold;
          display: inline-block;
          font-size: 14px;
          text-decoration: none;
          padding: 8px 10px 8px 4px;
          color: #000;
          vertical-align: top;
        }

        a.login {
          padding: 10px;
          display: inline-block;
          font-size: 11px;
          text-transform: uppercase;
          text-decoration: none;
          color: #000;
        }

        .login:hover {
          color: #fff;
        }

        .nav {
          display: inline-block;
          vertical-align: top;
        }

        @media (max-width: 750px) {
          .title {
            font-size: 16px;
            padding-bottom: 0;
          }

          a.login {
            padding: 24px 10px 23px;
          }

          .nav {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
