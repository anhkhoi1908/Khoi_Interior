import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const About_Us = () => {
    return (
        <Fragment>
            <div className="about_us w-3/5 mx-auto text-[#292F36]">
                <div id="about_us" className="flex justify-between w-full mx-auto">
                    <div className="w-2/5 about_us_info">
                        <h1 className="font-bold text-4xl mb-8 font-serif">
                            {"We Create The Art Of Stylish Living Stylishly"}
                        </h1>
                        <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}</p>
                        <div className="flex items-center mt-8">
                            <div className="bg-[#F4F0EC] rounded-full px-6 py-6">
                                <FontAwesomeIcon icon={faPhone} className="text-[#c9a575]" size="2x"/>
                            </div>
                            <div className="ml-6">
                                <span className="font-bold text-2xl">{"012345678"}</span>
                                <p>{"Call Us Anytime"}</p>
                            </div>
                        </div>     
                        <button className="bg-[#292F36] p-4 rounded-xl mt-8 hover:opacity-75 duration-300">
                            <Link className="link">
                                <span className="text-white mr-4">{"Get Free Estimate"}</span>
                                <FontAwesomeIcon icon={faRightLong} className="text-[#c9a575]"/>
                            </Link>
                        </button>     
                    </div>
                    <div className="w-1/2 about_us_img">
                        <img src={`/assets/imgs/Funiture.png`} alt="Funiture Image"/>
                    </div>  
                </div>
            </div>
        </Fragment>
    );
};

export default About_Us;