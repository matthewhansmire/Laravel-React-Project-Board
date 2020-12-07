import React, { Component } from 'react';

//Import Components
import Navbar from "./Navbar/Navbar";
import Section from "./HeroSection/Section";
import Features from "./Features/features";
import HowItWorks from "./HowItWorks/howItWorks";
import Pricing from "./Pricing/pricing";
import ProductUpdates from "./ProductUpdates/productUpdates";
import Support from "./Support/support";
import FAQs from "./Faqs/FAQs";
import Footer from "./Footer/footer";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: document.documentElement.scrollTop,
      imglight: true,
      navClass: ""
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);    
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    }
    else {
      this.setState({ navClass: "", imglight: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        
        <Navbar navClass={this.state.navClass} imglight={this.state.imglight} />

        <Section />

        {/*<CardsMini/>*/}

        <Features />

        <HowItWorks />

        <Pricing />  

        <ProductUpdates />

        <Support />

        <FAQs />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;