import React from "react";
import { useState, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const blogs = [
    {
        id: 1,
        image: 'new1.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 2,
        image: 'new1.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 3,
        image: 'new1.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faArrowRight
    },
    {
        id: 4,
        image: 'new1.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 5,
        image: 'new1.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 6,
        image: 'new1.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faArrowRight
    },
    {
        id: 7,
        image: 'new2.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 8,
        image: 'new2.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 9,
        image: 'new2.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faArrowRight
    },
    {
        id: 10,
        image: 'new2.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 11,
        image: 'new2.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 12,
        image: 'new2.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faArrowRight
    },
    {
        id: 13,
        image: 'new3.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 14,
        image: 'new3.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 15,
        image: 'new3.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faArrowRight
    },
    {
        id: 16,
        image: 'new3.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 17,
        image: 'new3.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faArrowRight
    },
    {
        id: 18,
        image: 'new3.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faArrowRight
    },
];

// const post = [{}, {}, {}, {}, {}, {}];


// export const fetchApi = () => {
//     const [post, setPost] = useState([]);
    
//     useEffect(() => {
//         axios.get('https://c2t-api.onrender.com/interior/news')
//         .then(res => {setPost(res.data)})
//         .catch(error => console.log(error))
//     }, [])
    
// }


// useEffect(() => {
//     axios.get('https://c2t-api.onrender.com/interior/news')
//     .then(res => {setPost(res.data)})
//     .catch(error => console.log(error))
// }, [])

export const getBlogs = (page, limit) => {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        axios.get('https://c2t-api.onrender.com/interior/news')
        .then(res => {setPost(res.data)})
        .catch(error => console.log(error))
    }, [])
    let array = [];
    for (let i = (page - 1) * limit; i < (page * limit); i++) {
        array.push(post[i])
    }
    return array;
}

export const getLength = () => {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        axios.get('https://c2t-api.onrender.com/interior/news')
        .then(res => {setPost(res.data)})
        .catch(error => console.log(error))
    }, [])
    return post.length;
}

export const news = [
    {
        title: 'We Focus On Comfort',
        subtitle: 'And Gorgeous',
        date: '06/02/2020'
    },
    {
        title: 'We Focus On Comfort',
        subtitle: 'And Gorgeous',
        date: '06/02/2020'
    },
    {
        title: 'We Focus On Comfort',
        subtitle: 'And Gorgeous',
        date: '06/02/2020'
    },
];

export const category = ['Decoration', 'Door Windows', 'Home Land', 'Roof Installation']

export const tags = ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom']