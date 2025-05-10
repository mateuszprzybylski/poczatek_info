import { useState } from 'react';
import LanguageSelector from '../Utils/LanguageSelector';
import ThemeSwitcher from '../Utils/ThemeSwitcher';
import styles from './MainNavbar.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeBasedAsset from '../Utils/ThemeBasedAsset';
import logoSmallDark from '../../assets/logo_small_dark.png';
import logoSmallLight from '../../assets/logo_small.png';
import { useTranslation } from 'react-i18next';
import ContactInfo from '../ContactInfo/ContactInfo';

type Props = {
  className?: string;
};

const MainNavbar: React.FC<Props> = (props) => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { t } = useTranslation();

  const handleMenuItemClick = () => {
    setMobileMenuVisible(false);
  }

  const navItems = (
    <ul className='navbar-nav'>
      <li className='nav-item' onClick={handleMenuItemClick}>
        <a href='/#about' className={`nav-link ${styles['nav-link']}`}>
          {t('Menu.About')}
        </a>
      </li>
      <li className='nav-item' onClick={handleMenuItemClick}>
        <a href='/#benefits' className={`nav-link ${styles['nav-link']}`}>
          {t('Menu.Benefits')}
        </a>
      </li>
      <li className='nav-item' onClick={handleMenuItemClick}>
        <a href='/#partners' className={`nav-link ${styles['nav-link']}`}>
          {t('Menu.Partners')}
        </a>
      </li>
      <li className='nav-item' onClick={handleMenuItemClick}>
        <a href='/#faq' className={`nav-link ${styles['nav-link']}`}>
          {t('Menu.Faq')}
        </a>
      </li>
      <li className='nav-item' onClick={handleMenuItemClick}>
        <a href='/#contact' className={`nav-link ${styles['nav-link']}`}>
          {t('Menu.Contact')}
        </a>
      </li>
    </ul>
  );

  const isHiddenNavbar = false && !isMobileMenuVisible;

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <>
      <nav
        className={`navbar justify-content-between ${styles['main-navbar']} ${
          isHiddenNavbar && styles['hidden']
        }`}
      >
        <div className='container-fluid navbar-expand-md justify-content-end'>
          <a className='navbar-brand d-none d-md-flex' href='/'>
            <ThemeBasedAsset
              darkModeAsset={logoSmallDark}
              lightModeAsset={logoSmallLight}
              alt='Poczatek.info'
              height={30}
              width={100}
              className='d-inline-block align-top'
            />
          </a>
          <div className='collapse navbar-collapse justify-content-center d-none d-md-flex'>
            {navItems}
          </div>
          <div className={`d-none d-md-flex ${styles.controls}`}>
            <ThemeSwitcher />
            <LanguageSelector />
          </div>
          <div
            className={`btn d-md-none ${styles['mobile-menu-btn']}`}
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon className='d-md-none' icon={faBars} />
          </div>
        </div>
        
      </nav>
      <div className={`d-flex d-md-none ${styles.controls}`}>
        <ThemeSwitcher />
        <LanguageSelector />
      </div>
      {isMobileMenuVisible && (
        <div className={styles['mobile-menu']}>
          <ThemeBasedAsset
            darkModeAsset={logoSmallDark}
            lightModeAsset={logoSmallLight}
            alt='Poczatek.info'
            height={30}
            width={100}
            className='align-self-start'
          />
          {navItems}
          <ContactInfo />
        </div>
      )}
    </>
  );
};

export default MainNavbar;
