import { useEffect,useState } from 'react';
import {DivHamburg,DivElemnt,Enlaces} from './styled'
import { useRouter } from 'next/navigation';
const pages = [ 'Skill','Experiencia','Contacto'];

export function DespleHam(props:any){
   const router = useRouter()
   const handleClick = (e:any)=>{
      e.preventDefault()
       props.click(false)
      router.push((e as any).target.href)
   }
   return (
      <>
        <DivHamburg>
            <DivElemnt>
               {pages.map((e:any,p:any)=>(<Enlaces href={"#"+p} onClick={handleClick}  key={p}>{e}</Enlaces>))}
            </DivElemnt>
         </DivHamburg>
      </>
   )
}