import React from 'react';
import Head from 'next/head';

interface ILayout {
  pageTitle?: string;
  children: React.ReactNode;
}

function Layout(props: ILayout) {
  const { pageTitle, children } = props;

  return (
    <div>
      <Head>
        <title>{pageTitle || 'Dashboard UI'}</title>
        <meta
          name="description"
          content="Dashboard UI created with Next.js and Tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
}

export default Layout;
