import { useEffect,useState } from 'react';
import {DivHamburg,DivElemnt,Enlaces} from './styled'
const pages = [ 'Skill','Experiencia','Contacto'];

export function DespleHam(props:any){
   const handleClick = (e:any)=>{
      e.preventDefault()
      props.click(false)
   }
   return (
      <>
        <DivHamburg>
            <DivElemnt>
               {pages.map((e:any,p:any)=>(<Enlaces onClick={handleClick} href={"#"+p} key={p}>{e}</Enlaces>))}
            </DivElemnt>
         </DivHamburg>
      </>
   )
}