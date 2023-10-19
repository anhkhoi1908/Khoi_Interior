import React, { Fragment } from "react";

const LatestPost = () => {
    return (
        <Fragment>
            <div className="w-3/5 mx-auto mt-[10rem]">
                <h1 className="font-serif font-bold text-4xl mb-10">{'Latest Post'}</h1>
                <div id="latest_post" className="flex justify-between items-center">
                    <div><img src={`/assets/imgs/LatestPost.png`} width={400} height={400}/></div>
                    <div className="latest_post_content w-1/2">
                        <p className="font-serif font-bold text-2xl">{'Low Cost Latest Invented Interior Designing Ideas'}</p>
                        <p>{'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.'}</p>
                        <p>{'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'}</p>
                        <p className="mt-10">{'26 December,2022'}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LatestPost;