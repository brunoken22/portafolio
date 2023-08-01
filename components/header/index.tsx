"use client"
import { useEffect, useState,useRef } from 'react';
import { NavBar,Enlaces,Div,HeaderNav,Hambug,LineaDiv } from './sytled'; 
import Bk from '@/ui/icons/BK.svg'
const pages = ['Experiencia', 'Skill', 'Contacto'];

export function Header() {
  const [width, setWidth] = useState(false);
  const hambur = useRef(null)
  const nohambur:any = useRef(null)

  useEffect(()=>{
    console.log("hola2")
    if (nohambur.current) {
      console.log(nohambur.current);
    }
  },[])


  return (
    <HeaderNav>
      <NavBar>
        <div>
          <Bk/>
        </div>
        <Div ref={nohambur} >
          {pages.map((e:any,p:any)=>(<Enlaces key={p}>{e}</Enlaces>))}
        </Div>
        <Hambug  ref={hambur}>
          <LineaDiv></LineaDiv>
          <LineaDiv></LineaDiv>
          <LineaDiv></LineaDiv>
        </Hambug>
      </NavBar>
    </HeaderNav>
  )
}