import React, { Component } from 'react';
import ResumeModal from './ResumeModal';

class Description extends Component {
  render() {
    return (
      <div>
        <p className='description'>
          After studying art in college, I became a professional photographer for several years in Los Angeles, California.  Looking to move towards graphic design, I moved back to Washington, D.C. in 2014.  It took a couple years to realize that the design work that was most compelling, required a skill set I did not yet have, web development.  Growing up in the 90s, I saw the possibilities of the internet expand in infinite directions.  This led me to the GW Coding Bootcamp, which opened my imagination to what could be accomplished by not only combining my design skills with web development, but also creating full-stack applications.  I love the aspect of having the elegance of ones front end UI/UX team perfectly with a backend that allows the website to accomplish extraordinary feats.
        </p>
        <ResumeModal />
      </div>
    )
  };
}

export default Description;
