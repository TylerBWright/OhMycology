import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";

function Substrate() {
  return (
    <div className="flexCenter">
      <div className="panel">
        <Header />
        <section id="intro">
          <img
            id="mainpanel"
            src="./images/substratemain.jpg"
            alt="Delectable chicken of the wood fungi growing from a shared substrate"
          />
          <h1 id="blurb">sub·strate /ˈsəbˌstrāt/</h1>
          <div className="page">
            <p>
              "the surface or material on or from which an organism lives,
              grows, or obtains its nourishment." ~ Oxford Lexico
            </p>
          </div>
          <img
            id="stinkhorn"
            src="./images/stinkhorn.png"
            alt="A young stinkorn mushroom"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>Welcome to the Substrate</h2>
              <p>
                The <strong>Substrate</strong> is the place where our members'
                mushrooms take root and grow!
              </p>
              <p>
                You may browse member contributions, engage in ongoing
                discussions to positively ID a shroom, or post your own and see
                what the community thinks. Let's keep it PG and mushy!
              </p>
              <h1>
                <div className="navigation">
                  <Link to={"/takeroot"}>
                    <h1>Take Root</h1>
                  </Link>
                </div>
              </h1>
              <div className="typewriter">
                <p>
                  ^ ^ ^ post your mushroom specimen on the substrate. &#127812;
                  &#127812; &#127812;
                </p>
              </div>
            </article>
            <article>
              <h1>
                <div className="navigation">
                  <Link to={"/uproot"}>
                    <h1>Up Root</h1>
                  </Link>
                </div>
              </h1>
              <div className="typewriter">
                <p>
                  ^ ^ ^ check out member finds and give your $0.02. &#x1F50D;
                  &#x1F50D; &#x1F50D;
                </p>
              </div>
            </article>
            <img
              id="lichenbottom"
              src="./images/coral.png"
              alt="A coral mushroom"
            />
          </main>
          <aside>
            <Sidebar />
            <img
              id="didyouknow"
              src="./images/turkeytail.jpg"
              alt="A lone turkey tail polypore growing from a tree branch"
            />
            <blockquote>
              "Members post their recent finds in the substrate, sparking a
              broad peer dialogue. The initial post grows and matures as
              comments come in, much like a mushroom unto its host."
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

export default Substrate;
