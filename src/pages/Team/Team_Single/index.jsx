import React, { Fragment } from "react";
import Banner_Inner from "../../../components/layout_inner/Banner_Inner";
import Member_Detail from "./Member_Detail";
import Bio from "./Bio";
import ContactMe from "./ContactMe";
import Team from "../../About/Team";
import './Style.css'

const Team_Single = () => {
    return (
        <Fragment>
            <Banner_Inner title={'Professional Single'} subtitle={'Home / Team Single'} img={`/assets/imgs/Banner_team_single.jpg`}/>
            <Member_Detail/>
            <Bio/>
            <Team/>
            <ContactMe/>
        </Fragment>
    )
};

export default Team_Single;