import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sagar &apos;Save</h2>
        <p>
          <a href="mailto:ssave@umich.edu">ssave@umich.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi I am Sagar, I am a Graduate Student in University of Michigan{' '}
        <a href="https://me.engin.umich.edu//"> Mechanical Engineering department </a>, Former {' '}
        <a href="https://www.royalenfield.com/us/en/home/">Royal Enfiled</a>  Employee, and
        <a href="https://mu.ac.in/">University of Mumbai</a>,
        alumnus.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Sagar &apos;Save <Link to="/">SagarSave.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
