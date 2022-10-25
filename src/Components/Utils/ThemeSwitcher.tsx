import { useCallback, useEffect } from 'react';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  disabeDarkMode,
  enableDarkMode,
  toggleDarkMode,
} from '../../store/uiSlice';
import {
  getLocalStorageItem,
  isBrowserDarkMode,
  setLocalStorageItem,
} from '../../utils/uiUtils';
import styles from './ThemeSwitcher.module.scss';

type Props = {
  className?: string;
};

export const THEME_ICONS = {
  dark: faMoon,
  light: faSun,
}

const ThemeSwitcher: React.FC<Props> = (props) => {
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isDarkMode = getLocalStorageItem<boolean>('isDarkMode');

    if (isDarkMode === null) {
      if (isBrowserDarkMode()) {
        dispatch(enableDarkMode());
      }
    } else {
      isDarkMode ? dispatch(enableDarkMode()) : dispatch(disabeDarkMode());
    }
  }, [dispatch]);

  const handleOnCLick = useCallback(() => {
    setLocalStorageItem('isDarkMode', !isDarkMode);
    dispatch(toggleDarkMode());
  }, [dispatch, isDarkMode]);

  return (
    <div
      className={`btn ${props.className} ${styles['theme-switcher']}`}
      onClick={handleOnCLick}
    >
      <FontAwesomeIcon icon={isDarkMode ? THEME_ICONS.light : THEME_ICONS.dark} />
    </div>
  );
};

export default ThemeSwitcher;
