import { useTranslation } from 'react-i18next';
import styles from './Partners.module.scss';

import alior from '../../assets/banks/alior.jpg';
import bnp from '../../assets/banks/bnp.jpg';
import bos from '../../assets/banks/bos.jpg';
import bps from '../../assets/banks/bps.jpg';
import bsBrodnica from '../../assets/banks/bs-brodnica.jpg';
import city from '../../assets/banks/city-handlowy.jpg';
import ing from '../../assets/banks/ing.jpg';
import mbank from '../../assets/banks/mbank.jpg';
import millenium from '../../assets/banks/millenium.jpg';
import pekao from '../../assets/banks/pekao.jpg';
import pko from '../../assets/banks/pko.jpg';
import pocztowy from '../../assets/banks/pocztowy.jpg';
import santander from '../../assets/banks/santander.jpg';
import sbr from '../../assets/banks/sbr.jpg';
import velo from '../../assets/banks/velo.jpg';


type Props = {
  className?: string;
};

type PartnerAssetType = { src: string; name: string; url: string };

const partners: Record<string, PartnerAssetType> = {
  alior: {
    src: alior,
    name: 'Alior Bank',
    url: 'https://www.aliorbank.pl/',
  },
  bnp: {
    src: bnp,
    name: 'BNP Paribas',
    url: 'https://www.bnpparibas.pl/',  
  },
  bos: {
    src: bos,
    name: 'Bank Ochrony Środowiska',
    url: 'https://www.bosbank.pl/',
  }, 
  bps: {
    src: bps,
    name: 'Bank Polskiej Spółdzielczości',
    url: 'https://www.bankbps.pl/',
  },
  bsBrodnica: {
    src: bsBrodnica,
    name: 'Bank Spółdzielczy w Brodnicy',
    url: 'https://www.bsbrodnica.pl/',
  },
  city: {
    src: city,
    name: 'City Handlowy',
    url: 'https://www.citibank.pl/',
  },
  ing: {
    src: ing,
    name: 'ING Bank Śląski',
    url: 'https://www.ing.pl/',
  },
  mbank: {
    src: mbank,
    name: 'mBank',
    url: 'https://www.mbank.pl/', 
  },
  millenium: {
    src: millenium,
    name: 'Bank Millennium',
    url: 'https://www.bankmillennium.pl/',
  },
  pekao: {
    src: pekao,
    name: 'Bank Pekao',
    url: 'https://www.pekao.com.pl/',
  },
  pko: {
    src: pko,
    name: 'PKO Bank Polski',
    url: 'https://www.pkobp.pl/',
  },
  pocztowy: {
    src: pocztowy,
    name: 'Bank Pocztowy',
    url: 'https://www.bankpocztowy.pl/',
  },
  santander: {
    src: santander,
    name: 'Santander Bank Polska',
    url: 'https://www.santander.pl/',
  },
  sbr: {
    src: sbr,
    name: 'Spółdzielczy Bank Rozwoju',
    url: 'https://www.sbrbank.pl/',
  },
  velo: {
    src: velo,
    name: 'Velo',
    url: 'https://www.velobank.pl/',
  },
};

const Partners: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <section id='partners' className={styles.partners}>
      <div className='container pt-5'>
        <div className='row justify-content-between'>
          <div className='col-md-8 offset-md-2 align-self-center'>
            <div className='mb-5 pb-md-2'>
              <h2 className='text-center section-heading font-italic mb-5'>
                {t('Menu.Partners')}
              </h2>
              <p className='p-heading text-center'>
                {t('Partners.Description')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-lg pb-5'>
        <div className='row'>
          {Object.values(partners).map((partner: PartnerAssetType) => (
            <div key={partner.name} className='col-3 col-sm-2 mb-4'>
              <a href={partner.url} target='_blank' rel='noreferrer'>
                <img
                  className='img-fluid'
                  src={partner.src}
                  alt={partner.name}
                  title={partner.name}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
