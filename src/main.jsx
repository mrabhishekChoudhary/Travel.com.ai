// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip';
import Header from './components/custom/Header';

import { Toaster } from './components/ui/sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './constants/view-trip/[tripId]';
import MyTrip from './my-trips';
import Footer from './constants/view-trip/components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-trip',
    element: <CreateTrip />,
  },
  {
    path: '/view-trip/:tripId',
    element: <Viewtrip />,
  },
  {
    path: '/my-trips',
    element: <MyTrip />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Toaster />
          <RouterProvider router={router} />
        </main>
        <Footer/>
      </div>
    </GoogleOAuthProvider>
  </StrictMode>,
);
