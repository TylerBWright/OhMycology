import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const user = sessionStorage.getItem("user");
  const Logout = () => {
    sessionStorage.removeItem("user");
    axios.post("http://localhost:8080/userLogout").then((res) => {
      alert("You are logged out.");
      history.push("/home");
    });
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
              <Link onClick={() => Logout()}>Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
