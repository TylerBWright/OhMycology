import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";

function App() {
  return (
    <div className="flexCenter">
      <div className="panel">
        <Header />
        <section id="intro">
          <img
            id="mainpanel"
            src="./images/indexmain.jpg"
            alt="Turkey tail mushrooms growing from a felled tree"
          />
          <h1 id="blurb">
            OhMycology is a rallying point for mushroom enthusiasts at every
            level.
          </h1>
          <p>
            It's simple–upload a photo of your recent find, provide data on your
            specimen, and see what the community says. Do you have a delectable
            chantrelle, or a fungus from hell?
          </p>
          <p>&#127812; Join Us Today! &#127812;</p>
          <img src="./images/turkeytail.png" alt="Lichen illustration" />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>How it Works</h2>
              <p>
                Once registered, you may navigate to the{" "}
                <strong>Substrate</strong>, a showcase of mushroom finds
                submitted by OhMycology contributors. Members provide a photo
                and details on their 'shroom, to include morphological
                attributes, location, etcetera&ndash;and then the group chimes
                in. Members may also engage in direct virtual chats with peers
                via the <strong>Mycorrhizae</strong> messenger platform.
              </p>
            </article>
            <article>
              <h2>Genesis</h2>
              <p>
                We recognized a need to connect mushroom foragers, professional
                mycologists, and naturalists together online&ndash;and thus
                began <strong>OhMycology.</strong> Our aim with this social
                network and identification community is to solve the following
                challenges:
              </p>
              <ul>
                <li>
                  Tired of always being the only one to show up to a mushroom
                  hunt? OhMycology brings fellow enthusiasts straight to you
                  from the comfort of your own home.
                </li>
                <br />
                <li>
                  Before deciding to sauté that puffball, you should probably
                  get a second opinion... and a third! An old wise man once
                  said: "There are old mushroom foragers and bold mushroom
                  foragers, but there are no <em>old bold</em> mushroom
                  foragers."
                </li>
                <br />
                <li>
                  Despite there being more resources than ever before to
                  positively ID mushrooms in the wild, people are still afraid
                  of them. We aim to put that fear to rest!
                </li>
              </ul>
            </article>
            <article>
              <h2>Membership</h2>
              <p>
                Our members are as numerous as the lichens on a cemetary park
                bench; which is <em>a lot,</em> in case you didn't know. We are
                comprised of the following:
              </p>
              <ul>
                <li>
                  <strong>Reishi:</strong> Known for centuries as the king of
                  the mushrooms. This role is reserved for our tireless
                  administrators who manage the Wood Wide Web and keep
                  everything going.
                </li>
                <br />
                <li>
                  <strong>Chanterelle:</strong> Professional mycologists
                  belonging to a variety of scientific backgrounds. If you see a
                  chanterelle weigh-in, chances are they know what they are
                  talking about.
                </li>
                <br />
                <li>
                  <strong>Morel:</strong> These are our regular Joes and Janes
                  in the field, honing their <em>morel compass</em> each and
                  every day.
                </li>
              </ul>
              <p>We hope you like dad jokes. We're fun guys!</p>
            </article>
            <article>
              <h2>Contact</h2>
              <p>
                Are you lichen what we do? Email us at:{" "}
                <a href="mailto:reishi@ohmycology.net">reishi@ohmycology.net</a>
              </p>
            </article>
            <img
              id="lichenbottom"
              src="./images/blackreishi.png"
              alt="Lichen illustration"
            />
          </main>
          <aside>
            <Sidebar />
            <img
              id="members"
              src="./images/members.jpg"
              style={{ "border-radius": "50%" }}
              alt="Girl presenting a black fungus"
            />
            <blockquote>
              "My daughters and I envisioned a place where mushroom foragers
              might share their finds and nerd out on all things fungi with
              friends across the globe. We welcome you with open arms to the
              OhMycology network!"
            </blockquote>
            <cite>
              <span>Tyler Wright</span>
              <br />
              Founder of OhMycology
            </cite>
          </aside>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
