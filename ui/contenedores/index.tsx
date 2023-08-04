import styled from 'styled-components'

export const DivIconsHero =  styled.div<any>`
   right: ${((props)=>props.$right)|| "50%"};
   top: ${((props)=>props.$top)|| "15%"};
   -webkit-animation: orbit8 5s linear infinite;
   -moz-animation: orbit8 5s linear infinite;
   -o-animation: orbit8 5s linear infinite;
   animation: orbit8 5s linear infinite;
   opacity: 1;
   @keyframes orbit8 {
      0% {
      transform: rotate(0deg) translateX(20px) rotate(0deg);
      }

      100% {
         transform: rotate(360deg) translateX(20px) rotate(-360deg);
      }
   }
   @media(max-width:700px){
      & > * {
         width: 60px;
      }
   } 
`
export const Container = styled.div`
   display:flex;
   flex-direction:column; 
   justify-content:space-between;
   align-items:center;
   gap:3rem;
   color:${({theme}:any)=>theme.color};
   background-color:${({theme}:any)=>theme.background};
   @media(max-width:700px){
      padding: auto 5%;
   }
`