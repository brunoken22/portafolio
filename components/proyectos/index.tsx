"use client"
import * as contentful from 'contentful'
import { TemplateProyect,DivProyectos,Botton } from "./styled"
import { Subtitle,Body } from "@/ui/typography"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Heart from '@/ui/icons/heart.svg'
import {  Zoom} from "react-awesome-reveal";

const client = contentful.createClient({
  space: 'dehbm7ub5p2i',
  accessToken: 'vfQ16mfGkwZCKSPTKJypjjLoKDZH_6mZgkD__9if1ws',
})
export function Proyectos(){
   const [proyect,setProyect]  = useState()
   useEffect(()=>{
      client.getEntries({ content_type: 'cms' })
      .then((response:any) => {
         const productos = response.items;
         setProyect(productos)
      })
   },[])
   return(
      <div id="1">
         <div>
            <Subtitle>Experiencia</Subtitle>
         </div>
         <DivProyectos>
            {proyect?(proyect as any).map((el:any,p:any)=>{return (<div key={p}><Zoom
 
><TemplateProyect ><Link href={el.fields.linkDeArticle} key={p} target='blank'>
               <Image src={el.fields.linkImgPagina} width={350} height={230} alt={el.fields.appMisPelis}></Image></Link>
               <div >
                  <Body>{el.fields.appMisPelis}</Body>
                 <div style={{display: "flex",justifyContent: "space-between",alignItems: "center",padding: "1rem",height:"90px"}}>
                     <Body $weight="100" $size={"1rem"}>{"0"} Me gusta</Body>
                     <Botton onClick={(e:any)=>e.target.style.fill="tomato"}><Heart ></Heart></Botton>
                 </div>
               </div>
            </TemplateProyect></Zoom></div>)}):null}
         </DivProyectos>
      </div>   
   )
}