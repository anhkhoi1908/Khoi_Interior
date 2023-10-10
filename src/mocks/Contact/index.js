import { faMailForward, faPhone, faEarth } from "@fortawesome/free-solid-svg-icons";

export const inputs_contact = [
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
    {
        field: 'Subject',
        id: 'order_product_subject',
        type: 'subject',
        name: 'order[product_recipient_subject]',
        placeholder: 'Subject',
        title: 'Missing a valid subject domain'
    },
    {
        field: 'Phone',
        id: 'order_product_phone',
        type: 'phone',
        name: 'order[product_recipient_phone]',
        placeholder: 'Phone',
        title: 'Missing a valid phone domain'
    },
];


export const sub_content = [
    {
        icon: faMailForward,
        content: 'info@yourdomain.com'
    },
    {
        icon: faPhone,
        content: '+1 (378) 400-1234'
    },{
        icon: faEarth,
        content: 'www.yourdomain.com'
    },
]