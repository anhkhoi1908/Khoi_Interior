import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <Fragment>
            <div className="contact bg-[#292F36] w-3/5 mx-auto rounded-3xl text-white text-center py-12 mt-[5rem]">
                <h1 className="font-dm-serif text-5xl font-bold">{"Wanna join the interno?"}</h1>
                <p className="mt-4 mb-8 font-jost tracking-wider">{"It is a long established fact will be distracted."}</p>
                <button className="bg-[#c9a575] rounded-3xl hover:opacity-75 duration-300">
                    <Link className="p-6 block link" to={'/contact'}>
                        <span className="mr-4 text-white">{'Contact With Us'}</span>
                        <FontAwesomeIcon icon={faArrowRight} className="text-[#292F36]"/>
                    </Link>
                </button>
            </div>
        </Fragment>
    );
};

export default Contact;