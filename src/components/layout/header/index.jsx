import React, { Fragment, useState } from "react";
import Logo from "../../../assets/imgs/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faList, faClose, faL } from "@fortawesome/free-solid-svg-icons";
import { nav } from "../../../mocks/layout";
import '../Style.css'

const Header = () => {
    const [showNav, setShowNav] = useState(false)
    
    return (
        <>
            <header className="relative">
                <div id="header" className="flex justify-evenly items-center h-[6rem] text-[#292F36] relative">
                    <div className="header_logo">
                        <Link to="#" className="flex items-center link">
                            <img src={Logo} alt="Logo Page" width="30" height="30"/>
                            <span className="ml-3 font-serif font-bold text-3xl">{"Interior"}</span>
                        </Link>
                    </div>
                    <div id="nav" className="nav flex items-center">
                        <ul className="flex mb-0 pl-0">{nav.map((el, index) => (
                            <li key={index} className="mx-8">
                                <Link to={el.path} className="link hover:text-[#c9a575] duration-300">{el.page}</Link></li>
                        ))}</ul>
                        <FontAwesomeIcon icon={faSearch} size="1x"/>
                    </div>
                    
                </div>
                <div id="nav_res" className="hidden absolute">
                    {!showNav && (
                        <button className="" onClick={() => setShowNav(true)}>
                            <FontAwesomeIcon icon={faList} size="2x"/>
                        </button>
                    )}
                    {showNav && (
                        <div className="">
                            <button className="close-btn" onClick={() => setShowNav(false)}>
                                <FontAwesomeIcon icon={faClose} size="2x"/>
                            </button>
                            <ul className="flex flex-col mb-0 pl-0">{nav.map((el, index) => (
                                <li key={index} className="mx-8">
                                    <Link to={el.path} className="link hover:text-[#c9a575] duration-300">{el.page}</Link></li>
                            ))}</ul>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;