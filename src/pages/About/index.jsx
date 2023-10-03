import { React, Fragment } from "react"
import Banner_Inner from "../../components/layout_inner/Banner_Inner";
import Banner_About from "../../assets/imgs/Banner_about.png"
import Quotes from "./Quotes";
import Whatwedo from "./WhatWeDo";
import Team from "./Team";
import Mail from "./Mail";

const AboutPage = () => {
    return (
        <Fragment>
            <Banner_Inner img={Banner_About} title={"About Us"} subtitle={"Home / About Us"}/>
            <Quotes/>
            <Whatwedo/>
            <Team/>
            <Mail/>
        </Fragment>
    );
};

export default AboutPage;