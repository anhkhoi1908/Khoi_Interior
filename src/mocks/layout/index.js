import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const nav = [
    {
        page: 'Home',
        path: '/'
    },
    {
        page: 'Services',
        path: '/services'
    },
    {
        page: 'Project',
        path: '/projects'
    },
    {
        page: 'Teams',
        path: '/team'
    },
    {
        page: 'Blog',
        path: '/blog'
    },
    {
        page: 'Contact',
        path: '/contact'
    },
];

export const socialMedia = [faFacebook, faInstagram, faLinkedin, faTwitter];
export const innerPage = [
  {
    title: "Pages",
    list: [
        {
            title: "About Us",
            path: '/about'
        },
        {
            title: "Our projects",
            path: '/projects'
        },
        {
            title: "Our Team",
            path: '/team'
        },
        {
            title: "Contact Us",
            path: '/contact'
        },
        {
            title: "Services",
            path: '/services'
        }
    ],
  },
  {
    title: "Services",
    list: [
        {
            title: "Kitchan",
            path: '/projects'
        },
        {
            title: "Living Area",
            path: '/projects'
        },
        {
            title: "Bathroom",
            path: '/projects'
        },
        {
            title: "Dinning Hall",
            path: '/projects'
        },
        {
            title: "Bedroom",
            path: '/projects'
        }
    ],
  },
];