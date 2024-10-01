import React from 'react';
import HeroCard from './HeroCard';
import image1 from '../../assets/img1.jpeg';
import image2 from '../../assets/img2.jpeg';
import image3 from '../../assets/img3.jpeg';
import image4 from '../../assets/img4.jpeg';
import image5 from '../../assets/img5.jpeg';
import imag6 from '../../assets/img6.jpeg';
import HeroBox from './HeroBox';

const Hero = () => {
  return (
    <div className="hero-container">
      <h2 className='heroheader'>Explore Technology</h2>
      <hr />
      <div className="hero-cards">
        <HeroCard 
          id = {1}
          img={image1}
          header="ChatGPT's new Browse with Bing: Watching AIs stalk you is odd"
          content="New Bing-powered ChatGPT cares about providing reliable sources, taking its time, and finding out what you had for..."
        />
        <HeroCard 
          id = {2}
          img={image2}
          header="4 user story templates + how to write them with examples"
          content="User story templates outline product features and functionality. Here are four user story templates with detailed..."
        />
        <HeroCard
          id = {3} 
          img={image3}
          header="Scrum vs. SAFe: Which Agile framework is right for your team?"
          content="Scrum vs. SAFe: Making the right choice for powerful organizational change. We’ll explain each framework, their pros..."
        />
        <HeroCard
          id = {4} 
          img={image4}
          header="Bard vs ChatGPT: Which is better for coding?"
          content="We test out which tool is best at code generation, problem solving, refactoring code, providing debugging assistance..."
        />
        <HeroCard
          id = {5} 
          img={image5}
          header="VCP-DCV: All about VMware's Data Center Virtualization 2023"
          content="What the VCP-DCV is, what to expect, and the recent and upcoming changes to the certification requirements..."
        />
         <HeroCard
          id = {6} 
          img={imag6}
          header="What is R&D capitalization?"
          content="R&D capitalization is a process companies use to categorize research and development costs as investments rather than..."
        />
      </div>

      <div className='herobox'>
        <HeroBox
         header="The top ChatGPT plugins for developers"
         content="From plugins that let you run code inside of ChatGPT to search GitHub for helpful code snippets, here's some tools to..."
        />
        <HeroBox
         header="Don't just consider inclusion on Global Accessibility Awareness Day"
         content="There's 364 more days everyone in involved in development should be thinking about accessibility. One in four of your..."
        />
        <HeroBox
         header="Should I become a technology specialist or generalist?"
         content="We break down the pros and cons of both, how these might impact your salary and career options, and the benefits of.."
        />
        <HeroBox
         header="Terragrunt: Simplifying Infrastructure as Code for the cloud"
         content="Terragrunt is an open-source IaC tool that can make managing infrastructure on cloud platforms a whole lot easier...."
        />
        <HeroBox
         header="How to help engineers make time for on-the-job training"
         content="Lack of time is technologists' biggest barrier to upskilling. Here's how you can help your engineers make time for..."
        />
        <HeroBox
         header="ChatGPT & GPT-4 for most leaders: It's not ready for you (yet)"
         content="Why leaders should take a step back from the hype and check if GPT-4 is really going to add business value, and that..."
        />
      </div>
    </div>
  );
};

export default Hero;
