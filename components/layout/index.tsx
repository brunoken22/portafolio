'use client';
import {Header} from '../header';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
const themes: any = {
  default: {
    background: '#0e141b',
    color: '#fff',
    lineaGradient:
      'linear-gradient(to right,rgba(14, 20, 27, 0.1) 20%,rgba(14, 20, 27, 0.9) 100% )',
  },
  light: {
    background: '#fff',
    color: '#000',
    weight: 'true',
    lineaGradient:
      'linear-gradient(to right,rgba(255, 255, 255, 0.1)20%,rgba(255, 255, 255, 0.9)100% )',
  },
};
export function Layout({children}: any) {
  const [tema, setTema] = useState('default');

  const handleTema = (e: any) => {
    if (tema == 'default') {
      setTema('light');
      return;
    }
    setTema('default');
  };

  return (
    <ThemeProvider theme={themes[tema]}>
      <Header tema={handleTema} />
      {children}
    </ThemeProvider>
  );
}
