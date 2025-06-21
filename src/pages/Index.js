import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => {
  useEffect(() => {
    document.title = 'Home | Sagar Save';
  }, []);

  return (
    <Main
      description="I am a graduate student in Mechanical Engineering at the University of Michigan with a strong background in smart manufacturing systems, semiconductor packaging, integrated microsystems, thermal and fluid analysis, design optimization, and design for manufacturability. With over three years of industry experience at Royal Enfield, I have led more than 20 strategic cost optimization and value engineering projects. My expertise spans design research, project management, vendor coordination, supply chain management, and operations within the automotive sector. Currently, I am involved in the design and development of traction inverters for electric vehicles, working toward power and efficiency targets set by the U.S. Department of Energy for 2030."
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">About this site</Link>
            </h2>
            <p>
              A personal portfolio site showcasing my work in smart manufacturing
              systems, semiconductor packaging, electric vehicle technologies, and
              design for manufacturability — built using modern React and JavaScript
              frameworks.
            </p>
          </div>
        </header>
        <p>
          Welcome to my website. Please feel free to read more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>, view{' '}
          <Link to="/stats">certifications & achievements</Link>, or{' '}
          <Link to="/contact">contact</Link> me.
        </p>
        <p>
          Source available{' '}
          <a href="https://github.com/mldangelo/personal-site">here</a>.
        </p>
      </article>
    </Main>
  );
};

export default Index;
