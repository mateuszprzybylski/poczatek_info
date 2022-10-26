import appSettings from './appSettings.json';
import MainNavbar from './Components/Navbar/MainNavbar';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import { useAppSelector } from './store/hooks';
import styles from './App.module.scss';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';

const App = () => {
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);

  return (
    <div className={styles.app} data-theme={isDarkMode ? 'dark' : 'light'}>
      <MainNavbar />
      {appSettings.isUnderConstrucionEnabled ? (
        <UnderConstruction />
      ) : (
        <>
          <LandingPage />
          <About />
        </>
      )}
    </div>
  );
};

export default App;
