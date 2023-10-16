import React, { Fragment } from "react";
import { news } from "../../../mocks/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <Fragment>
            <div id="news" className="mt-[10rem] text-[#292F36]">
                <h1 className="font-serif font-bold text-4xl text-center mb-4">{"Articles & News"}</h1>
                <p className="w-2/5 mx-auto text-center">{'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.'}</p>
                <div className="w-3/5 mx-auto mt-20">
                    <ul className="flex justify-between mt-20">
                        {news.map((el, index) => (
                            <li key={index} className="mb-10 w-[32%]">
                                <Link className="block p-[1rem] link hover:bg-[#E7E7E7] rounded-[2.5rem] border-2 duration-300">
                                    <img src={`/src/assets/imgs/${el.image}`} alt="Image new"/>
                                    <h2 className="font-serif font-bold text-[1.4rem] mt-4">{el.content}</h2>
                                    <div className="flex items-center justify-between mt-4">
                                        <h1 className="text-[0.8rem]">{el.date}</h1>
                                        <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                                            <FontAwesomeIcon icon={el.icon}/>
                                        </button>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default News;