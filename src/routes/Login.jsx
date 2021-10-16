import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUserApi } from "../api/users_api";

function Login() {
  const history = useHistory();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    loginUserApi(username, password)
      .then((res) => {
        // If success, do this
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        alert("Welcome back!");
        history.push("/home");
      })
      .catch((err) => {
        // If error (not 200/201/202), do this
        alert("Unable to log in. Please try again.");
      });
  };

  return (
    <div className="flexCenter">
      <div className="panel">
        <Header />
        <section id="intro">
          <img
            id="mainpanel"
            src="./images/loginmain.jpg"
            alt="A lichen colony growing on granite"
          />
          <h1 id="blurb">Log-in</h1>
          <img
            id="lichen"
            src="./images/lichentop.jpg"
            alt="Lichen illustration"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>Welcome Back!</h2>
              <p>
                Please enter your <strong>Username</strong> and{" "}
                <strong>Password</strong> and press the 'Submit' button. If you
                experience trouble logging in, feel free to contact us at{" "}
                <a href="mailto:reishi@ohmycology.net">reishi@ohmycology.net</a>
                . You may expect a response within 72 hours.
              </p>
            </article>
            <article>
              <div className="container">
                <fieldset>
                  <h2>
                    <strong>Login</strong>
                  </h2>
                  <div className="fields">User Name:</div>
                  <input
                    type="text"
                    id="inputUsername"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <br /> <div className="fields">Password:</div>
                  <input
                    type="password"
                    id="inputPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <br />
                  <input type="submit" onClick={() => login()} />
                  <div className="page">
                    <h2>OhMycology</h2>
                  </div>
                </fieldset>
              </div>
            </article>
            <img
              id="lichen"
              src="./images/lichenbottom.jpg"
              alt="Lichen illustration"
            />
          </main>
          <aside>
            <Sidebar />
            <br />
            <br />
          </aside>
        </section>
        <Footer />
        <div className="elephant">
          <img
            id="elephant"
            src="./images/elephantear.png"
            alt="Elephant ear fungus"
          />
        </div>
        <div className="turkeyside">
          <img
            id="turkeyside"
            src="./images/turkeyside.png"
            alt="Turkey tail polypores"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
