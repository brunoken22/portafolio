import { useEffect,useState } from 'react';
import {DivHamburg,DivElemnt,Enlaces} from './styled'
const pages = [ 'Skill','Experiencia','Contacto'];

export function DespleHam(props:any){

   return (
      <>
        <DivHamburg>
            <DivElemnt>
               {pages.map((e:any,p:any)=>(<Enlaces href={"#"+p} key={p}>{e}</Enlaces>))}
            </DivElemnt>
         </DivHamburg>
      </>
   )
}