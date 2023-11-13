import React, { Fragment } from "react";


const Content = (data) => {
    // console.log(data.data);
    return (
         (<Fragment>
        <div>
            <h1 className="font-serif font-bold text-4xl">{data.data.category}</h1>
            <h1 className="font-serif font-bold text-4xl">{data.data.title}</h1>
            <div className="my-4 w-full"><img src={data.data.image} alt="blog-detail image" className="w-full rounded-3xl"/></div>
            <div className="flex justify-between">
                <p>{data.data.createdAt}</p>
                <ul className="flex">{data.data.tag.map((el, index) => (
                    <li key={index} className="ml-2">{el}/</li>
                ))}</ul>    
            </div>
            <div className="mt-6">
                {data.data.description}
            </div>
            {/* <div>{data.data.content}.p</div> */}
        </div>
    </Fragment>)
    )
}

export default Content;