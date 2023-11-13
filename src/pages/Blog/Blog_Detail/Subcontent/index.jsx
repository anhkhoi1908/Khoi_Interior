import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "../../../../mocks/layout";

const SubContent = (data) => {
    return (
        <Fragment>
            <div>
                <h1 className="font-serif font-bold text-4xl mb-4">{'Design sprints are great'}</h1>
                <p className="mb-8">{'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}</p>
                <p className="text-[#CDA274]">{'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}</p>
                <p className="text-[#CDA274]">{'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}</p>
                <p className="text-[#CDA274]">{'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}</p>
                {/* <div className="my-4"><img src={`/assets/imgs/Blog_detail2.png`}/></div>
                <p>{'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}</p> */}
                <div className="flex justify-between items-center mt-20">
                    <div className="flex items-center">
                        <span className="mr-4 font-bold font-serif">{'Tags'}</span>
                        <span className="mr-4 px-4 py-2 rounded-xl bg-[#292F36] text-white">{'Kitchan'}</span>
                        <span className="mr-4 px-4 py-2 rounded-xl bg-[#F4F0EC]">{'Bedroom'}</span>
                    </div>
                    <ul className="flex pl-0 items-center mb-0">
                        {socialMedia.map((el, index) => (
                            <li key={index} className="mr-8">
                                <Link className="link"><FontAwesomeIcon icon={el} size="2x"/></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default SubContent;