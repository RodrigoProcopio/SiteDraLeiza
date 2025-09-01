import React from 'react';
import Home from './pages/Home';
import Header from './components/Header'; // <-- Adiciona aqui

export default function App() {
  return (
<div className="w-screen overflow-x-hidden pt-16 md:pt-20">
  <Header />
  <Home />
</div>

  );
}
