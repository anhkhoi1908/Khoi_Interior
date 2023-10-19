import React, { Fragment } from "react";
import Banner_Inner from "../../../../components/layout_inner/Banner_Inner";
import { details_cate, details_content } from "../../../../mocks/Projects";
import { Link } from "react-router-dom";

const Project_Detail = () => {
    return (
        <Fragment>
            <Banner_Inner img={`/assets/imgs/Banner_project_detail.png`} title={'Project Detail'} subtitle={'Home / Project_Detail'}/>
            <div className="w-4/5 mt-[10rem] mx-auto">
                <div className="flex">
                    <div className="flex justify-evenly">
                        <div className="flex justify-center items-center bg-[#F4F0EC] rounded-[4rem] w-2/5">
                            <ul className="pl-0 mr-6">
                                {details_cate.map((el, index) => (
                                    <li key={index} className="my-4"><span className="font-bold font-serif">{el}</span></li>
                                ))}
                            </ul>
                            <ul className="pl-0">
                                {details_content.map((el, index) => (
                                    <li key={index} className="my-4"><span>{el}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-2/5">
                            <h1 className="text-4xl font-serif font-bold">{'Minimal Look Bedrooms'}</h1>
                            <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.'}</p>
                            <p>{'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[70%] mx-auto mt-[10rem] relative">
                <Link className="link hover:brightness-75 duration-300">
                    <div className=""><img src={`/assets/imgs/Image_project_detail.png`}/></div>
                    <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"><img src={`/assets/imgs/Zoom_icon.png`}/></div>
                </Link>
            </div>
        </Fragment>
    );
};

export default Project_Detail;