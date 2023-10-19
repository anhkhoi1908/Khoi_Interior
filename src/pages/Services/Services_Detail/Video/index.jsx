import React, { Fragment } from "react";
import Image_video from '../../../../../public/assets/imgs/Image_video.png'
import Play_btn from '../../../../../public/assets/imgs/Play Button.png'
import { Link } from "react-router-dom";

const Video = () => {
    return (
        <Fragment>
            <div className="w-3/5 mx-auto mt-[10rem] relative">
                <Link className="link hover:brightness-75 duration-300">
                    <div className=""><img src={Image_video}/></div>
                    <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"><img src={Play_btn}/></div>
                </Link>
            </div>
        </Fragment>
    );
};

export default Video;