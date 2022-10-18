import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLocalStorage from 'use-local-storage';
import styles from './ThemeSwitcher.module.scss';

type Props = {
  className?: string;
};

const ThemeSwitcher: React.FC<Props> = (props) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );
  const isDark = theme === 'dark';

  const handleOnCLick = () => {
    setTheme(isDark ? 'light' : 'dark');
  }

  return (
    <div className={`btn ${props.className} ${styles['theme-switcher']}`} onClick={handleOnCLick}>
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </div>
  );
};

export default ThemeSwitcher;
