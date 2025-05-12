import { useTranslation } from 'react-i18next';
import styles from './Benefits.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Trans } from 'react-i18next';

type Props = {
  className?: string;
};

const Benefits: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <section id='benefits' className={styles.benefits}>
      <div className='container pt-5 pb-5'>
        <div className='row justify-content-between'>
          <div className='col-md-6 offset-md-3 align-self-center'>
            <div className='mb-5 pb-md-2'>
              <h2 className='text-center section-heading font-italic mb-5'>
                {t('Menu.Benefits')}
              </h2>
              <p className='p-heading text-center'>
                <Trans i18nKey="Benefits.Description" components={{ strong: <strong /> }} />
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-content-between'>
          <div className='col-md-6 offset-md-3 align-self-center'> 
            <div className='row justify-content-center'>
              <div className='col-2 align-items-end'>
                <FontAwesomeIcon icon={faUserTie} size='2x' />
              </div>
              <div className='col-10'>
                <h3><b>{t('Benefits.section1.title')}</b></h3>
                <p>{t('Benefits.section1.description')}</p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 align-items-end'>
                <FontAwesomeIcon icon={faClock} size='2x' />
              </div>
              <div className='col-10'>
              <h3><b>{t('Benefits.section2.title')}</b></h3>
              <p>{t('Benefits.section2.description')}</p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 align-items-end'>
                <FontAwesomeIcon icon={faCoins} size='2x' />
              </div>
              <div className='col-10'>
                <h3><b>{t('Benefits.section3.title')}</b></h3>
                <p>{t('Benefits.section3.description')}</p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 align-items-end'>
                <FontAwesomeIcon icon={faThumbsUp} size='2x' />
              </div>
              <div className='col-10'>
                <h3><b>{t('Benefits.section4.title')}</b></h3>
                <p>{t('Benefits.section4.description')}</p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 align-items-end'>
                <FontAwesomeIcon icon={faHandshake} size='2x' />
              </div>
              <div className='col-10'>
                <h3><b>{t('Benefits.section5.title')}</b></h3>
                <p>{t('Benefits.section5.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
