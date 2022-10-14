import { useState } from 'react';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
export function Index() {
    const [theme, setTheme] = useState('dark');
    return (<div data-theme={theme}>
      <NavBar setTheme={setTheme}/>
      <Home />
    </div>);
}
export default Index;
//# sourceMappingURL=index.jsx.map