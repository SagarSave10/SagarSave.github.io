/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('renders the app and navigates between pages', () => {
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));

  beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jsonMock,
      text: textMock,
    }));
    window.scrollTo = jest.fn();
  });

  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the app', () => {
    expect(document.body).toBeInTheDocument();
  });

  it('navigates to /about', async () => {
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();

    act(() => {
      aboutLink.click();
    });

    await waitFor(() =>
      expect(document.title).toContain('About |')
    );
    expect(window.location.pathname).toBe('/about');
  });

  it('navigates to /resume', async () => {
    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink).toBeInTheDocument();

    act(() => {
      resumeLink.click();
    });

    await waitFor(() =>
      expect(document.title).toContain('Resume |')
    );
    expect(window.location.pathname).toBe('/resume');
  });

  it('navigates to /projects', async () => {
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();

    act(() => {
      projectsLink.click();
    });

    await waitFor(() =>
      expect(document.title).toContain('Projects |')
    );
    expect(window.location.pathname).toBe('/projects');
  });

  it('navigates to /stats', async () => {
    const statsLink = screen.getByRole('link', { name: /stats/i });
    expect(statsLink).toBeInTheDocument();

    act(() => {
      statsLink.click();
    });

    await waitFor(() =>
      expect(document.title).toContain('Stats |')
    );
    expect(window.location.pathname).toBe('/stats');
    expect(global.fetch).toHaveBeenCalled();
  });

  it('navigates to /contact', async () => {
    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toBeInTheDocument();

    act(() => {
      contactLink.click();
    });

    await waitFor(() =>
      expect(document.title).toContain('Contact |')
    );
    expect(window.location.pathname).toBe('/contact');
  });
});
