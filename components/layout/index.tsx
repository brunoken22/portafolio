'use client';
import {Header} from '../header';
import React, {useEffect, useState} from 'react';
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
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.matches) {
      document.documentElement.classList.add('dark');
      return setTema('default');
    }
    document.documentElement.classList.remove('dark');
    setTema('light');
  }, []);
  const handleTema = () => {
    if (tema == 'default') {
      setTema('light');
      document.documentElement.classList.remove('dark');
      return;
    }
    document.documentElement.classList.add('dark');

    setTema('default');
  };

  return (
    <ThemeProvider theme={themes[tema]}>
      <Header tema={handleTema} defaultTheme={tema} />
      {children}
    </ThemeProvider>
  );
}
