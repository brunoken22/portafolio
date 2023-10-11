'use client';
import {Header} from '../header';

import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
const themes: any = {
  default: {
    background: '#0e141b',
    color: '#fff',
  },
  light: {
    background: '#fff',
    color: '#000',
    weight: 'true',
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
