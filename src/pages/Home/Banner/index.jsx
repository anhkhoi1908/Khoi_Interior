import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <Fragment>
            <div id="banner" className="relative banner">
                <div className="rounded-bl-[10rem] overflow-hidden">
                    <img className="h-full w-full" src={`/assets/imgs/Banner.jpg`} alt="Banner Image"/>
                </div>
                <div className="banner-content inline-block w-1/2 absolute top-[50%] translate-y-[-50%] left-[20%]">
                    <h1 className="font-dm-serif text-7xl text-[#292F36] font-bold">{"Let Your Home"}</h1>
                    <h1 className="font-dm-serif text-7xl text-[#292F36] font-bold">{"Be Unique"}</h1>
                    <p className="my-8 w-3/5 font-jost tracking-wider">
                        {"There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages."}</p>
                    <button className="bg-[#292F36] rounded-3xl hover:opacity-75 duration-300">
                    <Link className="p-6 block text-white link">
                        <span className="mr-4 font-jost">{'Get started'}</span>
                        <FontAwesomeIcon icon={faArrowRight} className="text-[#c9a575]"/>
                    </Link>
                </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Banner;