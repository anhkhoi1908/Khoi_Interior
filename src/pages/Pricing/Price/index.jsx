import React, { Fragment } from "react";
import { prices } from "../../../mocks/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Price = () => {
    return (
        <Fragment>
            <div className="w-3/5 mx-auto mt-[10rem] text-[#292F36]">
                <ul className="flex justify-between text-center">
                    {prices.map((el, index) => (
                        <li key={index} className="bg-[#F4F0EC] flex flex-col items-center p-12 rounded-3xl 
                        relative before:absolute before:content[''] before:block before:w-full before:h-[0.1rem]
                        before:bg-[#292F36] before:top-[14rem]">
                            <div className="font-serif font-bold">
                                <h1>{el.fiel}</h1>
                                <div className="flex items-end justify-center">
                                    <h2>{'$'}</h2>
                                    <h2 className="text-6xl font-bold my-4">{el.price}</h2>
                                </div>
                                <h3>{el.date}</h3>
                            </div>
                            <ul className="mt-14 mb-6">{el.offer.map((el) => (
                                <li className="my-6">{el}</li>))}
                            </ul>
                            <button className="bg-[#292F36] rounded-2xl hover:opacity-75 duration-300">
                                    <Link className="px-6 py-4 block">
                                        <span className="mr-4 text-white">{el.btn}</span>
                                        <FontAwesomeIcon icon={el.icon} className="text-[#c9a575]"/>
                                    </Link>
                            </button>
                        </li>
                    ))}
                    <span className="absolute left-[51%] translate-x-[-50%] bottom-1 text-white bg-[#292F36] 
                    px-6 py-2 rounded-3xl font-bold">
                    {'Most Popular Plans'}</span>
                </ul>
            </div>
        </Fragment>
    );
};

export default Price;