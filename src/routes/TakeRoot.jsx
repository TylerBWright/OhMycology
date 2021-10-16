import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addPostImageApi, createPostApi } from "../api/posts_api";

function TakeRoot() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [heightInCm, setHeight] = useState(0);
  const [cap, setCap] = useState("");
  const [stem, setStem] = useState("");
  const [underside, setUnderside] = useState("");
  const [sporePrint, setSporePrint] = useState("");
  const [texture, setTexture] = useState("");
  const [substrate, setSubstrate] = useState("");
  const [diameterInCm, setDiameter] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [checkbox, setCheckbox] = useState(false);

  const takeroot = () => {
    if (
      title === "" ||
      file === null ||
      description === "" ||
      (file != null && file.size > 10485760) ||
      checkbox === false
    ) {
      alert("You are missing something. Please try again.");
      return;
    }
    createPostApi(
      title,
      color,
      heightInCm,
      diameterInCm,
      cap,
      stem,
      underside,
      sporePrint,
      texture,
      substrate,
      location,
      description,
    )
      .then((result) => {
        const formData = new FormData();
        formData.append("file", file);
        addPostImageApi(result.data.uuid, formData)
          .then((res) => {
            alert("Thank you for posting to the Substrate!");
            history.push("/home");
          });
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
            src="./images/takerootmain.jpg"
            alt="Vibrant lichens growing from a large boulder in Oklahoma"
          />
          <h1 id="blurb">Take Root : Post Your Find</h1>
          <img
            id="lichen"
            src="./images/lichentop.jpg"
            alt="Lichen illustration"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>Give Us A Hint...</h2>
              <p>
                Wondering what you've found? Can't quite bring yourself to eat
                that lovely morel morsel without a second opinion?
              </p>
              <p>
                Add your mushroom to the <strong>Substrate</strong>, then watch
                as the comments pour in! Rather than rely on your senses alone,
                lean on a network of mushroom foragers at the ready.
              </p>
              <h2>Some Tips:</h2>
              <ul>
                <li>
                  Try to provide a clear photograph of the specimen,
                  demonstrating as much visual data as possible to help in the
                  identification process. Describe in great detail whichever
                  aspect might be missing from the photogragh (example:
                  underside).
                </li>
                <br />
                <li>
                  All fields are optional, however the more information that you
                  can provide the better. The odds of the community identifying
                  a submission's genus are better when the data are substantial.
                </li>
                <br />
                <li>
                  Please remember to practice sustainable mushroom hunting. What
                  this basically means is 1) don't over-pick; 2) cut the stem
                  above the surface and avoid pulling it out of the ground; and
                  3) leave some behind.
                </li>
              </ul>
            </article>
            <article>
              <div className="container">
                <fieldset>
                  <h2>
                    <strong>Mushroom Data Sheet</strong>
                  </h2>
                  <div className="fields">Post Title:</div>
                  <input
                    type="text"
                    id="inputTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <br /> <div className="fields">Location:</div>
                  <input
                    type="text"
                    id="inputLocation"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <br /> <div className="fields">Color:</div>
                  <input
                    type="text"
                    id="inputColor"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                  <br /> <div className="fields">Cap:</div>
                  <input
                    type="text"
                    id="inputCap"
                    value={cap}
                    onChange={(e) => setCap(e.target.value)}
                  />
                  <br /> <div className="fields">Stem:</div>
                  <input
                    type="text"
                    id="inputStem"
                    value={stem}
                    onChange={(e) => setStem(e.target.value)}
                  />
                  <br /> <div className="fields">Underside:</div>
                  <input
                    type="text"
                    id="inputUnderside"
                    value={underside}
                    onChange={(e) => setUnderside(e.target.value)}
                  />
                  <br /> <div className="fields">Spore Print:</div>
                  <input
                    type="text"
                    id="inputSporePrint"
                    value={sporePrint}
                    onChange={(e) => setSporePrint(e.target.value)}
                  />
                  <br /> <div className="fields">Texture:</div>
                  <input
                    type="text"
                    id="inputTexture"
                    value={texture}
                    onChange={(e) => setTexture(e.target.value)}
                  />
                  <br /> <div className="fields">Substrate:</div>
                  <input
                    type="text"
                    id="inputSubstrate"
                    value={substrate}
                    onChange={(e) => setSubstrate(e.target.value)}
                  />
                  <br /> <div className="fields">Height (in cm):</div>
                  <input
                    type="number"
                    id="inputHeight"
                    value={heightInCm}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                  <br /> <div className="fields">Diameter (in cm):</div>
                  <input
                    type="number"
                    id="inputDiameter"
                    value={diameterInCm}
                    onChange={(e) => setDiameter(e.target.value)}
                  />
                  <br />
                  <br />
                  <label>
                    <div className="fields">Description:</div>
                  </label>
                  <textarea
                    rows="5"
                    cols="50"
                    placeholder="Please provide a detailed description of your specimen, to include any datapoints not covered above. You may attempt to identify your mushroom now, but we recommend that you be open to changing your mind later."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <br />
                  <div className="fields">
                    Upload Image{" "}
                    <strong>(note: image size limited to 5MB)</strong>:
                  </div>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
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
                  <input type="submit" onClick={() => takeroot()} />
                  <div className="page">
                    <h2>Specimen # ___</h2>
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
          </aside>
        </section>
        <Footer />
        <div className="knife">
          <img
            id="knife"
            src="./images/mushroomknife.png"
            alt="A mushroom knife"
          />
        </div>
        <div className="purple">
          <img
            id="purple"
            src="./images/purple_small.png"
            alt="A purple mushroom"
          />
        </div>
        <div className="unknown">
          <img
            id="purple"
            src="./images/unknown_small.png"
            alt="The cap of an unknown mushroom"
          />
        </div>
      </div>
    </div>
  );
}

export default TakeRoot;
