// _app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Fetch from './../components/fetch'; // Adjust the path as needed

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Fetch />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
