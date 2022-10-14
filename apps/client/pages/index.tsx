import NxHome from '../components/NxHome';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import Home from '../components/Home';

export function Index() {
  const [theme, setTheme] = useState('dark');

  return (
    <div data-theme={theme}>
      <NavBar setTheme={setTheme} />
      <Home />
    </div>
  );
}

export default Index;
