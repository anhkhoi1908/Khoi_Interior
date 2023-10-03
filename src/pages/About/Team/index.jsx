import React, { Fragment } from "react";
import { team } from "../../../mocks/About";
import { socialMedia } from "../../../mocks/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Team3 from "../../../assets/imgs/team3.png"
    
const Team = () => {
    return (
        <Fragment>
            <div className="bg-[#F4F0EC] text-center py-[8rem] mt-[10rem] text-[#292F36]">
                <h1 className="font-serif font-bold text-4xl">{"What The People Thinks"}</h1>
                <h1 className="font-serif font-bold text-4xl">{"About Us"}</h1>
                <ul className="flex justify-between w-3/5 mx-auto mt-10">   
                    {team.map((el, index) => (
                        <li key={index}>
                            <img src={el.img} width={220} height={400}/>
                        </li>
                    ))}
                    <li className="w-[13.75rem] h-[21rem] bg-white rounded-2xl flex flex-col justify-evenly">
                        <div>
                            <h1 className="font-serif font-bold text-xl">{"Nattasha Julie"}</h1>
                            <p>{"Design, Australia"}</p>
                        </div>
                        <ul className="flex justify-evenly text-center">
                            {socialMedia.map((el, index) => (
                                <li key={index}>
                                    <Link>
                                        <FontAwesomeIcon icon={el} size="1x"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <p>{"+1 (378) 400-1234"}</p>
                            <p>{"julie@email.com"}</p>
                        </div>
                    </li>
                    <li>
                        <img src={Team3} width={220} height={400}/>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Team;