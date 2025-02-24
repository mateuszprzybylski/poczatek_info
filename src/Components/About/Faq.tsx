import { Trans, useTranslation } from 'react-i18next';
import styles from './Faq.module.scss';
import { Accordion } from 'react-bootstrap';

type Props = {
  className?: string;
};

type FaqEntry = {
  question: string;
  answer: string;
}

const Faq: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const faqEntries = t("Faq", { returnObjects: true }) as Map<string, FaqEntry>

  console.log(faqEntries)

  return (
    <section id='faq' className={styles.faq}>
      <div className='container py-5'>
        <div className='row justify-content-between'>
          <div className='col-lg-8 offset-lg-2 align-self-center'>
            <div>
              <h2 className='text-center section-heading font-italic mb-5'>
                <Trans t={t} i18nKey='Menu.Faq'/>
              </h2>
            
              <Accordion defaultActiveKey="0">
              {Object.values(faqEntries).map((entry, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{entry.question}</Accordion.Header>
                <Accordion.Body>
                {entry.answer}
                </Accordion.Body>
              </Accordion.Item>
              ))}
              </Accordion>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
