import HomePage from '@/components/HomePage';
import ContextProvider from '@/src/Context/Context';

export function MainPage() {
  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  );
}

export default MainPage;
