import Link from 'next/link';

export default function LoginForm() {
  return (
    <div>
      <h4>Login</h4>
      <p>
        username: <input type='text' data-testid='login-username-input' />
        <br />
        password: <input type='password' data-testid='login-password-input' />
      </p>
      <Link href='/'>
        <button data-testid='login-cta'>login</button>
      </Link>
      <p>
        <a href='#'>Forgot your password?</a>
      </p>
      <h4>Create Account</h4>
      <p>
        username: <input type='text' data-testid='signup-username-input' />
        <br />
        password: <input type='password' data-testid='signup-password-input' />
      </p>
      <Link href='/'>
        <button data-testid='signup-cta'>create account</button>
      </Link>

      <style jsx>{`
        p {
          line-height: 22px;
        }
      `}</style>
    </div>
  );
}
