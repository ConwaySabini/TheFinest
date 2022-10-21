import Home from '@/components/Home/Home';
import NavBar from '@/components/NavBar/NavBar';
import { themeAtom } from '@/src/atoms';
import { useAtom } from 'jotai';

const HomePage = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <div data-theme={theme}>
      <NavBar setTheme={setTheme}></NavBar>
      <Home></Home>
    </div>
  );
};

export default HomePage;
