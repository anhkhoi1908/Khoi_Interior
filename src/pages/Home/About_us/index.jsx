import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faPhone } from "@fortawesome/free-solid-svg-icons";
import Funiture from "../../../assets/imgs/Funiture.png"

const About_Us = () => {
    return (
        <Fragment>
            <div className="flex w-3/5 mx-auto justify-between text-[#292F36]">
                <div className="w-2/5">
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
                    <button className="bg-[#292F36] p-4 rounded-xl mt-8">
                        <span className="text-white mr-4">{"Get Free Estimate"}</span>
                        <FontAwesomeIcon icon={faRightLong} className="text-[#c9a575]"/>
                    </button>     
                </div>
                <div className="w-1/2">
                    <img src={Funiture} alt="Funiture Image"/>
                </div>  
            </div>
        </Fragment>
    );
};

export default About_Us;