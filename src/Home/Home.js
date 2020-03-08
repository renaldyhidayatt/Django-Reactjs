import React, { Fragment, Component } from "react";
import HeaderSection from "./Carousel";
//import FeatureSection from "./FeatureSection";
//import PricingSection from "./PricingSection";
import Pricing from "./Pricing";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <>
        <HeaderSection />
        <Pricing />
        <Footer />
      </>
    );
  }
}

export default Home;
