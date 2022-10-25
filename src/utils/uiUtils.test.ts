import createMatchMediaMock from '../tests/mocks/matchMedia.mock';
import { isBrowserDarkMode } from './uiUtils';

describe('uiUtils', () => {
  describe('isBrowserDarkMode()', () => {
    test('should return false for light browser mode', () => {
      createMatchMediaMock(false); 
      expect(isBrowserDarkMode()).toBe(false);
    });

    test('should return true for dark browser mode', () => {
      createMatchMediaMock(true); 
      expect(isBrowserDarkMode()).toBe(true);
    });
  });
})
