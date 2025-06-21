import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => {
  useEffect(() => {
    document.title = '404 Not Found | Sagar Save';
  }, []);

  return (
    <HelmetProvider>
      <div className="not-found">
        <Helmet>
          <title>404 Not Found</title>
          <meta
            name="description"
            content="The content you are looking for cannot be found."
          />
        </Helmet>
        <h1>Page Not Found</h1>
        <p>
          Return <Link to="/">home</Link>.
        </p>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;
