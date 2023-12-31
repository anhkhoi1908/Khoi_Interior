import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { works } from "../../../mocks/Home";
import { Link } from "react-router-dom";

const Work = () => {
    return (
        <Fragment>
            <div id="work" className="my-[10rem]">
                <ul className="flex justify-between flex-wrap w-3/5 mx-auto text-[#292F36] pl-0">
                    {works.map((el, index) => (
                        <li key={index} className="text-center w-[16rem]">
                            <Link className="link block hover:bg-[#F4F0EC] px-6 py-14 rounded-3xl duration-300" to={'/service_single'}>
                                <h1 className="font-dm-serif text-2xl font-bold">{el.title}</h1>
                                <p className="font-jost mt-6 mb-12">{el.des}</p>
                                <button>
                                    <span className="font-bold">{el.btn}</span>
                                    <FontAwesomeIcon icon={el.icon} className="ml-2 text-[#c9a575]"/>
                                </button>
                            </Link>
                        </li>   
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Work;