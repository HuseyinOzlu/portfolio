import { Metadata } from "next";

const title = 'Huseyin Ozlu'
const description = 'Huseyin Ozlu\'s personal website'
export const sharedMetaData: Metadata = {
    title,
    description,
    openGraph:{
        title,
        description,
        type:'website',
        locale: 'en_US',
        url: 'https://huseyinozlu.com/',
    }, 
    twitter:{
        title,
        description,
        creator: "@huseyinozlu",
        site: "@huseyinoozlu",
        card: 'summary_large_image',
    },
};