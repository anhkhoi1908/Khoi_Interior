import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Video = () => {
    return (
        <Fragment>
            <div className="w-3/5 mx-auto mt-[10rem] relative">
                <Link className="link hover:brightness-75 duration-300">
                    <div className=""><img src={`/assets/imgs/Image_video.png`}/></div>
                    <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"><img src={`/assets/imgs/Play Button.png`}/></div>
                </Link>
            </div>
        </Fragment>
    );
};

export default Video;