import React, { Fragment } from "react";
import BannerImg from "../../../assets/imgs/Banner.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <Fragment>
            <div id="banner" className="relative banner">
                <div className="rounded-bl-[10rem] overflow-hidden">
                    <img src={BannerImg} alt="Banner Image"/>
                </div>
                <div className="inline-block w-1/3 absolute top-1/3 left-[20%]">
                    <h1 className="font-serif text-6xl text-[#292F36] font-bold">{"Let Your Home"}</h1>
                    <h1 className="font-serif text-6xl text-[#292F36] font-bold">{"Be Unique"}</h1>
                    <p className="my-8">
                        {"There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages."}</p>
                    <button className="bg-[#292F36] rounded-3xl hover:opacity-75 duration-300">
                    <Link className="p-6 block text-white link">
                        <span className="mr-4">{'Get started'}</span>
                        <FontAwesomeIcon icon={faRightLong} className="text-[#c9a575]"/>
                    </Link>
                </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Banner;