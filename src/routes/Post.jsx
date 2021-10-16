import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostApi } from "../api/posts_api";
import { addCommentApi, deleteCommentApi } from "../api/comments_api";
import { formatDate } from "../helpers/date_helpers";

function Post() {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState({});
  const [user] = useState({});

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    getPostApi(postId)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        alert("An unexpected error occured.");
      });
    // eslint-disable-next-line
  }, []);

  const addComment = () => {
    addCommentApi(postId, comment)
      .then((res) => {
        post.comments.push(res.data);
        setPost({ ...post });
      })
      .catch((err) => {
        alert(err + "An unexpected error occured.");
      });
  };

  const removeComment = (commentId) => {
    deleteCommentApi(commentId)
      .then((res) => {
        post.comments = post.comments.filter(
          (comment) => comment.id !== commentId
        );
        setPost({ ...post });
      })
      .catch((err) => {
        alert("You are not authorized to remove comments.");
      });
  };

  return (
    <div className="flexCenter">
      <div className="panel">
        <Header />
        <section id="intro">
          <img
            id="mainpanel"
            src="/images/takerootmain.jpg"
            alt="Vibrant lichens growing from a large boulder in Oklahoma"
          />
          <h1 id="blurb">Up Root : Member Finds</h1>
          <img
            id="lichen"
            src="/images/lichentop.jpg"
            alt="Lichen illustration"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h1>
                Submitted by: {post.user != null ? post.user.username : ""}
              </h1>
              <h2>Can You Guess What It Is?</h2>
            </article>
            <article>
              <div className="container">
                <div className="mushroomdisplay">
                  <h2>Mushroom Data Sheet</h2>
                  <div className="fields">
                    <div className="sameline">
                      <div>
                        <strong>Contributor:&nbsp;</strong>
                        {post.user != null ? post.user.username : ""}
                      </div>
                      <div>
                        <em>
                          {post.user != null
                            ? post.user.role.toLowerCase()
                            : ""}
                        </em>
                      </div>
                    </div>
                  </div>
                  <div className="fields">
                    <strong>Title:</strong> <em>"{post.title}"</em>
                  </div>
                  <br />

                  <img
                    src={`http://localhost:8080/posts/${postId}/image`}
                    style={{
                      width: "100%",
                    }}
                    alt="User-submitted mushroom find"
                  />
                  <div className="fields">
                    <strong>Location:</strong> {post.location}
                  </div>
                  <div className="fields">
                    <strong>Color:</strong> {post.color}
                  </div>
                  <div className="fields">
                    <strong>Cap:</strong> {post.cap}
                  </div>
                  <div className="fields">
                    <strong>Stem:</strong> {post.stem}
                  </div>
                  <div className="fields">
                    <strong>Underside:</strong> {post.underside}
                  </div>
                  <div className="fields">
                    <strong>Spore Print:</strong> {post.sporePrint}
                  </div>
                  <div className="fields">
                    <strong>Texture:</strong> {post.texture}
                  </div>
                  <div className="fields">
                    <strong>Height (in cm):</strong> {post.height}
                  </div>
                  <div className="fields">
                    <strong>Diameter (in cm):</strong> {post.diameter}
                  </div>
                  <div className="fields">
                    <strong>Description:</strong> {post.description}
                  </div>
                  <div className="fields">
                    <strong>Submitted on:</strong> <em>{formatDate(post.createdAt)}</em>
                  </div>
                  <div className="page">
                    <h2>Specimen # {post.id}</h2>
                  </div>
                </div>

                {post.comments != null &&
                  post.comments.map((comment) => (
                    <div className="mushroomdisplay">
                      <div className="fields">
                        <div className="sameline">
                          <div>
                            <strong>Contributor:&nbsp;</strong>
                            {comment.user != null && comment.user.username}
                          </div>
                          <div>
                            <em>
                              {comment.user != null &&
                                comment.user.role.toLowerCase()}
                            </em>
                          </div>
                        </div>
                      </div>
                      <div className="fields">
                        <p>{comment.content}</p>
                      </div>
                      <div className="fields">
                        <strong>Submitted on:</strong>{" "}
                        <em>{formatDate(comment.createdAt)}</em>
                      </div>
                      {loggedInUser !== null && loggedInUser.role === "REISHI" && (
                        <div className="fields">
                          <input
                            type="submit"
                            value="Remove"
                            onClick={() => removeComment(comment.uuid)}
                          />
                        </div>
                      )}
                    </div>
                  ))}

                <div className="mushroomdisplay">
                  <fieldset>
                    <label>
                      <div className="fields">
                        <strong>Your Response: </strong>
                      </div>
                    </label>
                    <textarea
                      rows="5"
                      cols="50"
                      placeholder="Share your thoughts with the group."
                      value={comment.content}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <br />
                    <br />
                    <input
                      type="submit"
                      value="Comment"
                      onClick={() => addComment()}
                    />
                  </fieldset>
                </div>
              </div>
            </article>

            <img
              id="lichenbottom"
              src="/images/lichenbottom.jpg"
              alt="Lichen illustration"
            />
          </main>

          <aside>
            <Sidebar />
          </aside>
        </section>
        <Footer />
        <div className="magnify">
          <img
            id="magnifying"
            src="/images/magnify.png"
            alt="A magnifying glass"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
