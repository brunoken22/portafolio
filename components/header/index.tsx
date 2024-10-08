'use client';
import {useEffect, useState} from 'react';
import {
  NavBar,
  Enlaces,
  Div,
  HeaderNav,
  Hambug,
  LineaDiv,
  DivDespleHam,
  ModeBoton,
  Mode,
  DivWhatsaap,
  EnlaceWhatsaap,
} from './sytled';
import {DespleHam} from '../hamburg';
import Link from 'next/link';
import Bk from '@/ui/icons/logoByMe.svg';
import WhatsaapSvg from '@/ui/icons/whatsapp.svg';
import SunSvg from '@/ui/icons/sun.svg';
import NightSvg from '@/ui/icons/night.svg';

const pages = [
  {url: 'Habilidades', id: 'habilidades'},
  {url: 'Proyectos', id: 'proyectos'},
  {url: 'Contacto', id: 'contacto'},
];

export function Header(props: any) {
  const [desple, setDesple] = useState(false);
  const [theme, setTheme] = useState<'default' | 'light'>(props.defaultTheme);

  useEffect(() => {
    setTheme(props.defaultTheme);
  }, [props.defaultTheme]);
  const handleClick = (e: any) => {
    e.preventDefault();
    if (desple) {
      setDesple(false);
      return;
    }
    setDesple(true);
  };
  const handleClickHam = (click: boolean) => {
    setDesple(click);
  };
  const handleCambiar = (e: any) => {
    e.preventDefault();
    if (theme == 'default') {
      setTheme('light');
      props.tema('light');
      return;
    }

    props.tema('default');
    setTheme('default');
  };
  return (
    <>
      <HeaderNav>
        <NavBar>
          <div>
            <Link href='/#inicio' aria-label='logo'>
              <Bk className={`${theme == 'default' ? 'light' : 'default'}`} />
            </Link>
          </div>
          <Div>
            {pages.map((e) => (
              <Enlaces href={'#' + e.id} key={e.id}>
                {e.url}
              </Enlaces>
            ))}
          </Div>
          <Mode>
            <ModeBoton
              onClick={handleCambiar}
              className={`${theme == 'default' ? 'modeLight' : 'modeDark'}`}>
              {theme == 'default' ? <SunSvg /> : <NightSvg />}
            </ModeBoton>
          </Mode>
          <Hambug
            aria-label='open desple'
            onClick={handleClick}
            $isActive={desple}>
            <LineaDiv $isActive={!desple} className='dark:bg-white'></LineaDiv>
            <LineaDiv $isActive={desple} className='dark:bg-white'></LineaDiv>
            <LineaDiv $isActive={desple} className='dark:bg-white'></LineaDiv>
          </Hambug>
        </NavBar>
      </HeaderNav>
      {desple ? (
        <DivDespleHam>
          <DespleHam click={handleClickHam} />
        </DivDespleHam>
      ) : null}
      <DivWhatsaap>
        <EnlaceWhatsaap
          aria-label='Visítame en whatsaap'
          href='https://api.whatsapp.com/send?phone=+541161204047&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20'
          target='_blank'>
          <WhatsaapSvg />
        </EnlaceWhatsaap>
      </DivWhatsaap>
    </>
  );
}
