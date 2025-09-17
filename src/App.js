import { HelmetProvider } from 'react-helmet-async';
import Homepage from './components/pages/homepage';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Homepage />
      </div>
    </HelmetProvider>
  );
}

export default App;
