import Css from '@/ui/icons/css3-alt.svg';
import Express from '@/ui/icons/expressjs-ar21.svg';
import Firebase from '@/ui/icons/firebase.svg';
import Js from '@/ui/icons/js.svg';
import Html from '@/ui/icons/html5.svg';
import Node from '@/ui/icons/node.svg';
import Potsgresql from '@/ui/icons/postgresql.svg';
import ReactSvg from '@/ui/icons/react.svg';
import Typescriptsvg from '@/ui/icons/typescript.svg';
import SequelizeSvg from '@/ui/icons/sequelize-svgrepo-com.svg';
import React from 'react';
import {DivIconsHero} from '@/ui/contenedores';
import {ContentIcons, DivContentIcons} from './styled';

export function Skill() {
  return (
    <div style={{textAlign: 'center', width: '100%'}} id='skill'>
      <div>
        <h2>Skill</h2>
      </div>
      <div>
        <DivContentIcons>
          <ContentIcons>
            <DivIconsHero $right='80%' $top='20%'>
              <Firebase />
            </DivIconsHero>
            <DivIconsHero $right='80%' $top='30%'>
              <Html style={{width: '120px !important'}} />
            </DivIconsHero>
            <DivIconsHero $right='80%' $top='40%'>
              <Css />
            </DivIconsHero>
            <DivIconsHero $right='80%' $top='50%'>
              <Js />
            </DivIconsHero>
            <DivIconsHero $right='15%' $top='20%'>
              <Node />
            </DivIconsHero>
            <DivIconsHero $right='15%' $top='30%'>
              <Potsgresql />
            </DivIconsHero>
            <DivIconsHero $right='15%' $top='30%'>
              <SequelizeSvg />
            </DivIconsHero>
            <DivIconsHero $right='15%' $top='40%'>
              <ReactSvg />
            </DivIconsHero>
            <DivIconsHero $right='15%' $top='50%'>
              <Typescriptsvg />
            </DivIconsHero>
            <DivIconsHero $right='80%' $top='30%'>
              <Express style={{width: '120px !important'}} />
            </DivIconsHero>
          </ContentIcons>
        </DivContentIcons>
      </div>
    </div>
  );
}

{
  /* <Swiper
spaceBetween={50}
slidesPerView={3}
autoplay={{
  delay: 1000,
}}>
<SwiperSlide>
  {' '}
  <Firebase />
</SwiperSlide>
<SwiperSlide>
  {' '}
  <Css />
</SwiperSlide>
<SwiperSlide>
  {' '}
  <Js />
</SwiperSlide>
<SwiperSlide>
  {' '}
  <Node />
</SwiperSlide>
<SwiperSlide>
  {' '}
  <Potsgresql />
</SwiperSlide>
<SwiperSlide>
  {' '}
  <ReactSvg />
</SwiperSlide>
<SwiperSlide>
  {' '}
  <Typescriptsvg />
</SwiperSlide>
<SwiperSlide>
  {' '}
  <Express style={{width: '120px !important'}} />
</SwiperSlide>
<SwiperSlide>
  {' '}
  <Html style={{width: '120px !important'}} />
</SwiperSlide>
</Swiper> */
}
