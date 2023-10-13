import React, { Fragment } from "react";
import Banner_Inner from "../../components/layout_inner/Banner_Inner"
import Banner_Service_Main from "../../assets/imgs/Banner_service_main.jpg"
import Work from "../Home/Work";
import HowWeWork from "./HowWeWork";
import Contact from "../Home/Conact"

const ServicePage = () => {
    return (
        <Fragment>
            <Banner_Inner img={Banner_Service_Main} title={"Services"} subtitle={"Home / Services"}/>   
            <Work/>
            <div className="mt-[-10rem]"><Work/></div>
            <HowWeWork/>
            <Contact/>
        </Fragment>
    );
};

export default ServicePage;