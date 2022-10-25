import { render, screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/test-utils';
import ThemeSwitcher, { THEME_ICONS } from './ThemeSwitcher';
import { setupStore } from '../../store/index';
import { disabeDarkMode, enableDarkMode } from '../../store/uiSlice';
import { act } from 'react-dom/test-utils';

jest.mock('../../utils/uiUtils');
const {
  getLocalStorageItem,
  isBrowserDarkMode,
} = require('../../utils/uiUtils');

describe('ThemeSwitcher', () => {
  describe('should render dark theme icon', () => {
    test('if localStorage["isDarkMode"] is not set and browser has light mode', () => {
      getLocalStorageItem.mockImplementation(() => null);
      isBrowserDarkMode.mockImplementation(() => false);
      renderWithProviders(<ThemeSwitcher />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('data-icon', THEME_ICONS.dark.iconName);
    });

    test('if localStorage["isDarkMode"] is set to "false" and browser has light mode', () => {
      getLocalStorageItem.mockImplementation(() => false);
      isBrowserDarkMode.mockImplementation(() => false);
      renderWithProviders(<ThemeSwitcher />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('data-icon', THEME_ICONS.dark.iconName);
    });

    test('if localStorage["isDarkMode"] is set to "false" and browser has dark mode', () => {
      getLocalStorageItem.mockImplementation(() => false);
      isBrowserDarkMode.mockImplementation(() => true);
      renderWithProviders(<ThemeSwitcher />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('data-icon', THEME_ICONS.dark.iconName);
    });

    test('after "disabeDarkMode()" action', () => {
      const store = setupStore();
      renderWithProviders(<ThemeSwitcher />, { store });
      act(() => {
        store.dispatch(disabeDarkMode());
      });
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('data-icon', THEME_ICONS.dark.iconName);
    });
  });

  describe('should render light theme icon', () => {
    test('if localStorage["isDarkMode"] is not set and browser has light mode', () => {
      getLocalStorageItem.mockImplementation(() => null);
      isBrowserDarkMode.mockImplementation(() => true);
      renderWithProviders(<ThemeSwitcher />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('data-icon', THEME_ICONS.light.iconName);
    });

    test('if localStorage["isDarkMode"] is set to "false" and browser has light mode', () => {
      getLocalStorageItem.mockImplementation(() => true);
      isBrowserDarkMode.mockImplementation(() => false);
      renderWithProviders(<ThemeSwitcher />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('data-icon', THEME_ICONS.light.iconName);
    });

    test('if localStorage["isDarkMode"] is set to "true" and browser has dark mode', () => {
      getLocalStorageItem.mockImplementation(() => true);
      isBrowserDarkMode.mockImplementation(() => true);
      renderWithProviders(<ThemeSwitcher />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('data-icon', THEME_ICONS.light.iconName);
    });

    test('after "enableDarkMode()" action', () => {
      const store = setupStore();
      renderWithProviders(<ThemeSwitcher />, { store });
      act(() => {
        store.dispatch(enableDarkMode());
      });
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('data-icon', THEME_ICONS.light.iconName);
    });
  });
});
