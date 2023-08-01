'use client'
import { useEffect, useState } from 'react';
import { NavBar,Enlaces,Div,HeaderNav,Hambug,LineaDiv,DivDespleHam } from './sytled'; 
import { DespleHam } from '../hamburg';
import Bk from '@/ui/icons/BK.svg'
const pages = ['Experiencia', 'Skill', 'Contacto'];

export function Header() {
  const [desple,setDesple] = useState(false)

  const handleClick = (e:any)=>{
    e.preventDefault();

    setDesple(true)
  }

  return (
    <>
        <HeaderNav>
      <NavBar>
        <div>
          <Bk/>
        </div>
        <Div  >
          {pages.map((e:any,p:any)=>(<Enlaces key={p}>{e}</Enlaces>))}
        </Div>
        <Hambug onClick={handleClick}>
            <LineaDiv></LineaDiv>
            <LineaDiv></LineaDiv>
            <LineaDiv></LineaDiv>
        </Hambug>
      </NavBar>
    </HeaderNav>
    {
      desple?    <DivDespleHam >
      <DespleHam desple={desple}/>
    </DivDespleHam>:null
    }
    </>
  )
}