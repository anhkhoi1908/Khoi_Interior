import { React, Fragment } from "react";
import Banner_Inner from "../../components/layout_inner/Banner_Inner";
import Banner_Projects from '../../assets/imgs/Banner_projects.jpg'
import Categories from "../../components/TabUI";


const ProjectsPage = () => {
    return (
        <Fragment>
            <Banner_Inner title={'Our Project'} subtitle={'Home / Project'} img={Banner_Projects}/>
            <Categories/>
        </Fragment>
    )
}

export default ProjectsPage;