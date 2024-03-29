import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Providers from './Providers';

// pages
import CheckoutPage from './pages/CheckoutPage';
import LandingPage from './pages/LandingPage';
import MaterialPage from './pages/MaterialPage';
import NotFoundPage from './pages/NotFoundPage';
import SingleLineKitePage from './pages/SingleLineKitePage';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/egyzsinoros" element={<SingleLineKitePage />} />
            {/* <Route path="/ketzsinoros" element={<DualLinePage />} /> */}
            <Route path="/anyagok" element={<MaterialPage />} />
            <Route path="/kosar" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
