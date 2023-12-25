import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header className="bg-slate-950 p-4">
        <a href='/' className="text-5xl text-white">TODO LIST</a>
      </header>
      <main className="p-4">{children}</main>
    </>
  );
};

export default Layout;