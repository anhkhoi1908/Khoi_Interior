import React, { Fragment } from "react";
import Banner_Inner from "../../components/layout_inner/Banner_Inner";


const ChangeBlog = () => {
    return (
        <Fragment>
            <Banner_Inner title={'ChangeBlog'} subtitle={'Home / ChangeBlog'} img={`/assets/imgs/Banner_change.jpg`}/>
            <div className="w-3/5 mx-auto mt-[10rem]">
                <div className="bg-[#F4F0EC] rounded-3xl text-center px-[12rem] py-[6rem] flex items-center justify-center">
                    <h1 className="font-serif font-bold text-4xl mr-8">{'V.1'}</h1>
                    <p>{'Initial Interno Webflow Template Release'}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default ChangeBlog;