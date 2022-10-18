import appSettings from './appSettings.json';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import { useAppSelector } from './store/hooks';

const App = () => {
  const isDarkMode = useAppSelector(state => state.ui.isDarkMode);

  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'}>
      {appSettings.isUnderConstrucionEnabled ? (
        <UnderConstruction />
      ) : (
        <p>App</p>
      )}
    </div>
  );
};

export default App;
