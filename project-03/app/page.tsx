import React from 'react';
import Image from 'next/image';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';



export default function Home () {
  return (
  <div>
    <About></About>
    <Contact></Contact>
      <Image
      src="/istock-814684194-coffee-x.jpg"
    alt="this is my homepage" height={1200} width={1400}></Image>
      </div>
)
};

