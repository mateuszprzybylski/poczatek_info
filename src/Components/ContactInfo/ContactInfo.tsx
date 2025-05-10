import styles from './ContactInfo.module.scss';
import appSettings from '../../appSettings.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

type Props = {
  className?: string;
  showFacebookIcon?: boolean
};

const ContactInfo: React.FC<Props> = ({ className, showFacebookIcon = false }) => {
  return (
    <div className={`${styles['contact-info']} ${className}`}>
      <div className={styles.phone}>
        <a href={`tel:${appSettings.phoneNumber}`}>
          <FontAwesomeIcon icon={faPhone} size='1x'/>
          { appSettings.phoneNumber }
        </a>
      </div>
      <div className={styles.email}>
        <a href={`mailto:${appSettings.email}`}>
          <FontAwesomeIcon icon={faEnvelope} size='1x'/>
          { appSettings.email }
        </a>
      </div>
      { showFacebookIcon && (
          <div className={styles.facebook}>
          <a
            href={appSettings.facebookPageUrl}
            target='_blank'
            rel='noreferrer'
            >
            <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
        </div>
      )}
      
    </div>
  );
};

export default ContactInfo;
