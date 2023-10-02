import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <Fragment>
            <div className="bg-[#292F36] w-3/5 mx-auto rounded-3xl text-white text-center py-12 mt-[5rem]">
                <h1 className="font-serif text-4xl font-bold">{"Wanna join the interior"}</h1>
                <p className="mt-4 mb-8">{"It is a long established fact will be distracted."}</p>
                <button className="bg-[#c9a575] rounded-3xl">
                    <Link className="p-6 block">
                        <span className="mr-4">{'Contact With Us'}</span>
                        <FontAwesomeIcon icon={faRightLong} className="text-[#292F36]"/>
                    </Link>
                </button>
            </div>
        </Fragment>
    );
};

export default Contact;