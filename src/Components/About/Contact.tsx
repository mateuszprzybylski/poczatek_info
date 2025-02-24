import { faFacebookMessenger, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store/hooks';
import styles from './Contact.module.scss';

type Props = {
  className?: string;
};

const Contact: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);

  return (
    <section id='contact' className={`${styles.contact}`}>
      <div className='container pb-5'>
        <div className='row'>
          <div className='col'>
            <div className='my-5 pb-2'>
              <h2 className='text-center section-heading font-italic'>
                {t('Menu.Contact')}
              </h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <a href='https://maps.app.goo.gl/gkhn6VFZx2JnyYmA8' target='_blank' rel='norefferer'>
              <div className='d-flex align-items-center'>
                <div className='pe-3'>
                  <FontAwesomeIcon icon={faLocationDot} size='2x' className='pr-3' />
                </div>
                <div>
                  Generała Romualda Traugutta 45
                  <br />
                  50-416 Wrocław
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-6 col-lg-4  mt-4 mt-md-0'>
            <a href='mailto: andrzej@poczatek.info'>
              <div className='d-flex align-items-center'>
                <div className='pe-3'>
                  <FontAwesomeIcon icon={faEnvelope} size='2x' />
                </div>
                <div>andrzej@poczatek.info</div>
              </div>
            </a>
          </div>
          <div className='col-md-6 col-lg-4 mt-4 mt-lg-0'>
            <a href='tel:+48 790 444 771'>
              <div className='d-flex align-items-center'>
                <div className='pe-3'>
                  <FontAwesomeIcon icon={faPhone} size='2x' />
                </div>
                <div>+48 790 444 771</div>
              </div>
            </a>
          </div>
          <div className='col-md-6 col-lg-4 mt-4'>
            <a href='https://wa.me/48790444771' target='_blank' rel='norefferer'>
              <div className='d-flex align-items-center'>
                <div className='pe-3'>
                  <FontAwesomeIcon icon={faWhatsappSquare} size='2x' />
                </div>
                <div>{t('Contact.Contact me on Whatsapp')}</div>
              </div>
            </a>
          </div>
          <div className='col-md-6 col-lg-4 mt-4'>
            <a href='https://m.me/poczatek.kredytu' target='_blank' rel='norefferer'>
              <div className='d-flex align-items-center'>
                <div className='pe-3'>
                  <FontAwesomeIcon icon={faFacebookMessenger} size='2x' />
                </div>
                <div>{t('Contact.Contact me on Messenger')}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.1714897220713!2d17.042539289886058!3d51.105296067102124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2794bffc73b%3A0x504888e2d25154d0!2sGenera%C5%82a%20Romualda%20Traugutta%2045%2C%2050-416%20Wroc%C5%82aw%2C%20Poland!5e0!3m2!1sen!2suk!4v1740421161438!5m2!1sen!2suk'
          width='100%'
          height='600'
          title='map'
          style={{
            border: 0,
            width: '100%',
            height: '350px',
            filter: isDarkMode ? 'invert(90%)' : 'none',
          }}
          loading='lazy'
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
