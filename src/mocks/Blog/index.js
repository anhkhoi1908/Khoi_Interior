import { faRightLong } from "@fortawesome/free-solid-svg-icons";

export const blogs = [
    {
        id: 1,
        image: 'new1.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 2,
        image: 'new1.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 3,
        image: 'new1.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faRightLong
    },
    {
        id: 4,
        image: 'new1.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 5,
        image: 'new1.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 6,
        image: 'new1.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faRightLong
    },
    {
        id: 7,
        image: 'new2.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 8,
        image: 'new2.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 9,
        image: 'new2.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faRightLong
    },
    {
        id: 10,
        image: 'new2.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 11,
        image: 'new2.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 12,
        image: 'new2.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faRightLong
    },
    {
        id: 13,
        image: 'new3.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 14,
        image: 'new3.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 15,
        image: 'new3.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faRightLong
    },
    {
        id: 16,
        image: 'new3.png',
        title: 'Let\'s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 17,
        image: 'new3.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        date: '26 December, 2022',
        icon: faRightLong
    },
    {
        id: 18,
        image: 'new3.png',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        icon: faRightLong
    },
];

export const getBlogs = (page, limit) => {
    let array = [];
    for (let i = (page - 1) * limit; i < (page * limit); i++) {
        array.push(blogs[i])
    }
    return array;
}

export const getLength = () => {
    return blogs.length;
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