import { React, Fragment } from "react"
import Banner_Inner from "../../components/layout_inner/Banner_Inner";
import Banner_Services from "../../assets/imgs/Banner_service.jpg"
import Details from "./Details";
import Brands from "../Home/Brands"
import Points from "./Points";
import Statistic from "../Home/Statistic"
import Result from "./Result";

const Service_Detail = () => {
    return (
        <Fragment>
            <Banner_Inner img={Banner_Services} title={"Service Single"} subtitle={"Home / Service Single"}/>   
            <Details/>
            <Brands/>
            <Points/>
            <Result/>
            <Statistic/>
        </Fragment>
    );
};

export default Service_Detail;