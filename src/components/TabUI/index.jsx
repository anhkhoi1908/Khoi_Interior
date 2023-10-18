import React, { Fragment, useState } from "react";
import { Content, Tab } from "./main.js";
import { categories } from "../../mocks/Projects";
import { 
    Category_bathroom,
    Category_bedroom,
    Category_kitchen,
    Category_living,
} 
from "../../pages/Projects/Categories/Content";


const Categories = () => {
    const [active, setActive] = useState(0);
    const handleClick = (e) => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };

    return (
        <Fragment>
            <div className="w-3/5 mx-auto mt-[10rem]">
                <div>
                    <ul className="pl-0 mx-auto tabs flex justify-center items-center border-2 border-[#c9a575] 
                    rounded-2xl mb-20 font-bold w-4/5">
                        {categories.map((el, index) => (
                            <Tab 
                                key={index} 
                                onClick={handleClick} 
                                active={active === index} 
                                id={index} 
                                className="tab-item w-1/4">{el}
                            </Tab>
                        ))}
                    </ul>
                    <>
                        <Content active={active === 0}><Category_bathroom/></Content>
                        <Content active={active === 1}><Category_bedroom/></Content>
                        <Content active={active === 2}><Category_kitchen/></Content>
                        <Content active={active === 3}><Category_living/></Content>
                        {/* <Content_Categories/> */}
                    </>
                </div>
            </div>
        </Fragment>
    )
};

export default Categories;