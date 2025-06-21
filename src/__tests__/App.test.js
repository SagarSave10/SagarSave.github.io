/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import App from '../App';

// Utility to reset window state before each test
const resetWindowState = () => {
  window.scrollTo = jest.fn();
  window.history.pushState({}, '', '/');
};

describe('App Component', () => {
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jsonMock,
      text: textMock,
    }));
    resetWindowState();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the app title', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(document.title).toBe('Sagar Save');
  });

  it('navigates to /about', async () => {
    expect.assertions(7);
    await act(async () => {
      render(<App />);
    });

    // If navigation links are in a menu, open it here
    // const menuBtn = screen.queryByRole('button', { name: /menu/i });
    // if (menuBtn) await act(async () => menuBtn.click());

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();

    await act(async () => {
      aboutLink.click();
    });

    expect(document.title).toMatch(/about/i);
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(global.fetch).toHaveBeenCalled();
    expect(jsonMock).toHaveBeenCalledTimes(0);
    expect(textMock).toHaveBeenCalledTimes(1);
  });

  it('navigates to /resume', async () => {
    await act(async () => {
      render(<App />);
    });

    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink).toBeInTheDocument();

    await act(async () => {
      resumeLink.click();
    });

    expect(document.title).toMatch(/resume/i);
    expect(window.location.pathname).toBe('/resume');
  });

  it('navigates to /projects', async () => {
    await act(async () => {
      render(<App />);
    });

    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();

    await act(async () => {
      projectsLink.click();
    });

    expect(document.title).toMatch(/projects/i);
    expect(window.location.pathname).toBe('/projects');
  });

  it('navigates to /stats', async () => {
    expect.assertions(5);
    await act(async () => {
      render(<App />);
    });

    const statsLink = screen.getByRole('link', { name: /certifications & achievements/i });
    expect(statsLink).toBeInTheDocument();

    await act(async () => {
      statsLink.click();
    });

    expect(document.title).toMatch(/certifications & achievements/i);
    expect(window.location.pathname).toBe('/stats');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledTimes(1);
  });

  it('navigates to /contact', async () => {
    await act(async () => {
      render(<App />);
    });

    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toBeInTheDocument();

    await act(async () => {
      contactLink.click();
    });

    expect(document.title).toMatch(/contact/i);
    expect(window.location.pathname).toBe('/contact');
  });
});