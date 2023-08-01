import { useEffect } from 'react';
import {DivHamburg,DivElemnt,Enlaces} from './styled'
const pages = ['Experiencia', 'Skill', 'Contacto'];

export function DespleHam(props:any){
   


   return (
      <>
         {props.desple?<DivHamburg>
            <DivElemnt>
               {pages.map((e:any,p:any)=>(<Enlaces key={p}>{e}</Enlaces>))}
            </DivElemnt>
         </DivHamburg>:null}
      </>
   )
}