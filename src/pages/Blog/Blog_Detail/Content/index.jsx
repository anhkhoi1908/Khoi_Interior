import React, { Fragment } from "react";

const Content = () => {
    return (
        <Fragment>
            <div>
                <h1 className="font-serif font-bold text-4xl">{'Let\'s Get Solution for Building'}</h1>
                <h1 className="font-serif font-bold text-4xl">{'Construction Work'}</h1>
                <div className="my-4"><img src={`/assets/imgs/Blog_detail1.png`} alt="blog-detail image"/></div>
                <div className="flex justify-between">
                    <p>{'26 December,2022'}</p>
                    <p>{'Interior / Design / Home / Decore'}</p>
                </div>
                <div className="mt-6">
                    <p>{'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.'}</p>
                    <p>{'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Content;