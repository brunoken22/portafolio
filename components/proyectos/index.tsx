"use client"
import * as contentful from 'contentful'
import { TemplateProyect,DivProyectos,Botton } from "./styled"
import { Subtitle,Body } from "@/ui/typography"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Heart from '@/ui/icons/heart.svg'
import {Zoom} from "react-awesome-reveal";
import { ObtenerLikes,SubirLikes } from '@/lib/hook'

const client = contentful.createClient({
  space: 'dehbm7ub5p2i',
  accessToken: 'vfQ16mfGkwZCKSPTKJypjjLoKDZH_6mZgkD__9if1ws',
})
export function Proyectos(){
   const [proyect,setProyect]  = useState()
   const { data, error, isLoading } = ObtenerLikes();


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
            {proyect && data?(proyect as any).map((el:any,p:number)=>{return (<div key={p}><Zoom><TemplateProyect ><Link id={data[p].id} href={el.fields.linkDeArticle} key={p} target='blank'>
               <Image src={el.fields.linkImgPagina} width={350} height={230} alt={el.fields.appMisPelis}></Image></Link>
               <div >
                  <Body>{el.fields.appMisPelis}</Body>
                  <Like data={data[p]}/>
               </div>
            </TemplateProyect></Zoom></div>)}):null}
         </DivProyectos>
      </div>   
   )
}

function Like (props:any){
   const [contador,setContador] = useState(0)
   const [newData,setNewData] = useState({})
   const { data, error, isLoading } = SubirLikes(newData);

   useEffect(()=>{
      setContador(props.data.likes)
   },[props.data])
   const handleClick = (e:any)=>{
      e.preventDefault();
      e.target.style.fill = "tomato"
      setContador((e:number)=>e+1)
      setNewData({
         id:props.data.id,
         proyect:props.data.proyect,
         like:true
      })
   }

   return (
      <div style={{display: "flex",justifyContent: "space-between",alignItems: "center",padding: "1rem",height:"90px"}} >
         <Body $weight="100" $size={"1rem"}>{contador} Me gusta</Body>
         <Botton onClick={handleClick}><Heart ></Heart></Botton>
      </div>
   )
}