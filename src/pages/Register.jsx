import Add from "../img/addAvatar.png";

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Messenger</span>
        <span className="title">Register</span>

        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="Avatar" />
            <span>Add an Avatar</span>
          </label>

          <button>Sign Up</button>
        </form>

        <p>You do have an Account? Login</p>
      </div>
    </div>
  );
};
