import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { works } from "../../../mocks/Home";

const Work = () => {
    return (
        <Fragment>
            <div className="work my-[10rem]">
                <ul className="flex justify-evenly w-4/5 m-auto text-[#292F36] pl-0">
                    {works.map((el, index) => (
                        <li key={index} className="text-center w-[16rem]">
                            <h1 className="font-serif text-2xl font-bold">{el.title}</h1>
                            <p className="mt-6 mb-12">{el.des}</p>
                            <button>
                                <span className="font-bold">{el.btn}</span>
                                <FontAwesomeIcon icon={el.icon} className="ml-2 text-[#c9a575]"/>
                            </button>
                        </li>   
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Work;