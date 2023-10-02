import React, { Fragment } from "react";
import Logo from "../../../assets/imgs/Logo.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const nav = [
        {
            page: 'Home',
            path: '/'
        },
        {
            page: 'About',
            path: '/about'
        },
        {
            page: 'Services',
            path: '/services'
        },
        {
            page: 'Blog',
            path: '/blog'
        },
        {
            page: 'Pricing',
            path: '/pricing'
        },
    ];

    return (
        <Fragment>
            <header>
                <div id="header" className="flex justify-evenly items-center h-[5rem] text-[#292F36]">
                    <div className="header_logo">
                        <Link to="#" className="flex items-center">
                            <img src={Logo} alt="Logo Page" width="40" height="40"/>
                            <span className="font-serif font-bold text-3xl">{"Interior"}</span>
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