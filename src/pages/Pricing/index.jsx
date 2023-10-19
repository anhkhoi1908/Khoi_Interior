import { React, Fragment } from "react"
import Price from "./Price";
import Banner_Inner from "../../components/layout_inner/Banner_Inner"
import Banner_Pricing from "../../../public/assets/imgs/Banner_pricing.jpg"

const PricingPage = () => {
    return (
        <Fragment>
            <Banner_Inner img={Banner_Pricing} title={"Pricing & Plan"} subtitle={'Home / Pricing'}/>
            <Price/>
        </Fragment>
    );
};

export default PricingPage;