'use client';
import {useState} from 'react';
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
} from './sytled';
import {DespleHam} from '../hamburg';
import Bk from '@/ui/icons/BK.svg';
import Link from 'next/link';
const pages = [
  {url: 'Skill', id: 'skill'},
  {url: 'Experiencia', id: 'proyectos'},
  {url: 'Contacto', id: 'contacto'},
];

export function Header(props: any) {
  const [desple, setDesple] = useState(false);
  const [theme, setTheme] = useState('default');

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
            <Link href='/' aria-label='logo'>
              <Bk className={`${theme == 'default' ? 'light' : 'default'}`} />
            </Link>
          </div>
          <Div>
            {pages.map((e: any, p: any) => (
              <Enlaces href={'#' + e.id} key={e.id}>
                {e.url}
              </Enlaces>
            ))}
          </Div>
          <Mode>
            <ModeBoton
              onClick={handleCambiar}
              className={`${
                theme == 'default' ? 'modeLight' : 'modeDark'
              }`}></ModeBoton>
          </Mode>
          <Hambug onClick={handleClick}>
            <LineaDiv></LineaDiv>
            <LineaDiv></LineaDiv>
            <LineaDiv></LineaDiv>
          </Hambug>
        </NavBar>
      </HeaderNav>
      {desple ? (
        <DivDespleHam>
          <DespleHam click={handleClickHam} />
        </DivDespleHam>
      ) : null}
    </>
  );
}
