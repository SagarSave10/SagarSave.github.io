/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders the app title', async () => {
    await act(async () => {
      render(<App />);
    });

    const title = screen.getByRole('link', { name: /sagar save/i });
    expect(title).toBeInTheDocument();
  });

  it('navigates to /about', async () => {
    await act(async () => {
      render(<App />);
    });

    const aboutLinks = screen.getAllByRole('link', { name: /about/i });
    fireEvent.click(aboutLinks[0]); // Click first matching "About"
    expect(window.location.pathname).toMatch(/about/i);
  });

  it('navigates to /resume', async () => {
    await act(async () => {
      render(<App />);
    });

    const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
    fireEvent.click(resumeLinks[0]);
    expect(window.location.pathname).toMatch(/resume/i);
  });

  it('navigates to /projects', async () => {
    await act(async () => {
      render(<App />);
    });

    const projectLinks = screen.getAllByRole('link', { name: /projects/i });
    fireEvent.click(projectLinks[0]);
    expect(window.location.pathname).toMatch(/projects/i);
  });

  it('navigates to /stats', async () => {
    await act(async () => {
      render(<App />);
    });

    const statsLinks = screen.getAllByRole('link', { name: /certifications & achievements/i });
    fireEvent.click(statsLinks[0]);
    expect(window.location.pathname).toMatch(/stats/i);
  });

  it('navigates to /contact', async () => {
    await act(async () => {
      render(<App />);
    });

    const contactLinks = screen.getAllByRole('link', { name: /contact/i });
    fireEvent.click(contactLinks[0]);
    expect(window.location.pathname).toMatch(/contact/i);
  });
});
