import React, { Fragment } from "react";
import Banner_Inner from "../../../components/layout_inner/Banner_Inner";
import Content from "./Content";
import Quote from "./Quote";
import SubContent from "./Subcontent";
import Sidebar from "./Sidebar";
import Reply from "./Reply";

const Blog_Detail = () => {
    return (
        <Fragment>
        <Banner_Inner img={`/assets/imgs/Banner_blog_detail.png`} title={'Articles'} subtitle={'Home / Blog_Detail'}/>
        <div className="flex w-[70%] mx-auto justify-around mt-[10rem]">
            <div className="w-3/5">
                <Content/>
                <Quote/>
                <SubContent/>
                <Reply/>
            </div>
            <div className="w-[30%]"><Sidebar/></div>
        </div>
        </Fragment>
    );
};

export default Blog_Detail;