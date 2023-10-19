import React, { Fragment } from "react";
import MemberDetail from "../../../../../public/assets/imgs/member_detail.png";
import { sub_content } from "../../../../mocks/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { socialMedia } from "../../../../mocks/layout";

const Member_Detail = () => {
    return (
        <Fragment>
            <div className="w-3/5 mx-auto flex justify-between items-center mt-[10rem]">
                <div className="w-1/2"><img src={MemberDetail}/></div>
                <div className="w-[45%]">
                    <h1 className="font-serif font-bold text-4xl">{'John Smith'}</h1>
                    <p>{'Designer'}</p>
                    <p>{'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don\'t look even slightly believable.'}</p>
                    <ul className="pl-0 my-10">{sub_content.map((el, index) => (
                        <li key={index} className="flex items-center mt-3">
                            <FontAwesomeIcon icon={el.icon} className="text-[#CDA274] p-2 bg-[#F4F0EC] rounded-full"/>
                            <span className="ml-4">{el.content}</span>
                        </li>
                    ))}</ul>
                    <ul className="flex pl-0">
                        {socialMedia.map((el, index) => (
                        <li key={index} className="mr-8">
                            <Link className="link"><FontAwesomeIcon icon={el} size="2x"/></Link>
                        </li>
                    ))}</ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Member_Detail;