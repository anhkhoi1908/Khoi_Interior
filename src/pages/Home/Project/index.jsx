import React, { Fragment } from "react";
import { projects } from "../../../mocks/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Project = () => {
    return (
        <Fragment>
            <div id="projects" className="text-[#292F36]">
                <h1 className="font-serif font-bold text-4xl text-center mb-4">{"Follow Our Projects"}</h1>
                <p className="w-2/5 mx-auto text-center">
                {'It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.'}</p>
                <ul className="flex w-3/5 flex-wrap mx-auto justify-between mt-20 [&>*:nth-child(2)]:rounded-tl-[4rem]
                [&>*:nth-child(3)]:rounded-br-[4rem]">
                    {projects.map((el, index) => (
                        <li key={index} className="w-[45%] mb-10 hover:scale-105 duration-300">
                            <Link className="link">
                                <div className="overflow-hidden">
                                    <img 
                                        src={`/assets/imgs/${el.image}`} 
                                        alt="Image project"
                                        className="duration-300 hover:brightness-75"
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <h1 className="font-bold font-serif text-[1rem]">{el.title}</h1>
                                        <span>{el.fiel}</span>
                                    </div>
                                    <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                                        <FontAwesomeIcon icon={el.icon}/>
                                    </button>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Project;