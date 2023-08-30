import { Twitter, Github, Instagram, Linkedin } from 'lucide-react';
import React, { FC } from 'react';
import SocialLink from './SocialLink';

const socials = [
    {
        label: "Twitter",
        icon: Twitter,
        href: 'https://twitter.com/',
    },
    {
        label: "Github",
        icon: Github,
        href: 'https://github.com/',
    },
    {
        label: "Instagram",
        icon: Instagram,
        href: 'https://instagram.com/',
    },
    {
        label: "LinkedIn",
        icon: Linkedin,
        href: 'https://linkedin.com/',
    },
];

type FooterProps = {};

const Footer: FC<FooterProps> = (props) => {
    return( 
        <footer className="flex itemx-center justify-between max-w-3xl mx-auto px-4 w-full h-20 mt-auto">
            <span>© {new Date().getFullYear()} Hüseyin Özlü </span>
            
            <div className='flex items-center space-x-4'>
                {socials.map((social) => (
                <SocialLink
                key={social.label}
                icon={social.icon}
                href={social.href}
                />
                ))}
            </div>
        </footer>
    );
};

export default Footer;