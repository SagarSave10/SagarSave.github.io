/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('renders the app', () => {
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));
  window.scrollTo = jest.fn();

  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      ReactDOM.createRoot(container).render(<App />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toBe('Sagar Save');
  });

  it('can navigate to /about', async () => {
    const links = document.querySelectorAll('a');
    const aboutLink = links[0]; // update index if needed
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      aboutLink.click();
    });
    expect(document.title).toContain('About |');
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(global.fetch).toHaveBeenCalled();
  });

  it('can navigate to /resume', async () => {
    const links = document.querySelectorAll('a');
    const resumeLink = links[1];
    expect(resumeLink).toBeInTheDocument();
    await act(async () => {
      resumeLink.click();
    });
    expect(document.title).toContain('Resume |');
    expect(window.location.pathname).toBe('/resume');
  });

  it('can navigate to /projects', async () => {
    const links = document.querySelectorAll('a');
    const projectsLink = links[2];
    expect(projectsLink).toBeInTheDocument();
    await act(async () => {
      projectsLink.click();
    });
    expect(document.title).toContain('Projects |');
    expect(window.location.pathname).toBe('/projects');
  });

  it('can navigate to /stats', async () => {
    const links = document.querySelectorAll('a');
    const statsLink = links[3];
    expect(statsLink).toBeInTheDocument();
    await act(async () => {
      statsLink.click();
    });
    expect(document.title).toContain('Stats |');
    expect(window.location.pathname).toBe('/stats');
    expect(global.fetch).toHaveBeenCalled();
  });

  it('can navigate to /contact', async () => {
    const links = document.querySelectorAll('a');
    const contactLink = links[4];
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      contactLink.click();
    });
    expect(document.title).toContain('Contact |');
    expect(window.location.pathname).toBe('/contact');
  });
});
