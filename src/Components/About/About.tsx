import { useTranslation } from 'react-i18next';
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
          <div className='col-md-8 offset-md-2 align-self-center'>
            <div>
              <h2 className='text-center section-heading font-italic'>
                {t('Menu.About')}
              </h2>
              <p className='p-heading text-justify'>
                {t('About.About content')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
