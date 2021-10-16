import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";

function Mycorrhizae() {
  return (
    <div className="flexCenter">
      <div className="panel">
        <Header />
        <section id="intro">
          <img
            id="mainpanel"
            src="images/mycorrhizaemain.jpg"
            alt="A large meaty polypore"
          />
          <h1 id="blurb">my·cor·rhi·za /ˌmīkəˈrīzə/</h1>
          <div className="page">
            <p>
              "late 19th century: modern Latin, from myco- ‘of fungi’ + Greek
              rhiza ‘root’." ~ Oxford Lexico
            </p>
          </div>
          <img
            id="halfsize"
            src="./images/cinred.png"
            alt="Cinnabar red polyrpores"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>Chat Via the Mycorrhizae</h2>
              <p>
                Members may take advantage of our internal messaging system,
                dubbed the <strong>Mycorrhizae.</strong> Much like the
                filamentous network of fungi which make up the Wood Wide Web
                (that's a real thing) this chat function provides a direct link
                between our members for the purpose of advancing discussions
                outside of the <strong>Substrate.</strong>
              </p>
              <h1>
                <div className="navigation">
                  <Link to={"/startchat"}>
                    <h1>Start a Chat</h1>
                  </Link>
                </div>
              </h1>
              <div className="typewriter">
                <p>
                  ^ ^ ^ find a fungal friend and chat 'em up. &#128516;
                  &#128525; &#128513;
                </p>
              </div>
            </article>
            <article>
              <h1>
                <div className="navigation">
                  <Link to={"/activechat"}>
                    <h1>Active Conversations</h1>
                  </Link>
                </div>
              </h1>
              <div className="typewriter">
                <p>
                  ^ ^ ^ catch up with a colleague. &#129488; &#129488; &#129488;
                </p>
              </div>
            </article>
            <img
              id="lichenbottom"
              src="./images/oyster.png"
              alt="Oyster mushrooms"
            />
          </main>
          <aside>
            <Sidebar />
            <img
              id="didyouknow"
              src="images/mycena.jpg"
              alt="A grouping of orange mycena mushrooms"
            />
            <blockquote cite="https://thekidshouldseethis.com/post/the-wood-wide-web-how-trees-secretly-talk-to-and-share-with-each-other">
              "Trees secretly talk to each other underground. They’re passing
              information and resources to and from each other through a network
              of mycorrhizal fungi&ndash;mykós means fungus and riza means root
              in Greek&ndash;a mat of long, thin filaments that connect an
              estimated 90% of land plants."
            </blockquote>
            <cite>
              <span>Rion Nakaya</span>
              <br />
              <a href="https://thekidshouldseethis.com/post/the-wood-wide-web-how-trees-secretly-talk-to-and-share-with-each-other">
                The Wood Wide Web: How trees secretly talk to and share with
                each other
              </a>
            </cite>
          </aside>
        </section>
        <Footer />
      </div>
    </div >
  );
}

export default Mycorrhizae;
