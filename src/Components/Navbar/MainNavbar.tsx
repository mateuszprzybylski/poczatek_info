import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAppSelector } from '../../store/hooks';
import LanguageSelector from '../Utils/LanguageSelector';
import ThemeSwitcher from '../Utils/ThemeSwitcher';
import styles from './MainNavbar.module.scss';

type Props = {
  className?: string;
};

const MainNavbar: React.FC<Props> = (props) => {
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      className={`${styles['main-navbar']} ${offset > 56 && styles['visible']}`}
    >
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            src={require(`../../assets/${
              isDarkMode ? 'logo_small_dark' : 'logo_small'
            }.png`)}
            width='100'
            height='30'
            className='d-inline-block align-top'
            alt='Poczatek.info'
          />
        </Navbar.Brand>
        <div className={`d-flex ${styles.controls}`}>
          <ThemeSwitcher />
          <LanguageSelector />
        </div>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
