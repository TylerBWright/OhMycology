import { Link } from "react-router-dom";

const Header = () => {
  const user = localStorage.getItem("user");
  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    alert("You are logged out.");
  };

  return (
    <header>
      <div id="logo">
        <Link to="/" title="Return to Home Page">
          <img src="/images/justshroom.jpg" alt="A shroom" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          {user != null && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {user == null && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
          {user == null && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user != null && (
            <li>
              <Link to={"/home"} onClick={() => Logout()}>Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
