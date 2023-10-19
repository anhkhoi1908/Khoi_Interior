import { React, Fragment } from "react";
import Banner_Inner from "../../components/layout_inner/Banner_Inner";
import Categories from "../../components/TabUI";
import './Style.css'

const ProjectsPage = () => {
    return (
        <Fragment>
            <Banner_Inner title={'Our Project'} subtitle={'Home / Project'} img={`/assets/imgs/Banner_projects.jpg`}/>
            <Categories/>
        </Fragment>
    )
}

export default ProjectsPage;