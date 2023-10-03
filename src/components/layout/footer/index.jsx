import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../../../assets/imgs/Logo.png";
import { socialMedia, innerPage } from "../../../mocks/layout";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div id="footer" className="b-0 mt-[10rem] text-[#292F36]">
          <div className="flex justify-center">
            <div className="w-[20rem]">
              <div className="footer_logo">
                <Link to="#" className="flex items-center">
                  <img src={Logo} alt="Logo Page" width="30" height="30" />
                  <span className="ml-3 font-serif font-bold text-3xl">{"Interior"}</span>
                </Link>
              </div>
              <p className="my-8">
                {"It is a long established fact that a reader will be distracted lookings."}
              </p>
              <ul className="flex">
                {socialMedia.map((el, index) => (
                  <li key={index} className="mr-8">
                    <Link>
                      <FontAwesomeIcon icon={el} size="2x"/>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex mx-16">
              {innerPage.map((el) => (
                <div className="w-[10rem]">
                  <h1 className="font-serif text-2xl font-bold">{el.title}</h1>
                    <div className="flex flex-col">
                      {el.list.map((el) => (
                        <Link className="my-4">
                          <span>{el}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[14rem]"> 
              <h1 className="text-2xl font-bold">{"Contact"}</h1>
              <p className="mt-6">{"55 Earst Brichwood Ave. Brooklyn, New York 11201"}</p>
              <p className="mt-6">{"contact@interior.com"}</p>
              <p className="mt-6">{"(123) 456 - 789"}</p>
            </div>
          </div>
          <h1 className="text-center mt-20 mb-10">
            {"Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow"}
          </h1>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
