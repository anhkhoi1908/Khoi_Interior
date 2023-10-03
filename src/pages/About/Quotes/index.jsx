import React, { Fragment } from "react";

const Quotes = () => {
    return (
        <Fragment>
            <div className="w-2/5 flex flex-col items-center text-center mx-auto border-[1rem] rounded-3xl p-14 mt-[10rem]
            relative before:absolute before:content-[''] before:bg-white before:w-[68%] before:h-[4rem] before:top-[-10%]
            after:absolute after:content-[''] after:bg-white after:w-[68%] after:h-[4rem] after:bottom-[-10%]
            ">
                <h1 className="font-serif font-bold text-4xl">{"“"}</h1>
                <h1 className="font-serif font-bold text-2xl italic my-6">
                {"I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it"}</h1>
                <p>{"-BUNNY WILLIAMS"}</p>
            </div>
        </Fragment>
    );
};

export default Quotes;