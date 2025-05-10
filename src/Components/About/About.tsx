import { Trans, useTranslation } from 'react-i18next';
import styles from './About.module.scss';

type Props = {
  className?: string;
};

const About: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <section id='about' className={styles.about}>
      <div className='container py-5'>
        <div className='row justify-content-between'>
          <div className='col-lg-8 offset-lg-2 align-self-center'>
            <div>
              <h2 className='text-center section-heading font-italic mb-5'>
                <Trans t={t} i18nKey='Menu.About'/>
              </h2>
              <p className='p-heading text-justify'>
                <Trans t={t} i18nKey='About.section1'/>
              </p>
              <p className='p-heading text-justify'>
               <Trans t={t} i18nKey='About.section2'/>
              </p>
              <p className='p-heading text-justify'>
                <Trans t={t} i18nKey='About.section3'/>
              </p>
            </div>
            <div className='row justify-content-between'>
              <div className='col-sm-4 text-center mt-4'>
                <div className={styles.feature}>
                  <div className={styles.title}>{t('About.summary.experience.title')}</div>
                  <div className={styles.subtitle}>{t('About.summary.experience.subtitle')}</div>
                  <div className={styles.description}>{t('About.summary.experience.description')}</div>
                </div>      
              </div>
              <div className='col-sm-4 text-center mt-4'>
                <div className={styles.feature}>
                <div className={styles.title}>{t('About.summary.loans.title')}</div>
                  <div className={styles.subtitle}>{t('About.summary.loans.subtitle')}</div>
                  <div className={styles.description}>{t('About.summary.loans.description')}</div>
                </div>      
              </div>
              <div className='col-sm-4 text-center mt-4'>
                <div className={styles.feature}>
                  <div className={styles.title}>{t('About.summary.rate.title')}</div>
                  <div className={styles.subtitle}>{t('About.summary.rate.subtitle')}</div>
                  <div className={styles.description}>{t('About.summary.rate.description')}</div>
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
