import React from 'react';
import HeroCard from './HeroCard';
import image1 from '../../assets/img1.jpeg';
import image2 from '../../assets/img2.jpeg';
import image3 from '../../assets/img3.jpeg';
import image4 from '../../assets/img4.jpeg';
import image5 from '../../assets/img5.jpeg';
import imag6 from '../../assets/img6.jpeg';

const Hero = () => {
  return (
    <div className="hero-container">
      <h2 className='heroheader'>Explore Technology</h2>
      <hr />
      <div className="hero-cards">
        <HeroCard 
          img={image1}
          header="ChatGPT's new Browse with Bing: Watching AIs stalk you is odd"
          content="New Bing-powered ChatGPT cares about providing reliable sources, taking its time, and finding out what you had for..."
        />
        <HeroCard 
          img={image2}
          header="4 user story templates + how to write them with examples"
          content="User story templates outline product features and functionality. Here are four user story templates with detailed..."
        />
        <HeroCard 
          img={image3}
          header="Scrum vs. SAFe: Which Agile framework is right for your team?"
          content="Scrum vs. SAFe: Making the right choice for powerful organizational change. We’ll explain each framework, their pros..."
        />
        <HeroCard 
          img={image4}
          header="Bard vs ChatGPT: Which is better for coding?"
          content="We test out which tool is best at code generation, problem solving, refactoring code, providing debugging assistance..."
        />
        <HeroCard 
          img={image5}
          header="VCP-DCV: All about VMware's Data Center Virtualization 2023"
          content="What the VCP-DCV is, what to expect, and the recent and upcoming changes to the certification requirements..."
        />
         <HeroCard 
          img={imag6}
          header="What is R&D capitalization?"
          content="R&D capitalization is a process companies use to categorize research and development costs as investments rather than..."
        />
      </div>
    </div>
  );
};

export default Hero;
