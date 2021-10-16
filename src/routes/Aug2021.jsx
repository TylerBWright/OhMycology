import Header from "../components/Header";
import "../css/Style.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Aug2021() {
  return (
    <div className="flexCenter">
      <div className="panel">
        <Header />
        <section id="intro">
          <img
            id="mainpanel"
            src="../images/featuremain.jpg"
            alt="Two green-spored lepiota mushrooms"
          />
          <h1 id="blurb">
            August 2021: Devil's Urn <em>(Urnula craterium)</em> &#128520;
          </h1>
          <p>
            <em>
              This month's featured mushroom is the mysterious and quite
              misunderstood fungus that your grandma warned you never to touch;
              the shroom with a soul as black as the eternal depths of hell...
              We bring you the <strong>devil's urn!</strong> This is some
              nightmare fuel to start your day, courtesy of contributor{" "}
              <strong>Tyler Wright</strong>.
            </em>
            <p>
              Follow the original post here:{" "}
              <Link to={"/post/30"}>
                <h1>{"Specimen #30"}</h1>
              </Link>
            </p>
          </p>
          <img
            id="lichen"
            src="../images/lichentop.jpg"
            alt="Lichen illustration"
          />
        </section>
        <section id="pageContent">
          <main role="main">
            <article>
              <h2>
                Devil's Urn, You Scary!
                <br />
                <br />
              </h2>
              <div className="night-vision-effect">
                <img
                  src="../assets/devilsurn.jpg"
                  alt="A black devil's urn fungus"
                />
              </div>
              <p>
                I decided to prowl around my land in the Missouri backwoods, as
                I do from time to time, looking to train my "mushroom eye."
                Absence of sensory perception that the day brings only helps to
                fortify skills in buschcraft, thus reminding you what it truly
                is to be alive. That’s what I tell myself, anyways.
              </p>
              <p>
                It was May 2019, a prime time to pull out delectable morels from
                deep in the woods. Instead of stumbling upon <em>Morchella</em>{" "}
                gold, I encountered <em>Urnula</em> coal.
              </p>
            </article>
            <article>
              <h2>Description</h2>
              <p>
                Devil’s urn, or <em>Urnula craterium</em> as it is
                scientifically known, means “little urn,” derived from the Latin
                “cratera,” a vessel by which wine was mixed with water in
                antiquity (Cratera, n.d.).
              </p>
              <div className="wrappedimage">
                <img
                  src="../images/vintagedevilsurn.jpg"
                  align="left"
                  alt="A vintage devil's urn illustration"
                />
              </div>
              <p>
                Devil’s urn, a type of dark-brown cup fungi, is a good indicator
                that morels may also be present (Stone, 2012). So there's that
                going for it so far. You can spot it at 4-12 cm high, urn-shaped
                (like its namesake), has a tough leathery exterior, and often
                propagates in groups on or near rotting hardwood (Aaroa, 1986).
                As the mushroom matures, the urn “mouth” gets wider, eventually
                changing into a goblet-shaped appearance (Kuo, 2018).
              </p>
              <p>
                This curious mushroom’s genus went through a considerable debate
                between botanist Lewis David de Schweinitz and naturalist Elias
                Magnus, arguing that it belongs in the <em>Peziza criterium</em>{" "}
                classification versus genus <em>Urnula</em>, then settling into
                genus <em>Geopyxis</em>, and coming back around full-circle to
                genus <em>Urnula</em> after advances in microscopy finally
                settled it (Cox, 2013). Something tells me that this chaotic
                beginning is fitting of something called the devil's urn as it
                kicks and screams its way into our celestial plane from the
                netherworld from whence it came.
              </p>
            </article>
            <article>
              <h2>So Should I Eat It?</h2>
              <p>Are you really asking this right now?</p>
              <p>
                Despite its wicked appearance, you'd probably be surprised to
                know that the jury is still out on this one.
              </p>
              <p>
                Cox (2013), suggest that while the devil’s urn is not poisonous,
                it is not considered nutritious and is not worth consuming.
                Another assessment as to the mushroom’s edibility is that while
                possible, it's probably not the most appetizing option and
                should only be a one-time thing (Kuo, 20017). Aaro (1986),
                offers that it is “too tough to be worth eating” (p. 829).
              </p>
              <p>
                So in other words, you can eat devil's urn fungus... and you can
                eat tree bark. Hey, it's your life and nobody is going to stop
                you!
              </p>
              <p>
                And then we have a real tough cookie, Alden Dirks, who clearly
                misinterpreted Kuo’s stern warning (I jest!) and fried some in a
                pan with butter. Dirks reported that despite having low
                expectations, the devil’s urn was chewy and quite satisfying
                (Dirks, 2019), in a twisted retelling of Dr. Seuss's "Green Eggs
                and Ham."
              </p>
              <p>
                As far as dancing with the devil under the moonlight&ndash;I
                think I'll give it a hard pass. No offense devil's urn... We
                just don't have the chemistry.
              </p>
              <p>
                On second thought, I’ll wait until next May and give ‘em a go.
                ;-)
              </p>
            </article>
            <article>
              <h2>References</h2>
              <p>
                Arora, D. (1986).{" "}
                <em>
                  Mushrooms demystified: A comprehensive guide to the fleshy
                  fungi.
                </em>{" "}
                Berkeley, CA: Ten Speed Press.
              </p>
              <p>
                Cox, S. (2013, July 7). Devils urn. Retrieved August 5, 2021,
                from{" "}
                <a href="http://naturalmissouri.blogspot.com/2013/07/devils-urn_7.html">
                  http://naturalmissouri.blogspot.com/2013/07/devils-urn_7.html
                </a>
              </p>
              <p>
                Cratera. (n.d.). Retrieved August 5, 2021, from{" "}
                <a href="https://logeion.uchicago.edu/cratera">
                  https://logeion.uchicago.edu/cratera
                </a>
              </p>
              <p>
                Dirks, A. (2019, May 5). Devil's Urn (Urnula craterium) - 1001
                Mushrooms Project. Retrieved August 5, 2021, from{" "}
                <a href="https://www.aldendirks.com/1001-mushrooms/3-devils-urn-urnula-craterium">
                  https://www.aldendirks.com/1001-mushrooms/3-devils-urn-urnula-craterium
                </a>
              </p>
              <p>
                Kuo, M. (2007). <em>100 edible mushrooms.</em> Ann Arbor:
                University of Michigan Press.
              </p>
              <p>
                Kuo, M. (2018, July). Urnula craterium. Retrieved August 5,
                2021, from{" "}
                <a href="https://www.mushroomexpert.com/urnula_craterium.html">
                  https://www.mushroomexpert.com/urnula_craterium.html
                </a>
              </p>
              <p>
                Stone, M. (2012).{" "}
                <em>
                  Missouris wild mushrooms: A guide to hunting, identifying and
                  cooking the states most common mushrooms.
                </em>{" "}
                Jefferson City, MO: Missouri Department of Conservation.
              </p>
            </article>
            <img
              id="lichenbottom"
              src="../images/lichenbottom.jpg"
              alt="Lichen illustration"
            />
          </main>
          <aside>
            <Sidebar />
            <img
              id="members"
              src="../images/login.jpg"
              style={{ "borderRadius": "50%" }}
              alt="Girl presenting elephant ear mushrooms"
            />
            <blockquote>"Dumbo lost his ears!"</blockquote>
            <cite>
              <span>Daniella Wright</span>
            </cite>
          </aside>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Aug2021;
