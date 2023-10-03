import React, { Fragment } from "react";
import Logo from "../../../assets/imgs/Logo.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { nav } from "../../../mocks/layout";

const Header = () => {
    return (
        <Fragment>
            <header>
                <div id="header" className="flex justify-evenly items-center h-[6rem] text-[#292F36]">
                    <div className="header_logo">
                        <Link to="#" className="flex items-center">
                            <img src={Logo} alt="Logo Page" width="30" height="30"/>
                            <span className="ml-3 font-serif font-bold text-3xl">{"Interior"}</span>
                        </Link>
                    </div>
                    <div className="nav flex items-center">
                        <ul className="flex">
                            {nav.map((el, index) => (
                                <li key={index} className="mx-8 hover:text-[#c9a575] duration-300">
                                    <Link to={el.path}>
                                        {el.page}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <FontAwesomeIcon icon={faSearch} size="1x"/>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;