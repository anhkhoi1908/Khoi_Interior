import React, { Fragment } from "react";

const Quote = () => {
    return (
        <Fragment>
            <div className="bg-[#F4F0EC] rounded-3xl my-10">
                <div className="font-serif flex flex-col justify-between items-center p-6 text-[#CDA274] py-10">
                    <img src={`/assets/imgs/Quote.png`}/>
                    <h1 className="text-2xl mt-[0.5rem]">{'The details are not the details.'}</h1>
                    <h1 className="text-2xl">{'They make the design.'}</h1>
                </div>
            </div>
        </Fragment>
    )
}

export default Quote;