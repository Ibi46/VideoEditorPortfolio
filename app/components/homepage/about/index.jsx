import React from 'react';
import Skills from '../about/skills.jsx';

const personalData = {
  description: 'I am a passionate video editor with a strong track record of turning raw footage into engaging content. With expertise in various editing tools and techniques, I help creators elevate their videos and reach their audience effectively.',
};

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          MY SKILLS
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Integrate Skills Component */}
        <div className="order-1 lg:order-2">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
