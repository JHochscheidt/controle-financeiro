import React from 'react';
import Container from './components/Container';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <header>
        <h1>Bootcamp Full Stack - Desafio Final</h1>
      </header>
      <Container />
    </div>
  );
}
