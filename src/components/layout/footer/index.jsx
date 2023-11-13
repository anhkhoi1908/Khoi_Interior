import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { socialMedia, innerPage } from "../../../mocks/layout";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div id="footer" className="b-0 mt-[10rem] text-[#292F36]">
          <ul className="flex justify-center flex-wrap">
            <div className="w-[20rem] footer_social">
              <div className="footer_logo">
                <Link to="#" className="flex items-center link">
                  <img src={`/assets/imgs/Logo.png`} alt="Logo Page" width="30" height="30" />
                  <span className="ml-3 font-dm-serif font-bold text-4xl">{"Interior"}</span>
                </Link>
              </div>
              <p className="my-8 font-jost tracking-wider">{"It is a long established fact that a reader will be distracted lookings."}</p>
              <ul className="flex flex-row pl-0">
                {socialMedia.map((el, index) => (
                  <li key={index} className="mr-8">
                    <Link className="link"><FontAwesomeIcon icon={el} size="2x"/></Link>
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="flex">
            <div className="flex mx-16">
              {innerPage.map((el, index) => (
                <div key={index} className="w-[10rem]">
                  <h1 className="font-dm-serif text-2xl font-bold">{el.title}</h1>
                    <div className="flex flex-col">
                      {el.list.map((el, index) => (
                        <Link key={index} className="my-4 link" to={el.path}><span className="hover:text-[#c9a575] duration-300 font-jost">{el.title}</span></Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[14rem]"> 
              <h1 className="text-2xl font-bold font-dm-serif">{"Contact"}</h1>
              <p className="mt-6 font-jost">{"55 Earst Brichwood Ave. Brooklyn, New York 11201"}</p>
              <p className="mt-6 font-jost">{"contact@interior.com"}</p>
              <p className="mt-6 font-jost">{"(123) 456 - 789"}</p>
            </div>
            </div>
          </ul>
          <p className="text-center mt-20 mb-10 font-jost">
            {"Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow"}
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
