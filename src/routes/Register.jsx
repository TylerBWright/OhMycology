import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const history = useHistory();

  const register = () => {
    if (
      email === "" ||
      username === "" ||
      password === "" ||
      checkbox === false
    ) {
      alert("You are missing something. Please try again.");
      return;
    }
    axios
      .post("http://localhost:8080/register", {
        email: email,
        username: username,
        password: password,
        bio: bio,
      })
      .then((res) => {
        alert("Thank you for regsitering! You may now log in.");
        history.push("/home");
      })
      .catch((err) => {
        alert("An unexpected error occured.");
      });
  };

  return (
    <div className="flexCenter">
      <div className="panel">
        <Header />
        <section id="intro">
          <img
            id="mainpanel"
            src="./images/lichenmain.jpg"
            alt="A foliose lichen growing from a dead tree branch"
          />
          <h1 id="blurb">Registration</h1>
          <img
            id="lichen"
            src="./images/lichentop.jpg"
            alt="Lichen illustration"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>Join Us Today!</h2>
              <p>Registration is completely free.</p>
              <p>Member benefits include:</p>
              <ul>
                <li>
                  Full access to the <strong>Substrate</strong>. Comment on
                  other members' mushroom finds and post your own.
                </li>
                <br />
                <li>
                  Use of the <strong>Mycorrhizae</strong> messenger tool to
                  privately communicate with colleagues and peers.
                </li>
                <br />
                <li>
                  Access to all past and future monthly mushrooms features in
                  the <strong>Herbarium</strong>.
                </li>
              </ul>
            </article>
            <article>
              <div className="container">
                <fieldset>
                  <h2>
                    <strong>Registration</strong>
                  </h2>
                  <div className="fields">Email:</div>
                  <input
                    type="email"
                    id="inputEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br /> <div className="fields">User Name:</div>
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
                  <label>
                    <div className="fields">Personal Bio:</div>
                  </label>
                  <textarea
                    rows="5"
                    cols="50"
                    placeholder="You may provide details about yourself here, including what draws you to the world of fungi."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                  <br />
                  <br />
                  <div className="terms">
                    *** Any opinions expressed by members of the OhMycology
                    network are not to be taken as professional advice and/or
                    encouragement to consume wild mushrooms. By engaging in the
                    OhMycology network, you accept full responsibility for any
                    decisions made as pertaining to the handling and consumption
                    of fungi. Mushroom hunting is a safe hobby for thousands of
                    people worldwide. You may safely participate in this hobby,
                    too, provided that precautions are observed every step of
                    the way. One false analysis may result in serious adverse
                    effects to your health, up to and including death. ***
                  </div>
                  <br />
                  <div className="terms">
                    *** Please note that OhMycology staff reserves the right to
                    remove any posts for any reason. The purpose of this forum
                    is to educate participants on all things fungi, therefore we
                    expect our members to keep posts focused toward this aim.
                    Personal attacks, political deviations, solicitations, and
                    other statements which detract from the overall goal of
                    educating can and will be removed without prior explanation.
                    Repeat violations may result in the permanent banning of a
                    member. ***
                  </div>
                  <br />
                  <div className="terms">
                    By checking this box, you agree to the terms outlined above:
                  </div>
                  <br />
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="inputAccept"
                    onChange={(e) => setCheckbox(e.target.value)}
                  />
                  <br />
                  <br />
                  <input type="submit" onClick={() => register()} />
                  <div className="page">
                    <h2>OhMycology</h2>
                  </div>
                </fieldset>
              </div>
            </article>
            <img
              id="lichenbottom"
              src="./images/lichenbottom.jpg"
              alt="Lichen illustration"
            />
          </main>

          <aside>
            <Sidebar />
            <img
              id="members"
              src="./images/register.jpg"
              style={{ "border-radius": "50%" }}
              alt="Girl presenting a witch's butter fungus"
            />
            <blockquote cite>"Look dad! Witch's butter!"</blockquote>
            <cite>
              <span>Dyani Wright</span>
            </cite>
            <br></br>
          </aside>
        </section>
        <Footer />
        <div className="pencil">
          <img
            id="pencil"
            src="./images/pencil.png"
            alt="a standard graphite pencil"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
