/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

import { waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Navigation and Rendering', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
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
          <App />
        </MemoryRouter>,
      );
    });
  };

  test('renders the App component', () => {
    renderApp();
    expect(container).toBeInTheDocument();
  });

  test('renders default title (About)', async () => {
    renderApp(['/']);
    await waitFor(() => {
      expect(document.title).toBe('About | Sagar Save');
    });
  });

  test('navigates to /about', async () => {
    renderApp(['/about']);
    await waitFor(() => {
      expect(document.title).toBe('About | Sagar Save');
    });
  });

  test('navigates to /resume', async () => {
    renderApp(['/resume']);
    await waitFor(() => {
      expect(document.title).toBe('Resume | Sagar Save');
    });
  });

  test('navigates to /projects', async () => {
    renderApp(['/projects']);
    await waitFor(() => {
      expect(document.title).toBe('Projects | Sagar Save');
    });
  });

  test('navigates to /stats', async () => {
    renderApp(['/stats']);
    await waitFor(() => {
      expect(document.title).toContain('Certifications');
    });
  });

  test('navigates to /contact', async () => {
    renderApp(['/contact']);
    await waitFor(() => {
      expect(document.title).toBe('Contact | Sagar Save');
    });
  });

  test('renders 404 page on unknown route', async () => {
    renderApp(['/unknown']);
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/page not found/i);
    });
  });
});
