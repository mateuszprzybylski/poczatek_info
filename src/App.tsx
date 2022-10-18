import useLocalStorage from 'use-local-storage';
import appSettings from './appSettings.json';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';

const App = () => {
  const [theme] = useLocalStorage('theme', 'light');

  console.log("theme", theme)

  return (
    <div data-theme={theme}>
      {appSettings.isUnderConstrucionEnabled ? (
        <UnderConstruction />
      ) : (
        <p>App</p>
      )}
    </div>
  );
};

export default App;
