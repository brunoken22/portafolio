'use client'
import { useEffect, useState } from 'react';
import { NavBar,Enlaces,Div,HeaderNav,Hambug,LineaDiv,DivDespleHam } from './sytled'; 
import { DespleHam } from '../hamburg';
import Bk from '@/ui/icons/BK.svg'
import Link from 'next/link';
const pages = [ 'Skill','Experiencia','Contacto'];

export function Header() {
  const [desple,setDesple] = useState(false)



  const handleClick = (e:any)=>{
    e.preventDefault();
    if(desple){
      setDesple(false)
      return
    }
    
    setDesple(true)
  }
  const handleClickHam = (click:boolean)=>{
    setDesple(click) 
  }

  return (
    <>
      <HeaderNav>
      <NavBar>
        <div>
          <Link href='/'><Bk/></Link>
        </div>
        <Div  >
          {pages.map((e:any,p:any)=>(<Enlaces href={"#"+p}  key={p}>{e}</Enlaces>))}
        </Div>
        <Hambug onClick={handleClick}>
            <LineaDiv></LineaDiv>
            <LineaDiv></LineaDiv>
            <LineaDiv></LineaDiv>
        </Hambug>
      </NavBar>
    </HeaderNav>
    {
      desple?<DivDespleHam >
      <DespleHam click={handleClickHam}/>
     </DivDespleHam>:null
    }
    </>
  )
}