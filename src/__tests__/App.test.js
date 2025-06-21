/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('renders the app', () => {
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: jsonMock,
      text: textMock,
    }),
  );

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

  it('should render the app', () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', () => {
    expect(document.title).toBe('Sagar Save');
  });

  it('can navigate to /about', async () => {
    expect.assertions(7);
    const link = document.querySelector('#header > nav > ul > li:nth-child(1) > a');
    expect(link).toBeInTheDocument();
    await act(async () => {
      link.click();
    });
    expect(document.title).toContain('About |');
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenNthCalledWith(1, 0, 0);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledTimes(0);
    expect(textMock).toHaveBeenCalledTimes(1);
  });

  it('can navigate to /resume', async () => {
    expect.assertions(3);
    const link = document.querySelector('#header > nav > ul > li:nth-child(2) > a');
    expect(link).toBeInTheDocument();
    await act(async () => {
      link.click();
    });
    expect(document.title).toContain('Resume |');
    expect(window.location.pathname).toBe('/resume');
  });

  it('can navigate to /projects', async () => {
    expect.assertions(3);
    const link = document.querySelector('#header > nav > ul > li:nth-child(3) > a');
    expect(link).toBeInTheDocument();
    await act(async () => {
      link.click();
    });
    expect(document.title).toContain('Projects |');
    expect(window.location.pathname).toBe('/projects');
  });

  it('can navigate to /stats', async () => {
    expect.assertions(5);
    const link = document.querySelector('#header > nav > ul > li:nth-child(4) >
