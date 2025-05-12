import styles from './LandingPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store/hooks';
import { getCurrentLanguage } from '../../i18n';

type Props = {
  className?: string;
  belowLogo?: React.ReactNode;
  aside?: React.ReactNode;
};

const LandingPage: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
  const currentLanguage = getCurrentLanguage()

  return (
    <div className={`${styles['landing-page']} ${props.className}`}>
      <div className={styles.masthead}>
        <div className={`${styles['masthead-content']}`}>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h1 className='d-none'>{t('LandingPage.header')}</h1>
                <img
                  className={`${styles.logo} d-block mx-auto mb-4`}
                  src={require(`../../assets/${currentLanguage}/${
                    isDarkMode ? 'logo_dark' : 'logo'
                  }.webp`)}
                  alt={t('LandingPage.header')}
                />
              </div>
            </div>
            <div className='text-center'>
              {props.belowLogo}
            </div>
          </div>
        </div>
      </div>
      {props.aside}
    </div>
  );
};

export default LandingPage;
