import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Herbarium() {
  return (
    <div className="flexCenter">
      <div className="panel">
        <Header />
        <section id="intro">
          <img
            id="mainpanel"
            src="images/herbmain.jpg"
            alt="Two green-spored lepiotas"
          />
          <h1 id="blurb">her·​bar·​i·​um | \ ˌ(h)ər-ˈber-ē-əm</h1>
          <div className="page">
            <p>
              "a collection of dried plant specimens usually mounted and
              systematically arranged for reference." ~ Merriam-Webster
              Dictionary
            </p>
          </div>
          <img
            id="lichen"
            src="./images/lichentop.jpg"
            alt="Lichen illustration"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>A Collection of Specimens in Our Digital Herbarium</h2>
              <p>
                Each month we provide a highlight of one of the more interesting
                member finds. In addition to archiving member contributions for
                posterity, our staff and guest bloggers provide additional
                information on the genus, to include:
              </p>
              <ul>
                <li>Common and scientific names.</li>
                <br />
                <li>Interview with the contributor(s).</li>
                <br />
                <li>Data gleaned through scientific inquiry.</li>
                <br />
                <li>Folk beliefs, uses, and myths.</li>
                <br />
                <li>Recipes (if edible).</li>
                <br />
                <li>Toxicitiy information (if poisonous).</li>
                <br />
                <li>Farming techniques.</li>
              </ul>
            </article>
            <article>
              <h1>
                <div className="navigation">
                  <Link to={"/vault"}>
                    <h1>Specimens</h1>
                  </Link>
                </div>
              </h1>
              <div className="typewriter">
                <p>
                  ^ ^ ^ access past specimens from the vault. &#128193;
                  &#128193; &#128193;
                </p>
              </div>
              <h2>Recent: </h2>
              <ul>
                <li>
                  <Link to={"/vault/aug2021"}>
                    Devil's Urn <em>(Urnula craterium)</em>
                  </Link>
                </li>
              </ul>
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
              id="didyouknow"
              src="images/berkeleyspolypore.jpg"
              alt="Charcoal illustration of a berkeley's polypore in its natural habitat"
            />
            <blockquote>Illustration: "Bondarzewia berkeleyi"</blockquote>
            <cite>
              <span>Tyler Wright, 2019</span>
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

export default Herbarium;
