import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UpRoot() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        alert("An unexpected error occured.");
      });
  }, []);

  return (
    <div className="flexCenter">
      <div className="panel">
        <Header />
        <section id="intro">
          <img
            id="mainpanel"
            src="./images/uprootmain.jpg"
            alt="Several polypores on a log"
          />
          <h1 id="blurb">Up Root : Member Finds</h1>
          <img
            id="lichen"
            src="./images/lichentop.jpg"
            alt="Lichen illustration"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>Do You Know What It Is?</h2>
              <p>
                OhMycology members are eager to share their finds on the{" "}
                <strong>Substrate</strong>, pooling our intellect and knowledge
                of the natural world around us. As you can see, our mushroom
                gallery is growing.
              </p>
              <p>
                Our network brings together the best minds in mycology, at{" "}
                <em>every</em> level. Even the most seasoned mushroom forager
                may learn something new each day! There is so mush room (get
                it?) to get involved, so do consider joining in on the
                conversation.
              </p>
            </article>
            <article>
              <h2>Click on a thumbnail below to get started:</h2>
            </article>
            <article>
              {posts != null &&
                posts.map((post) => (
                  <div className="flexCenterColumn">
                    <Link to={`post/${post.id}`}>
                      <img
                        src={`http://localhost:8080/posts/${post.id}/image`}
                        style={{
                          width: "100%",
                        }}
                        alt="User-submitted mushroom find"
                      />
                    </Link>
                    <div className="fields">
                      <strong>Contributor:&nbsp;</strong>
                      {post.user != null && post.user.username}
                    </div>
                  </div>
                ))}
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
              src="./images/morel_hand.png"
              alt="Massive morel mushroom in a hand"
            />
            <blockquote cite>
              "You'll find the morel when you least expect it. My advice is to
              simply not look for it and then&ndash;BAM! There it is!"
            </blockquote>
            <cite>
              <span>Tyler Wright</span>
              <br />
              Founder of OhMycology
            </cite>
            <br></br>
          </aside>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default UpRoot;
