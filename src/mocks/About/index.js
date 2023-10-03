import { faRightLong } from "@fortawesome/free-solid-svg-icons"
import Whatwedo1 from "../../assets/imgs/Whatwedo1.png"
import Whatwedo2 from "../../assets/imgs/Whatwedo2.png"

import Team1 from "../../assets/imgs/team1.png"
import Team2 from "../../assets/imgs/team2.png"


export const whatwedo = [
    {
        title: 'What We Do',
        des: 'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.',
        btn: 'Our Concept',
        icon: faRightLong,
        img: Whatwedo1
    },
    {
        title: 'The End Result',
        des: 'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.',
        btn: 'Our Portfolio',
        icon: faRightLong,
        img: Whatwedo2
    },
];

export const team = [
    {
        img: Team1,
    },
    {
        img: Team2,
    },
];

export const inputs = [
    {
        field: 'Name',
        id: 'order_product_name',
        type: 'name',
        name: 'order[product_recipient_name]',
        placeholder: 'Name',
        title: 'Missing a valid name domain'
    },
    {
        field: 'Email',
        id: 'order_product_email',
        type: 'email',
        name: 'order[product_recipient_email]',
        placeholder: 'Email',
        title: 'Missing a valid email domain'
    },
];