/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('App Navigation and Rendering', () => {
  // Mock global fetch used on stats/about pages
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: jsonMock,
      text: textMock,
    })
  );

  // Mock scrollTo
  window.scrollTo = jest.fn();

  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the App component', () => {
    expect(document.body).toBeInTheDocument();
  });

  it('renders default title', () => {
    expect(document.title).toContain('Sagar Save');
  });

  it('navigates to /about', async () => {
    const aboutLink = screen.getAllByRole('link', { name: /about/i })[0];
    expect(aboutLink).toBeInTheDocument();

    await act(async () => {
      aboutLink.click();
    });

    await waitFor(() => expect(document.title).toContain('About |'));
    expect(window.location.pathname).toBe('/about');
  });

  it('navigates to /resume', async () => {
    const resumeLink = screen.getAllByRole('link', { name: /resume/i })[0];
    expect(resumeLink).toBeInTheDocument();

    await act(async () => {
      resumeLink.click();
    });

    await waitFor(() => expect(document.title).toContain('Resume |'));
    expect(window.location.pathname).toBe('/resume');
  });

  it('navigates to /projects', async () => {
    const projectLink = screen.getAllByRole('link', { name: /projects/i })[0];
    expect(projectLink).toBeInTheDocument();

    await act(async () => {
      projectLink.click();
    });

    await waitFor(() => expect(document.title).toContain('Projects |'));
    expect(window.location.pathname).toBe('/projects');
  });

  it('navigates to /stats', async () => {
    const statsLink = screen.getAllByRole('link', { name: /certifications|stats/i })[0];
    expect(statsLink).toBeInTheDocument();

    await act(async () => {
      statsLink.click();
    });

    await waitFor(() => expect(document.title).toContain('Certifications |'));
    expect(global.fetch).toHaveBeenCalled();
    expect(window.location.pathname).toBe('/stats');
  });

  it('navigates to /contact', async () => {
    const contactLink = screen.getAllByRole('link', { name: /contact/i })[0];
    expect(contactLink).toBeInTheDocument();

    await act(async () => {
      contactLink.click();
    });

    await waitFor(() => expect(document.title).toContain('Contact |'));
    expect(window.location.pathname).toBe('/contact');
  });
});
