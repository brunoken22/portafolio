"use client"
import Image from 'next/image'
import img from "@/ui/img/hero.png"
import {Body,Title} from '@/ui/typography'
import { DivIconsHero } from '@/ui/contenedores'
import Css from '@/ui/icons/css3-alt.svg'
import Express from '@/ui/icons/expressjs-ar21.svg'
import Firebase from '@/ui/icons/firebase.svg'
import Html from '@/ui/icons/html5.svg'
import Js from '@/ui/icons/js.svg'
import Node from '@/ui/icons/node.svg'
import Potsgresql from '@/ui/icons/postgresql.svg'
import ReactSvg from '@/ui/icons/react.svg'
import Typescriptsvg from '@/ui/icons/typescript.svg'

export default function Home() {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",marginTop:"3rem"}}>
      <div><Image src={img} alt="hero" height={0} width={300} style={{backgroundColor:"rgb(229 229 229)",borderRadius:"50%"}}/></div>
      <div style={{display: "flex",flexDirection:"column",justifyContent: "center",alignItems: "center",}}>
          <div>
            <Title>Bruno ken</Title>
            <Body weight="100">Software Developer</Body>
          </div>
         <Body margin="2rem 20%">Tengo un sólido conocimiento en desarrollo Fullstack y un entusiasmo por la creación de soluciones innovadoras. Durante mi formación, he adquirido habilidades en diversas tecnologías, incluyendo desarrollo web front-end con HTML, CSS, TypeScript y frameworks como React.js ,Next.js. También estoy familiarizado con el desarrollo back-end utilizando Node.js, Express y bases de datos como PostgreSQL Y Firebase</Body>
      </div>
    </div>
  ) 
}

      {/* <DivIconsHero right="40%" top="5%"><Firebase/></DivIconsHero>
        <DivIconsHero right="45%" top="20%"><Express/></DivIconsHero>
        <DivIconsHero right="50%" top="30%"><Css/></DivIconsHero>
        <DivIconsHero right="40%" top="45%"><Html/></DivIconsHero>
        <DivIconsHero right="20%" top="5%"><Js/></DivIconsHero>
        <DivIconsHero right="10%" top="18%"><Node/></DivIconsHero>
        <DivIconsHero right="10%" top="30%"><Potsgresql/></DivIconsHero>
        <DivIconsHero right="15%" top="40%"><ReactSvg/></DivIconsHero>
        <DivIconsHero right="28%" top="50%"><Typescriptsvg/></DivIconsHero> */}