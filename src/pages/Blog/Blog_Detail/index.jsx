import React, { Fragment, useEffect, useState } from "react";
import Banner_Inner from "../../../components/layout_inner/Banner_Inner";
import Content from "./Content";
import Quote from "./Quote";
import SubContent from "./Subcontent";
import Sidebar from "./Sidebar";
import Reply from "./Reply";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const Blog_Detail = () => {
  const [data, setData] = useState(null);
    let [searchParams, setSearchParams] = useSearchParams();
    const fetch = async (bid) => {
        await axios.get(`https://c2t-api.onrender.com/interior/news/${bid}`).then(rs => {
                if(rs.status >= 400 && rs.status <= 599) return null
                if(rs.status >= 200 && rs.status <= 399) setData(rs.data);
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(searchParams.get('bid'))
    }, [searchParams.get('bid')])
    return (
        <Fragment>
        <Banner_Inner img={`/assets/imgs/Banner_blog_detail.png`} title={'Articles'} subtitle={'Home / Blog_Detail'}/>
        <div className="flex w-[70%] mx-auto justify-around mt-[10rem]">
            <div className="w-3/5">
                {data !== null && <Content data={data}/>}
                <Quote/>
                <SubContent/>
                <Reply/>
            </div>
            <div className="w-[30%]"><Sidebar/></div>
        </div>
        </Fragment>
    );
};

export default Blog_Detail;