import { useTranslation } from 'react-i18next';
import { ChangeEvent, ChangeEventHandler } from 'react';
import styles from './LanguageSelector.module.scss';
import { changeLanguageAndRedirect } from '../../i18n';

type Props = {
  className?: string;
};

const LanguageSelector: React.FC<Props> = (props) => {
  const { i18n } = useTranslation();
  const languages = Object.keys(i18n.options.resources || {});
  const selectedLanguage = i18n.languages[0];

  const handleOnSelect: ChangeEventHandler<HTMLSelectElement> = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    changeLanguageAndRedirect(event.target.value);
  };

  return (
    <select
      className={`form-select ${props.className} ${styles['language-selector']}`}
      aria-label='Language selector'
      onChange={handleOnSelect}
      value={selectedLanguage}
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
