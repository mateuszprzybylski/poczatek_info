import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './UnderConstruction.module.scss';
import { useTranslation } from 'react-i18next';
import appSettings from '../../appSettings.json';
import LandingPage from '../LandingPage/LandingPage';
import ThemeSwitcher from '../Utils/ThemeSwitcher';
import LanguageSelector from '../Utils/LanguageSelector';

const UnderConstruction = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['under-construction']}>
      <div className={styles.controls}>
        <ThemeSwitcher />
        <LanguageSelector />
      </div>
      <LandingPage
        belowLogo={
          <div className='row'>
            <div className='col'>
              <p className='text-center'>
                ... {t('Site under construction')}
              </p>
            </div>
          </div>
        }
        aside={
          <div className={styles['social-icons']}>
            <div>
              <a
                href={appSettings.facebookPageUrl}
                target='_blank'
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size='4x' />
              </a>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default UnderConstruction;
