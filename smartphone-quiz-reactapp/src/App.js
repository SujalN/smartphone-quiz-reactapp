import React, { Fragment } from "react";
import { Container } from "bloomer";
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";
import Footer from "./components/layout/Footer";

import "bulma/css/bulma.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faHeart, faAngleDown);

const App = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Container />
      <Footer />
    </Fragment>
  );
};

export default App;
