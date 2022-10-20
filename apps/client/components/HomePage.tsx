import { useContext } from 'react';
import { Context } from '@/src/Context/Context';
import NavBar from '@/components/NavBar';
import Home from '@/components/Home';

const HomePage = () => {
  const { theme, setTheme } = useContext(Context);

  return (
    <div data-theme={theme}>
      <NavBar setTheme={setTheme}></NavBar>
      <Home></Home>
    </div>
  );
};

export default HomePage;
