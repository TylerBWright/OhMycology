import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Substrate from "./routes/Substrate";
import Mycorrhizae from "./routes/Mycorrhizae";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Herbarium from "./routes/Herbarium";
import Aug2021 from "./routes/Aug2021";
import TakeRoot from "./routes/TakeRoot";
import UpRoot from "./routes/UpRoot";
import Profile from "./routes/Profile";
import Users from "./routes/Users";
import ScrollToTop from "./ScrollToTop";
import Post from "./routes/Post";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/substrate" exact component={Substrate} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/mycorrhizae" exact component={Mycorrhizae} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/herbarium" exact component={Herbarium} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/takeroot" exact component={TakeRoot} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/uproot" exact component={UpRoot} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/posts/:postId" exact component={Post} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/register" exact component={Register} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/users" exact component={Users} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/vault/aug2021" exact component={Aug2021} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/home" exact component={App} />
        </Switch>
      </ScrollToTop>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
