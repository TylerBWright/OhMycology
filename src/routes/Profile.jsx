import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Profile() {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    axios.defaults.withCredentials = true;
    axios
      .get(`http://localhost:8080/users/${loggedInUser.id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        alert("An unexpected error occured.");
      });
  }, []);

  const update = () => {
    axios
      .put(`http://localhost:8080/users/${user.id}`, user)
      .then((res) => {
        alert("Your profile has been updated.");
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
            src="./images/biomain.jpg"
            alt="Two green-spored lepiota mushrooms"
          />
          <h1 id="blurb">Your Profile</h1>
          <img
            id="lichen"
            src="./images/lichentop.jpg"
            alt="Lichen illustration"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h1>Welcome {user.username}!</h1>
            </article>
            <article>
              <div className="container">
                <fieldset>
                  <h2>Edit Profile</h2>
                  <div className="fields">First Name:</div>
                  <input
                    type="text"
                    id="inputFirstName"
                    value={user.firstName}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        firstName: e.target.value,
                      });
                    }}
                  />
                  <br />
                  <div className="fields">Last Name:</div>
                  <input
                    type="text"
                    id="inputLastName"
                    value={user.lastName}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        lastName: e.target.value,
                      });
                    }}
                  />
                  <br />
                  <div className="fields">Email:</div>
                  <input
                    type="email"
                    id="inputEmail"
                    value={user.email}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        email: e.target.value,
                      });
                    }}
                  />
                  <br />
                  <div className="fields">User Name:</div>
                  <input
                    type="text"
                    id="inputUsername"
                    value={user.username}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        username: e.target.value,
                      });
                    }}
                  />
                  <br />
                  <br />
                  <label>
                    <div className="fields">Personal Bio:</div>
                  </label>
                  <textarea
                    rows="5"
                    cols="50"
                    placeholder="You may provide details about yourself here, including your experience with mushrooms and other interests."
                    value={user.bio}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        bio: e.target.value,
                      });
                    }}
                  ></textarea>
                  <br />
                  <br />
                  <div className="fields">
                    <strong>Role:</strong>{" "}
                    <em>{user.role != null ? user.role.toLowerCase() : ""}</em>
                  </div>
                  <div className="fields">
                    <strong>Joined Date:</strong> {user.created}
                  </div>
                  <br />
                  <br />
                  <input
                    type="submit"
                    value="Update"
                    onClick={() => update()}
                  />
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
              src="./images/artistconk.jpg"
              style={{ "border-radius": "50%" }}
              alt="Girl presenting a witch's butter fungus"
            />
            <blockquote cite>
              Carve your story into the artist's conk (Ganoderma applanatum)
            </blockquote>
            <br></br>
          </aside>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
