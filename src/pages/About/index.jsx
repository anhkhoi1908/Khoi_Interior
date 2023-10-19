import { React, Fragment } from "react"
import Banner_Inner from "../../components/layout_inner/Banner_Inner";
import Quotes from "./Quotes";
import Whatwedo from "./WhatWeDo";
import Team from "./Team";
import Mail from "./Mail";

const AboutPage = () => {
    return (
        <Fragment>
            <Banner_Inner img={`/assets/imgs/Banner_about.png`} title={"About Us"} subtitle={"Home / About Us"}/>
            <Quotes/>
            <Whatwedo/>
            <Team/>
            <Mail/>
        </Fragment>
    );
};

export default AboutPage;