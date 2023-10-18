import React, { Fragment } from "react";
import './Style.css'

const Banner_Inner = (prop) => {
    return (
        <Fragment>
            <div id="banner_inner" className="relative w-full">
                <img src={prop.img}/>
                <div className="bg-white text-[#292F36] absolute text-center bottom-0 py-10 px-[7rem] 
                rounded-tl-3xl rounded-tr-3xl left-1/2 translate-x-[-50%] w-1/4 h-1/2 flex flex-col justify-center items-center">
                    <div className="banner_inner_title">
                        <h1 className="font-serif font-bold text-4xl">{prop.title}</h1>
                        <span>{prop.subtitle}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Banner_Inner;