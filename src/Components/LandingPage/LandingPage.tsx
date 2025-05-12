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
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
  const currentLanguage = getCurrentLanguage()

  return (
    <div className={`${styles['landing-page']} ${props.className}`}>
      <div className={styles.masthead}>
        <div className={`${styles['masthead-content']}`}>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <img
                  className={`${styles.logo} d-block mx-auto mb-4`}
                  src={require(`../../assets/${currentLanguage}/${
                    isDarkMode ? 'logo_dark' : 'logo'
                  }.webp`)}
                  alt='logo'
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
