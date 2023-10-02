import React, { Fragment } from "react";
import { news } from "../../../mocks/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = () => {
    return (
        <Fragment>
            <div className="mt-[10rem] text-[#292F36]">
                <h1 className="font-serif font-bold text-4xl text-center mb-4">{"Articles & News"}</h1>
                <p className="w-2/5 mx-auto text-center">{'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.'}</p>
                <ul className="flex w-3/5 mx-auto justify-between mt-20">
                    {news.map((el, index) => (
                        <li key={index} className="mb-10 p-4 border-2 rounded-3xl w-[32%]">
                            <img src={el.img}/>
                            <h2 className="font-serif font-bold text-[1.4rem] mt-4">{el.content}</h2>
                            <div className="flex items-center justify-between mt-4">
                                <h1>{el.date}</h1>
                                <button className="bg-[#F4F0EC] px-5 py-4 rounded-full">
                                    <FontAwesomeIcon icon={el.icon}/>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default News;