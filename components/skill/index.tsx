import Css from '@/ui/icons/css3-alt.svg'
import Express from '@/ui/icons/expressjs-ar21.svg'
import Firebase from '@/ui/icons/firebase.svg'
import Html from '@/ui/icons/html5.svg'
import Js from '@/ui/icons/js.svg'
import Node from '@/ui/icons/node.svg'
import Potsgresql from '@/ui/icons/postgresql.svg'
import ReactSvg from '@/ui/icons/react.svg'
import Typescriptsvg from '@/ui/icons/typescript.svg'
import React, { useRef, useState } from 'react';
import { DivIconsHero } from '@/ui/contenedores'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Subtitle } from '@/ui/typography'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ContentIcons } from './styled'
export function Skill() {
  return (
      <div style={{textAlign:"center",width:"100%"}} id='2'>
         <hr style={{width:"80%",backgroundColor:"#ddd",boxShadow:"#ddd 0px 100px 1000px 10px"}}/>

         <div>
            <Subtitle>Skill</Subtitle>
         </div>
         <ContentIcons>
            <DivIconsHero $right="80%" $top="20%"><Firebase/></DivIconsHero>
            <DivIconsHero $right="80%" $top="40%"><Css/></DivIconsHero>
            <DivIconsHero $right="80%" $top="50%"><Js/></DivIconsHero>
            <DivIconsHero $right="15%" $top="20%"><Node/></DivIconsHero>
            <DivIconsHero $right="15%" $top="30%"><Potsgresql/></DivIconsHero>
            <DivIconsHero $right="15%" $top="40%"><ReactSvg/></DivIconsHero>
            <DivIconsHero $right="15%" $top="50%"><Typescriptsvg/></DivIconsHero> 
            <DivIconsHero $right="80%" $top="30%"><Express style={{width: "120px !important"}}/></DivIconsHero>
         </ContentIcons>
      </div>
  );
};