import { React, Fragment } from "react"
import Banner_Inner from "../../components/layout_inner/Banner_Inner"
import Banner_Blog from "../../assets/imgs/Banner_blog.png"
import LatestPost from "./LatestPost";
import News from "./News";

const BlogPage = () => {
    return (
        <Fragment>
            <Banner_Inner img={Banner_Blog} title={'Articles & News'} subtitle={'Home / Blog'}/>
            <LatestPost/>
            <News/>
        </Fragment>
    );
};

export default BlogPage;