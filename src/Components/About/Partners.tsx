import { useTranslation } from 'react-i18next';
import styles from './Partners.module.scss';
import agro from '../../assets/partners/agro.png';
import allianz from '../../assets/partners/allianz.png';
import compensa from '../../assets/partners/compensa.png';
import concordia from '../../assets/partners/concordia.png';
import defend from '../../assets/partners/defend.png';
import ergoHestia from '../../assets/partners/ergo_hestia.png';
import generali from '../../assets/partners/generali.png';
import interRisk from '../../assets/partners/inter_risk.png';
import inter from '../../assets/partners/inter.png';
import link4 from '../../assets/partners/link4.png';
import prevoir from '../../assets/partners/prevoir.png';
import proama from '../../assets/partners/proama.png';
import pru from '../../assets/partners/pru.png';
import pzu from '../../assets/partners/pzu.png';
import signalIduna from '../../assets/partners/signal_iduna.png';
import trasti from '../../assets/partners/trasti.png';
import tuw from '../../assets/partners/tuw.png';
import tuz from '../../assets/partners/tuz.png';
import uniqa from '../../assets/partners/uniqa.png';
import unum from '../../assets/partners/unum.png';
import warta from '../../assets/partners/warta.png';

type Props = {
  className?: string;
};

type PartnerAssetType = { src: string; name: string; url: string };

const partners: Record<string, PartnerAssetType> = {
  agro: { src: agro, name: 'Agro', url: 'https://www.agroubezpieczenia.pl' },
  allianz: {
    src: allianz,
    name: 'Alianz',
    url: 'https://www.allianz.pl/pl_PL/dla-ciebie.html',
  },
  compensa: {
    src: compensa,
    name: 'Compensa',
    url: 'https://www.compensa.pl',
  },
  concordia: {
    src: concordia,
    name: 'Concordia',
    url: 'https://generaliagro.pl',
  },
  defend: {
    src: defend,
    name: 'Defend Insurance',
    url: 'https://www.defendinsurance.eu/pl',
  },
  ergoHestia: {
    src: ergoHestia,
    name: 'Ergo Hestia',
    url: 'https://www.ergohestia.pl',
  },
  generali: {
    src: generali,
    name: 'Generali',
    url: 'https://www.generali.pl',
  },
  interRisk: {
    src: interRisk,
    name: 'Inter Risk',
    url: 'https://interrisk.pl',
  },
  inter: { src: inter, name: 'Inter', url: 'https://interpolska.pl' },
  link4: { src: link4, name: 'Link4', url: 'https://www.link4.pl' },
  prevoir: {
    src: prevoir,
    name: 'Prevoir',
    url: 'https://www.prevoir.pl',
  },
  proama: {
    src: proama,
    name: 'Proama',
    url: 'https://www.proama.pl',
  },
  pru: { src: pru, name: 'Pru', url: 'https://www.pru.pl' },
  pzu: { src: pzu, name: 'PZU', url: 'https://www.pzu.pl' },
  signalIduna: {
    src: signalIduna,
    name: 'Signal Iduna',
    url: 'https://www.signal-iduna.de/',
  },
  trasti: {
    src: trasti,
    name: 'Trasti',
    url: 'https://trasti.pl/pl',
  },
  tuw: { src: tuw, name: 'TUW', url: 'https://tuw.pl' },
  tuz: { src: tuz, name: 'TUZ', url: 'https://tuz.pl/' },
  uniqa: { src: uniqa, name: 'Uniqa', url: 'https://www.uniqagroup.com' },
  unum: { src: unum, name: 'Unum', url: 'https://www.unum.pl' },
  warta: { src: warta, name: 'Warta', url: 'https://www.warta.pl' },
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
