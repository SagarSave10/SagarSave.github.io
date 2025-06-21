import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';

const Stats = () => {
  useEffect(() => {
    document.title = 'Certifications & Achievements | Sagar Save';
  }, []);

  return (
    <Main
      title="Certifications & Achievements"
      description="Recognitions, credentials, and notable accomplishments of Sagar Save."
    >
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2>
              <Link to="/stats">Certifications & Achievements</Link>
            </h2>
          </div>
        </header>
        <Personal />
      </article>
    </Main>
  );
};

export default Stats;
