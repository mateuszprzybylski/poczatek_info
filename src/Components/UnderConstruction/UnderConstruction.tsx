import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './UnderConstruction.module.scss';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../Utils/LanguageSelector';


const UnderConstruction = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={styles['under-construction']}>
      <LanguageSelector className={styles['language-selector']}/>
      <div className={styles.masthead}>
        <div className={`${styles['masthead-content']} text-black`}>
          <div className='container'>
            
            <div className='row'>
              <div className='col'>
                <img className={`${styles.logo} d-block mx-auto`} src={require(`../../assets/${currentLanguage}/logo.png`)} alt="logo"/>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p className='mb-5 text-center'>... {t('Page in build')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['social-icons']}>
        <div className='d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0'>
          <a
            className='m-1 link-secondary'
            href='https://www.facebook.com/poczatek.kredytu'
            target='_blank'
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
