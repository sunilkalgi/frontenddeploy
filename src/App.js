import Layout from './layouts/Layout';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-CGWLL81PLV';

ReactGA.initialize(GA_MEASUREMENT_ID);

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
