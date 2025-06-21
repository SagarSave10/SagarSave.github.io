/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

describe('App Navigation and Rendering', () => {
  let container;

  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    await act(async () => {
      render(<App />, { container });
    });

    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });

  it('can navigate to /about', async () => {
    const history = createMemoryHistory();
    history.push('/about');

    await act(async () => {
      render(
        <Router location={history.location} navigator={history}>
          <App />
        </Router>,
        { container }
      );
    });

    expect(screen.getByText(/Background/i)).toBeInTheDocument();
  });

  it('can navigate to /resume', async () => {
    const history = createMemoryHistory();
    history.push('/resume');

    await act(async () => {
      render(
        <Router location={history.location} navigator={history}>
          <App />
        </Router>,
        { container }
      );
    });

    expect(screen.getByText(/Education/i)).toBeInTheDocument();
  });

  it('can navigate to /projects', async () => {
    const history = createMemoryHistory();
    history.push('/projects');

    await act(async () => {
      render(
        <Router location={history.location} navigator={history}>
          <App />
        </Router>,
        { container }
      );
    });

    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });

  it('can navigate to /stats', async () => {
    const history = createMemoryHistory();
    history.push('/stats');

    await act(async () => {
      render(
        <Router location={history.location} navigator={history}>
          <App />
        </Router>,
        { container }
      );
    });

    expect(screen.getByText(/Certifications & Achievements/i)).toBeInTheDocument();
    expect(window.location.pathname).toBe('/stats');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledTimes(1);
  });

  it('can navigate to /contact', async () => {
    const history = createMemoryHistory();
    history.push('/contact');

    await act(async () => {
      render(
        <Router location={history.location} navigator={history}>
          <App />
        </Router>,
        { container }
      );
    });

    expect(screen.getByText(/Get in touch/i)).toBeInTheDocument();
  });
});
