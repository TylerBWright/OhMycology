import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Profile() {
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
          <h1 id="blurb">User Profile</h1>
          <img
            id="lichen"
            src="./images/lichentop.jpg"
            alt="Lichen illustration"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>(Username)'s Profile</h2>
            </article>
            <article>
              <div className="container">
                <form action="/register" method="get">
                  <fieldset>
                    <h2>
                      <strong>Edit Profile</strong>
                    </h2>
                    <div className="fields">User ID:</div>
                    <input type="text" id="inputUserId" />
                    <br />
                    <div className="fields">First Name:</div>
                    <input type="text" id="inputFirstName" />
                    <br />
                    <div className="fields">Last Name:</div>
                    <input type="text" id="inputLastName" />
                    <br />
                    <div className="fields">Role:</div>
                    <select type="text" id="inputRole" placeholder="Morel">
                      <option value="MOREL">Morel</option>
                      <option value="CHANTERELLE">Chanterelle</option>
                      <option value="REISHI">Reishi</option>
                    </select>
                    <br />
                    <div className="fields">Email:</div>
                    <input type="email" id="inputEmail" />
                    <br />
                    <div className="fields">User Name:</div>
                    <input type="text" id="inputUsername" />
                    <br />
                    <div className="fields">Password:</div>
                    <input type="password" id="inputPassword" />
                    <br />
                    <br />
                    <label>
                      <div className="fields">Personal Bio:</div>
                    </label>
                    <textarea
                      rows="5"
                      cols="50"
                      placeholder="You may provide details about yourself here, including your experience with mushrooms and other interests."
                    ></textarea>
                    <br />
                    <br />
                    <div className="fields">Joined Date:</div>
                    <input type="text" id="inputCreated" />
                    <br />
                    <div className="fields">Posts:</div>
                    <input type="text" id="inputCreated" />
                    <br />
                    <br />
                    <input type="submit" value="Update" />
                    <br />
                    <br />
                    <div className="fields">
                      <input type="submit" value="Deactivate User" />
                    </div>
                    <div className="page">
                      <h2>OhMycology</h2>
                    </div>
                  </fieldset>
                </form>
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
              style={{ "borderRadius": "50%" }}
              alt="Girl presenting a witch's butter fungus"
            />
            <blockquote>
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
