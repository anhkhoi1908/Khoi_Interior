import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { news, category, tags} from "../../../../mocks/Blog";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <Fragment>
            <div>
                <div className="relative">
                    <input placeholder="Search" className="bg-[#F4F0EC] rounded-3xl p-4 outline-none w-full"/>
                    <div className="absolute top-[50%] translate-y-[-50%] right-0 mr-6"><FontAwesomeIcon icon={faSearch} size="1x"/></div>
                </div>
                <div className="mt-10">
                    <h1 className="font-serif font-bold text-2xl my-8">{'Latest News'}</h1>
                    <ul className="pl-0">
                        {news.map((el, index) => (
                            <li key={index} className="mb-4">
                                <Link className="block link border-b-2 border-[#CDA274]">
                                    <div>
                                        <h2 className="font-serif font-bold text-[1rem] mb-0">{el.title}</h2>
                                        <h2 className="font-serif font-bold text-[1rem] mb-0">{el.subtitle}</h2>
                                    </div>
                                    <div className="flex justify-between">
                                        <div></div>
                                        <p>{el.date}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-[#F4F0EC] rounded-3xl px-8 py-1 my-10">
                    <h1 className="font-serif font-bold text-2xl my-8">{'Categories'}</h1>
                    <ul className="pl-0">
                        {category.map((el, index) => (
                            <li key={index} className="mb-2">
                                <Link className="block link border-b-2 border-[#CDA274]">
                                    <p className="pb-0">{el}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h1 className="font-serif font-bold text-2xl my-8">{'Tags'}</h1>
                    <ul className="pl-0 flex flex-wrap [&>*:nth-child(1)]:bg-[#292F36] [&>*:nth-child(1)]:text-white">
                        {tags.map((el, index) => (
                            <li key={index} className="bg-[#F4F0EC] rounded-xl py-2 px-6 mr-2 mb-2">
                                <div>{el}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar;