import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './UnderConstruction.module.scss';
import logo from "../../assets/logo.png";

const UnderConstruction = () => {
  return (
    <div className={styles['under-construction']}>
      <div className={styles.masthead}>
        <div className={`${styles['masthead-content']} text-black`}>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <img className={`${styles.logo} d-block mx-auto`} src={logo} alt="logo"/>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p className='mb-5 text-center'>... strona w budowie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['social-icons']}>
        <div className='d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0'>
          <a
            className='m-1 link-secondary'
            href='https://www.facebook.com/poczatek.kredytu/about'
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
