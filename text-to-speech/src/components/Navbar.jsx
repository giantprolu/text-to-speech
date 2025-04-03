import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/app">Home</Link>
      <Link to="/app/convert">Convert</Link>
      <Link to="/app/history">History</Link>
      <Link to="/app/about">About</Link>
    </nav>
  );
}