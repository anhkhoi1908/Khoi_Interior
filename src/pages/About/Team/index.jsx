import React, { Fragment, useState } from "react";
import { team } from "../../../mocks/About";
import './index.css'
import { socialMedia } from "../../../mocks/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
    
const Team = () => {
    return (
        <Fragment>
            <div className="team bg-[#F4F0EC] text-center py-[8rem] mt-[10rem] text-[#292F36]">
                <h1 className="font-serif font-bold text-4xl">{"What The People Thinks"}</h1>
                <h1 className="font-serif font-bold text-4xl">{"About Us"}</h1>
                <ul className="flex justify-between w-3/5 mx-auto mt-10 pl-0">   
                    {team.map((el, index) => (
                        <li key={index} className="team-member">
                            <div>
                                <img src={`/src/assets/imgs/${el}`} width={220} height={400} alt="Image member"/>
                                <div className="team-member-hidden px-[2rem] w-[13.75rem] h-[21rem] bg-white rounded-2xl flex-col 
                                justify-evenly hidden   ">
                                    <div>
                                        <h1 className="font-serif font-bold text-xl">{"Nattasha Julie"}</h1>
                                        <p>{"Design, Australia"}</p>
                                    </div>
                                    <ul className="flex justify-evenly text-center pl-0">
                                        {socialMedia.map((el, index) => (
                                            <li key={index}><Link className="link"><FontAwesomeIcon icon={el} size="1x"/></Link></li>
                                    ))}</ul>
                                    <div>
                                        <p>{"+1 (378) 400-1234"}</p>
                                        <p>{"julie@email.com"}</p>
                                    </div>
                                </div> 
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Team;