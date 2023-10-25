import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../../../../node_modules/video-react/dist/video-react.css"; 
import { Player } from 'video-react';


const Video = () => {
    return (
        <Fragment>
            <div className="w-3/5 mx-auto mt-[10rem] h-full relative !bg-white">
                {/* <Link className="link hover:brightness-75 duration-300">
                    <div className=""><img src={`/assets/imgs/Image_video.png`}/></div>
                    <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"><img src={`/assets/imgs/Play Button.png`}/></div>
                </Link> */}
            <Player className=""
                playsInline
                // poster="/assets/imgs/Play Button.png"
                src="/assets/videos/video.mp4"
            />
            </div>
        </Fragment>
    );
};

export default Video;