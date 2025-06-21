/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Navigation and Rendering', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });

  it('renders site title', () => {
    const titleLink = screen.getByRole('link', { name: /sagar save/i });
    expect(titleLink).toBeInTheDocument();
  });

  it('navigates to About page', () => {
    const aboutLink = screen.getAllByRole('link', { name: /about/i })[0];
    fireEvent.click(aboutLink);
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });

  it('navigates to Resume page', () => {
    const resumeLink = screen.getAllByRole('link', { name: /resume/i })[0];
    fireEvent.click(resumeLink);
    expect(screen.getByText(/education/i)).toBeInTheDocument();
  });

  it('navigates to Projects page', () => {
    const projectsLink = screen.getAllByRole('link', { name: /projects/i })[0];
    fireEvent.click(projectsLink);
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });

  it('navigates to Stats page', () => {
    const statsLink = screen.getAllByRole('link', { name: /certifications & achievements/i })[0];
    fireEvent.click(statsLink);
    expect(screen.getByText(/certifications/i)).toBeInTheDocument();
  });

  it('navigates to Contact page', () => {
    const contactLink = screen.getAllByRole('link', { name: /contact/i })[0];
    fireEvent.click(contactLink);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
