import styled from 'styled-components'

export const Title = styled.h1`
   font-size: 4rem;
   margin-bottom: 0;
   text-align: center;
`
export const Subtitle = styled.h2`
   font-size: 2rem;
   text-align: center;
`
export const Body = styled.p<any>`
   font-size: ${((props:any)=>props.$size?props.$size:"1.2rem")};
   font-weight: ${((props:any)=>props.$weight?props.$weight:300)};
   margin:${((props:any)=>props.$margin?props.$margin:0)};
   text-align: center;
   @media (max-width:700px) {
      margin-left: 2%;
      margin-right: 2%;
   }
`
