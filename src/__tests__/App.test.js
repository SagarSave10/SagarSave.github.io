/**
 * @jest-environment jsdom
 */

import React, { act } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jsonMock,
      text: textMock,
    }));
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the app title', async () => {
    render(<App />);
    expect(document.title).toBe('Sagar Save');
  });

  it('can navigate to /about', async () => {
    expect.assertions(7);
    render(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      aboutLink.click();
    });
    expect(document.title).toContain('About |');
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(global.fetch).toHaveBeenCalled();
    expect(jsonMock).toHaveBeenCalledTimes(0);
    expect(textMock).toHaveBeenCalledTimes(1);
  });

  it('can navigate to /resume', async () => {
    render(<App />);
    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink).toBeInTheDocument();
    await act(async () => {
      resumeLink.click();
    });
    expect(document.title).toContain('Resume |');
    expect(window.location.pathname).toBe('/resume');
  });

  it('can navigate to /projects', async () => {
    render(<App />);
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();
    await act(async () => {
      projectsLink.click();
    });
    expect(document.title).toContain('Projects |');
    expect(window.location.pathname).toBe('/projects');
  });

  it('can navigate to /stats', async () => {
    expect.assertions(5);
    render(<App />);
    const statsLink = screen.getByRole('link', { name: /certifications & achievements/i });
    expect(statsLink).toBeInTheDocument();
    await act(async () => {
      statsLink.click();
    });
    expect(document.title).toContain('Certifications & Achievements |');
    expect(window.location.pathname).toBe('/stats');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledTimes(1);
  });

  it('can navigate to /contact', async () => {
    render(<App />);
    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      contactLink.click();
    });
    expect(document.title).toContain('Contact |');
    expect(window.location.pathname).toBe('/contact');
  });
});
