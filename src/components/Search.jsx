export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find A User" />
      </div>

      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/83405769?s=400&u=515f7889a3ddb7b9ba526babd23d28db28bdd8f2&v=4"
          alt="Avatar"
        />

        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};
