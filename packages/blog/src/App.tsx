import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { lightTheme } from '@kimdw524/dds';
import './app.css';
import './styles/fonts.css';
import './styles/reset.css';
import { modalCenter } from './styles/modal.css';

import Home from './pages/Home';

import Layout from './components/Layout';

import { ModalProvider } from '@kimdw524/utils/useModal';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className={lightTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ModalProvider defaultAnimation={modalCenter}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </ModalProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
