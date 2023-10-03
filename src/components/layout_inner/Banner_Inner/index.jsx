import React, { Fragment } from "react";

const Banner_Inner = (prop) => {
    return (
        <Fragment>
            <div className="relative">
                <img src={prop.img}/>
                <div className="bg-white inline-block text-center absolute bottom-0 py-10 px-[7rem] 
                rounded-tl-3xl rounded-tr-3xl left-1/2 translate-x-[-50%]">
                    <h1 className="font-serif font-bold text-4xl">{prop.title}</h1>
                    <p>{prop.subtitle}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Banner_Inner;