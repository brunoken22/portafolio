"use client"
import Image from 'next/image'
import img from "@/ui/img/hero.png"
import {Body,Title} from '@/ui/typography'
import { Skill } from '@/components/skill'
import { Proyectos } from '@/components/proyectos'
export default function Home() {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",marginTop:"3rem",gap:"3rem"}}>
      <div>
        <div style={{display: "flex",flexDirection:"column",justifyContent: "center",alignItems: "center",}}><Image src={img} alt="hero" height={0} width={300} style={{backgroundColor:"rgb(229 229 229)",borderRadius:"50%"}}/></div>
        <div style={{display: "flex",flexDirection:"column",justifyContent: "center",alignItems: "center",}}>
            <div >
              <Title>Bruno ken</Title>
              <Body $weight="100">Software Developer</Body>
            </div>
          <Body $margin="2rem 20%">Tengo un sólido conocimiento en desarrollo Fullstack y un entusiasmo por la creación de soluciones innovadoras. Durante mi formación, he adquirido habilidades en diversas tecnologías, incluyendo desarrollo web front-end con HTML, CSS, TypeScript y frameworks como React.js ,Next.js. También estoy familiarizado con el desarrollo back-end utilizando Node.js, Express y bases de datos como PostgreSQL Y Firebase.</Body>
        </div>
      </div>
      <Skill/>
      <Proyectos/>
    </div>
  ) 
}

