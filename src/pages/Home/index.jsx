import { React, Fragment } from "react"
import Banner from "./Banner";
import Brand from "./Brands";
import Project from "./Projects";
import Statistic from "./Statistic";
import News from "./News";
import Contact from "./Conact";
import Work from "./Work";
import About_Us from "./About_us";
import Testimonial from "./Testimonial";

const HomePage = () => {
    return (
        <Fragment>
            <Banner/>
            <Work/>
            <About_Us/>
            <Testimonial/>
            <Brand/>
            <Project/>
            <Statistic/>
            <News/>
            <Contact/>
        </Fragment>
    );
};

export default HomePage;