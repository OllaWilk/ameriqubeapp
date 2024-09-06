import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from './layout';
import {
  AboutPage,
  ContactPage,
  CookiesPage,
  HomePage,
  NotFoundPage,
  PrivacyPage,
} from './views';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/cookies' element={<CookiesPage />} />
        <Route path='/privacy' element={<PrivacyPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
