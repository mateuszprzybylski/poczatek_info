import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  disabeDarkMode,
  enableDarkMode,
  toggleDarkMode,
} from '../../store/uiSlice';
import styles from './ThemeSwitcher.module.scss';

type Props = {
  className?: string;
};

const ThemeSwitcher: React.FC<Props> = (props) => {
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localStorageDarkMode = localStorage.getItem('isDarkMode');

    if (localStorageDarkMode === null) {
      const isBrowserDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (isBrowserDarkMode) {
        dispatch(enableDarkMode());
      }
    } else {
      const isDarkModeInLocalStorage = JSON.parse(localStorageDarkMode);

      isDarkModeInLocalStorage
        ? dispatch(enableDarkMode())
        : dispatch(disabeDarkMode());
    }
  }, [dispatch]);

  const handleOnCLick = useCallback(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
    dispatch(toggleDarkMode());
  }, [dispatch, isDarkMode]);

  return (
    <div
      className={`btn ${props.className} ${styles['theme-switcher']}`}
      onClick={handleOnCLick}
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </div>
  );
};

export default ThemeSwitcher;
