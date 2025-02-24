import { useTranslation } from 'react-i18next';
import ThemeBasedAsset from '../Utils/ThemeBasedAsset';
import logoSmallDark from '../../assets/logo_small_dark.png';
import logoSmallLight from '../../assets/logo_small.png';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import appSettings from '../../appSettings.json';

const Footer: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <footer id='footer' className={styles.footer}>
      <div className='container-md pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-5 col-lg-4'>
            <div>
              <ThemeBasedAsset
                darkModeAsset={logoSmallDark}
                lightModeAsset={logoSmallLight}
                alt='Poczatek.info'
                height={40}
                width={130}
                className='d-inline-block align-top mb-4'
              />
            </div>
            <div>
              <p>
                Andrzej Początek
                <br />
                Generała Romualda Traugutta 45
                <br />  
                50-416 Wrocław
              </p>
              <p>
                <a href='tel:+48 790 444 771'>+48 790 444 771</a>
                <br />
                <a href='mailto: andrzej@poczatek.info'>
                  andrzej@poczatek.info
                </a>
                <br />
                <br />
                <a
                  href={appSettings.facebookPageUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 col-lg-3 mt-5 mt-sm-0'>
            <h5 className='mb-4'>{t('Footer.Menu')}</h5>
            <ul>
              <li>
                <a href='#'>{t('Menu.Home')}</a>
              </li>
              <li>
                <a href='#about'>{t('Menu.About')}</a>
              </li>
              <li>
                <a href='#partners'>{t('Menu.Partners')}</a>
              </li>
              <li>
                <a href='#faq'>{t('Menu.Faq')}</a>
              </li>
              <li>
                <a href='#contact'>{t('Menu.Contact')}</a>
              </li>
            </ul>
          </div>
          <div className='col-sm-6  col-md-4 col-lg-5  mt-5 mt-md-0'>
            <h5 className='mb-4'>{t('Footer.Useful links')}</h5>
            <ul>
              <li>
                <a
                  href='https://www.infor.pl/kalkulatory/kredyty.html?fobosId=FOB0000000000000702547'
                  target='_blank'
                  rel='noreferrer'
                >
                  {t('Footer.ING mortgage calculator')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid pb-5'>
        <div className='row text-center justify-content-center'>
          <div className='col pt-5 py-3 align-self-center'>
            <div>
              <small>
                © {t('Footer.Copyright')} <b>Andrzej Poczatek</b>.{' '}
                {t('Footer.All Rights Reserved')}
              </small>
            </div>
            <div>
              <small>
                {t('Footer.Designed by')} <i>@Mateusz Przybylski</i>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
