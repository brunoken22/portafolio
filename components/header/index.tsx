"use client"
import { NavBar,Enlaces,Div,HeaderNav } from './sytled'; 
import Bk from '@/ui/icons/BK.svg'
const pages = ['Experiencia', 'Skill', 'Contacto'];

export function Header() {

  return (
    <HeaderNav>
      <NavBar>
        <div>
          <Bk/>
        </div>
        <Div>
          <Enlaces href="#1">Experiencia</Enlaces>
          <Enlaces href="#2">Skill</Enlaces>
          <Enlaces href="#3">Contacto</Enlaces>
        </Div>
      </NavBar>
    </HeaderNav>
  )
}
