import styled from 'styled-components'

export const DivIconsHero =  styled.div<any>`
   position: absolute;
   right: ${((props)=>props.right)|| "50%"};
   top: ${((props)=>props.top)|| "15%"};
   -webkit-animation: orbit8 1.7s linear infinite;
   -moz-animation: orbit8 1.7s linear infinite;
   -o-animation: orbit8 1.7s linear infinite;
   animation: orbit8 1.7s linear infinite;
   opacity: 0.5;
   @keyframes orbit8 {
      0% {
      transform: rotate(0deg) translateX(20px) rotate(0deg);
      }

      100% {
         transform: rotate(360deg) translateX(20px) rotate(-360deg);
      }
   }
`