import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white text-center py-6 mt-16">
      <p>&copy; {new Date().getFullYear()} Procorp Tecnologia. Todos os direitos reservados.</p>
    </footer>
  );
}
