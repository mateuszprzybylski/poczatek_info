import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
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
    <section id='contact' className={`${styles.contact} pb-5`}>
      <div className='container py-5 mb-5'>
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
            <a href=''>
              <div className='d-flex align-items-center justify-content-md-center'>
                <div className='pe-3'>
                  <FontAwesomeIcon icon={faMap} size='4x' className='pr-3' />
                </div>
                <div>
                  Jedności Narodowej 160 m. 35
                  <br />
                  50-218 Wrocław
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-6 col-lg-4  mt-5 mt-md-0'>
            <a href='mailto: andrzej@poczatek.info'>
              <div className='d-flex align-items-center justify-content-md-center'>
                <div className='pe-3'>
                  <FontAwesomeIcon icon={faEnvelope} size='4x' />
                </div>
                <div>andrzej@poczatek.info</div>
              </div>
            </a>
          </div>
          <div className='col-md-12 col-lg-4 mt-5 mt-lg-0'>
            <a href='tel:+48 790 444 771'>
              <div className='d-flex align-items-center justify-content-md-center'>
                <div className='pe-3'>
                  <FontAwesomeIcon icon={faPhone} size='4x' />
                </div>
                <div>+48 790 444 771</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40079.83231919437!2d17.024028973296357!3d51.10865352677091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c6a2bf2fbd%3A0x2645b68cd5acdf0c!2sJedno%C5%9Bci%20Narodowej%20160%2C%2050-302%20Wroc%C5%82aw%2C%20Poland!5e0!3m2!1sen!2suk!4v1667207631166!5m2!1sen!2suk'
          width='100%'
          height='600'
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
