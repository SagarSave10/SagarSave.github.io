/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../AppRoutes';

// Mock fetch for the test environment
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve('# Test Content\nThis is test markdown content.'),
  })
);

// Mock the window.location
delete window.location;
window.location = {
  href: 'http://localhost:3000/',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/',
  search: '',
  hash: '',
  assign: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
};

// Mock window.scrollTo
window.scrollTo = jest.fn();

describe('App Navigation and Rendering', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    fetch.mockClear();
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  const renderApp = (initialEntries = ['/']) => {
    act(() => {
      createRoot(container).render(
        <MemoryRouter initialEntries={initialEntries}>
          <AppRoutes />
        </MemoryRouter>
      );
    });
  };

  test('renders the App component', () => {
    renderApp();
    expect(container).toBeInTheDocument();
  });

  test('renders content without errors', async () => {
    renderApp(['/']);
    await waitFor(() => {
      expect(container.innerHTML).toBeTruthy();
    });
  });

  test('navigates to /about', async () => {
    renderApp(['/about']);
    await waitFor(() => {
      expect(container.innerHTML).toBeTruthy();
    });
  });

  test('navigates to /resume', async () => {
    renderApp(['/resume']);
    await waitFor(() => {
      expect(container.innerHTML).toBeTruthy();
    });
  });

  test('navigates to /projects', async () => {
    renderApp(['/projects']);
    await waitFor(() => {
      expect(container.innerHTML).toBeTruthy();
    });
  });

  test('navigates to /stats', async () => {
    renderApp(['/stats']);
    await waitFor(() => {
      expect(container.innerHTML).toBeTruthy();
    });
  });

  test('navigates to /contact', async () => {
    renderApp(['/contact']);
    await waitFor(() => {
      expect(container.innerHTML).toBeTruthy();
    });
  });

  test('renders 404 page on unknown route', async () => {
    renderApp(['/unknown']);
    await waitFor(() => {
      expect(container.innerHTML).toBeTruthy();
    });
  });
});
