export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Messenger</span>
      <div className="user">
        <img
          src="https://avatars.githubusercontent.com/u/83405769?s=400&u=515f7889a3ddb7b9ba526babd23d28db28bdd8f2&v=4"
          alt="Avatar"
        />
        <span>John</span>
        <button>Log Out</button>
      </div>
    </div>
  );
};
