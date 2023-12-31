import React, { Fragment } from "react";
import Banner_Inner from "../../components/layout_inner/Banner_Inner"
import Work from "../Home/Work";
import HowWeWork from "./HowWeWork";
import Contact from "../Home/Conact"
import './Style.css'

const ServicePage = () => {
    return (
        <Fragment>
            <Banner_Inner img={`/assets/imgs/Banner_service_main.jpg`} title={"Services"} subtitle={"Home / Services"}/>   
            <Work/>
            <div className="mt-[-10rem]"><Work/></div>
            <HowWeWork/>
            <Contact/>
        </Fragment>
    );
};

export default ServicePage;