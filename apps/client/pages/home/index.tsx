import Home from '@/components/Home';
import NavBar from '@/components/NavBar';
import { Context } from '@/src/Context/Context';
import { useContext, useState } from 'react';

export function HomePage() {
  const { theme, setTheme } = useContext(Context);

  return (
    <div data-theme={theme}>
      <NavBar setTheme={setTheme}></NavBar>
      <Home></Home>
    </div>
  );
}

export default HomePage;
