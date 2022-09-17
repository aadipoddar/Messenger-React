export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Messenger</span>
        <span className="title">Login</span>

        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>
        </form>

        <p>You don't have an Account? Register</p>
      </div>
    </div>
  );
};
