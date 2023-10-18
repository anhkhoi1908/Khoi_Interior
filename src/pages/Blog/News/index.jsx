import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Pagination_Mock from "../../../components/Pagination/main";

const News = (props) => {

    return (
        <Fragment>
            <div id="news_blog" className="w-3/5 mx-auto mt-[10rem]">
                <h1 className="font-serif font-bold text-4xl">{'Articles & News'}</h1>
                <ul className="flex !flex-wrap justify-between mt-10 pl-0">{props.blogs.map((el) => (
                    <li key={el.id} className="mb-10 w-[32%]">
                        <Link className="block p-[1rem] link hover:bg-[#E7E7E7] rounded-[2.5rem] border-2 duration-300" to={'/blog_detail'}>
                            <img src={`/src/assets/imgs/${el.image}`} alt="Image new"/>
                            <h2 className="font-serif font-bold text-[1.4rem] mt-4">{el.title}</h2>
                            <div className="flex items-center justify-between mt-4">
                                <h1 className="text-[0.8rem]">{el.date}</h1>
                                <button className="bg-[#F4F0EC] px-[1.1rem] py-[0.8rem] rounded-full">
                                    <FontAwesomeIcon icon={el.icon}/>
                                </button>
                            </div>
                        </Link>
                    </li>
                ))}</ul>
            </div>  
        </Fragment>
    );
};

export default News;