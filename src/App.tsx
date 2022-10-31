import appSettings from './appSettings.json';
import MainNavbar from './Components/Navbar/MainNavbar';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import { useAppSelector } from './store/hooks';
import styles from './App.module.scss';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Footer from './Components/About/Footer';
import Contact from './Components/About/Contact';
import Partners from './Components/About/Partners';

const App = () => {
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);

  return (
    <div className={styles.app} data-theme={isDarkMode ? 'dark' : 'light'}>
      {appSettings.isUnderConstrucionEnabled ? (
        <UnderConstruction />
      ) : (
        <>
          <MainNavbar />
          <LandingPage className={styles['landing-page']}/>
          <About />
          <Partners />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
