import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './UnderConstruction.module.scss';
import { useTranslation } from 'react-i18next';
import appSettings from '../../appSettings.json';
import LandingPage from '../LandingPage/LandingPage';

const UnderConstruction = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['under-construction']}>
      <LandingPage
        belowLogo={
          <div className='row'>
            <div className='col'>
              <p className='mb-5 text-center'>
                ... {t('Site under construction')}
              </p>
            </div>
          </div>
        }
        aside={
          <div className={styles['social-icons']}>
            <div className='d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0'>
              <a
                className='m-1'
                href={appSettings.facebookPageUrl}
                target='_blank'
                rel='noreferrer'
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
