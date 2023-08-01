"use client"
import { useEffect, useState,useRef } from 'react';
import { NavBar,Enlaces,Div,HeaderNav,Hambug,LineaDiv } from './sytled'; 
import Bk from '@/ui/icons/BK.svg'
const pages = ['Experiencia', 'Skill', 'Contacto'];

export function Header() {





  return (
    <HeaderNav>
      <NavBar>
        <div>
          <Bk/>
        </div>
        <Div  >
          {pages.map((e:any,p:any)=>(<Enlaces key={p}>{e}</Enlaces>))}
        </Div>
        <Hambug >
          <LineaDiv></LineaDiv>
          <LineaDiv></LineaDiv>
          <LineaDiv></LineaDiv>
        </Hambug>
      </NavBar>
    </HeaderNav>
  )
}