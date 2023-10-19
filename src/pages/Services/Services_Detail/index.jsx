import { React, Fragment } from "react"
import Banner_Inner from "../../../components/layout_inner/Banner_Inner";
import Banner_Services_Detail from '../../../../public/assets/imgs/Banner_service.jpg'
import Details from "./Details";
import Brands from "../../Home/Brands";
import Points from "./Points";
import Statistic from "../../Home/Statistic";
import Results from "./Result";
import Video from "./Video";

const Service_Detail_Page = () => {
    return (
        <Fragment>
            <Banner_Inner img={Banner_Services_Detail} title={"Service Single"} subtitle={"Home / Service Single"}/>   
            <Details/>
            <Brands/>
            <Video/>
            <Points/>
            <Results/>
            <Statistic/>
        </Fragment>
    );
};

export default Service_Detail_Page;