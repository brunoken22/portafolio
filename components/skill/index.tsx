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
import StyleComSvg from '@/ui/icons/styled-components-svgrepo-com (1).svg';
import NextSvg from '@/ui/icons/next-js-svgrepo-com.svg';
import React from 'react';
import './style.css';
import {DivContentIcons, DivSlider} from './styled';
import CodingSvg from '@/ui/icons/coding.svg';
import {Subtitle} from '@/ui/typography';
export function Skill() {
  return (
    <div
      style={{textAlign: 'center', width: '100%', paddingTop: '5rem'}}
      id='habilidades'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Subtitle>
          <CodingSvg className='codingSvg' />
          Habilidades
        </Subtitle>
      </div>
      <DivSlider>
        <DivContentIcons className='slide-track'>
          <div className='slide'>
            <Firebase />
          </div>
          <div className='slide'>
            <Html style={{width: '120px !important'}} />
          </div>
          <div className='slide'>
            <Css />
          </div>
          <div className='slide'>
            <Js />
          </div>
          <div className='slide'>
            <Node />
          </div>
          <div className='slide'>
            <Potsgresql />
          </div>
          <div className='slide'>
            <SequelizeSvg />
          </div>
          <div className='slide'>
            <ReactSvg />
          </div>
          <div className='slide'>
            <NextSvg />
          </div>
          <div className='slide'>
            <StyleComSvg />
          </div>
          <div className='slide'>
            <Typescriptsvg />
          </div>
          <div className='slide'>
            <Express style={{width: '120px !important'}} />
          </div>
          <div className='slide'>
            <Firebase />
          </div>
          <div className='slide'>
            <Html style={{width: '120px !important'}} />
          </div>
          <div className='slide'>
            <Css />
          </div>
          <div className='slide'>
            <Js />
          </div>
          <div className='slide'>
            <Node />
          </div>
          <div className='slide'>
            <Potsgresql />
          </div>
          <div className='slide'>
            <SequelizeSvg />
          </div>
          <div className='slide'>
            <ReactSvg />
          </div>
          <div className='slide'>
            <NextSvg />
          </div>
          <div className='slide'>
            <StyleComSvg />
          </div>
          <div className='slide'>
            <Typescriptsvg />
          </div>
          <div className='slide'>
            <Express style={{width: '120px !important'}} />
          </div>
        </DivContentIcons>
      </DivSlider>
    </div>
  );
}
