import { React, Fragment } from "react"
import Price from "./Price";
import Banner_Inner from "../../components/layout_inner/Banner_Inner"

const PricingPage = () => {
    return (
        <Fragment>
            <Banner_Inner img={`/assets/imgs/Banner_pricing.jpg`} title={"Pricing & Plan"} subtitle={'Home / Pricing'}/>
            <Price/>
        </Fragment>
    );
};

export default PricingPage;