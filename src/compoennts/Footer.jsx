import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
  const links = [
    { href: 'www.linkedin.com/in/haseeb-ahmed-17509a27b', icon: FaLinkedin },
    { href: 'https://github.com/haseebahmed248', icon: FaGithub },
    { href: 'www.linkedin.com/in/_haseeb_.x/', icon: FaInstagram },
    { href: 'https://leetcode.com/u/haseebahmed2345/', icon: SiLeetcode },
  ];

  return (
    <div className='w-full max-w-full justify-center max-h-fit p-4 px-0 flex relative flex-col sm:flex-row'>
        <div className='line w-full h-0.5 bg-slate-800 absolute top-0'></div>
        <div className='
        flex justify-evenly items-center flex-wrap
        '>
        {links.map(({ href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target='_blank'
            rel="noopener noreferrer" 
            className='text-white hover:text-orange-400 shadow-lg hover:animate-pulse transition-all duration-75'
          >
            <Icon className='w-8 h-8 mx-2' />
          </a>
        ))}
        </div>
        <p className='max-w-screen-sm ml-4 h-fit mt-4 sm:mt-0'>
          Hi i'm Haseeb Ahmed, a software engineer based in Pakistan.<br/> I specialize in building exceptional websites,<br/> applications, and everything in between.
        </p>
    </div>
  );
}

export default Footer;